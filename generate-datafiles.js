'use strict';
let sqlite3 = require('sqlite3');
let async = require('async');
let db = new sqlite3.Database('ipip.db');

let aspects = {};
let questions = [];

async.parallel({
	aspects: async.apply(db.all.bind(db), 'SELECT facet, aspect, alpha FROM facet'),
	questions: async.apply(db.all.bind(db), 'SELECT prompt, facet, inverted FROM question'),
	descriptors: async.apply(db.all.bind(db), 'SELECT facet, inverted, GROUP_CONCAT(word, \', \') AS words FROM descriptor GROUP BY facet, inverted'),
}, (err, result) => {
	if (err) throw err;

	let aspects = {};
	for (let row of result.aspects) {
		if (row.aspect && row.alpha) {
			aspects[row.facet] = {
				aspect: row.aspect,
				alpha: row.alpha,
			};
		}
	}

	let questions = result.questions.map(row => ({
			prompt: row.prompt,
			facet: row.facet,
			inverted: !!row.inverted,
	}));

	let descriptors = {};
	for (let row of result.descriptors) {
		if (row.inverted) {
			descriptors['-'+row.facet] = row.words;
		} else {
			descriptors['+'+row.facet] = row.words;
		}
	}

	console.log('exports.aspects = ' + JSON.stringify(aspects) + ';');
	console.log('exports.questions = ' + JSON.stringify(questions) + ';');
	console.log('exports.descriptors = ' + JSON.stringify(descriptors) + ';');
});

