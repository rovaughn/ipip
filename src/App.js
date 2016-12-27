import React, { Component } from 'react';
import Immutable from 'immutable';
import './App.css';
import { aspects, questions, descriptors, likes } from './data';

function mean(xs) {
	let sum = 0;
	for (let x of xs) { sum += x; }
	return sum / xs.length;
}

function harmonic_mean(xs) {
	let product = 1;
	for (let x of xs) { product *= x; }
	return Math.pow(product, 1 / xs.length);
}

// return the score for each facet given a list of answers.  If a facet is
// missing it is implicitly zero.
function answers_scores(answers) {
	let facets = {};

	function add(facet, value) {
		facets[facet].push(value);
	
		let aspect = aspects[facet];
		if (aspect) {
			add(aspect.aspect, aspect.alpha * value);
		}
	}

	for (let question of questions) {
		facets[question.facet] = [];
		facets[aspects[question.facet].aspect] = [];
	}

	for (let answer of answers) {
		if (answer.question.inverted) {
			add(answer.question.facet, 1 - answer.value);
		} else {
			add(answer.question.facet, answer.value);
		}
	}

	for (let facet of Object.keys(facets)) {
		if (facets[facet].length === 0) {
			facets[facet] = 0.5;
		} else {
			facets[facet] = harmonic_mean(facets[facet]);
		}
	}

	let ordered_facets = [];

	for (let facet in facets) {
		ordered_facets.push({
			facet: facet,
			score: facets[facet],
		});
	}

	ordered_facets.sort((a, b) => Math.abs(b.score - 0.5) - Math.abs(a.score - 0.5) || a.facet.localeCompare(b.facet));

	return ordered_facets;
}

// A question will be picked randomly from the facets with the least questions
// answered for them.
function pick_next_question(answers) {
	let counts = {};
	let answered = new Set();

	for (let answer of answers) {
		counts[answer.question.facet] = (counts[answer.question.facet] || 0) + 1;
		answered.add(answer.question);
	}

	let lowest_count = Number.POSITIVE_INFINITY;
	let lowest_questions = null;

	for (let question of questions) {
		let count = counts[question.facet] || 0;

		if (answered.has(question)) {
			continue;
		}

		if (count < lowest_count) {
			lowest_count = count;
			lowest_questions = [question];
		} else if (count === lowest_count) {
			lowest_questions.push(question);
		}
	}

	return lowest_questions[(Math.random() * lowest_questions.length)|0];
}

function map_object(o, f) {
	var r = [];

	for (let k in o) {
		r.push(f(k, o[k]));
	}

	return r;
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			answers: Immutable.List(),
			current_question: pick_next_question([]),
			show_results: false,
		};
	}

	clickAnswer(e) {
		let x = e.pageX;
		let rect = e.target.getBoundingClientRect();

		this.setState(state => {
			let value = (x - rect.left) / rect.width;
			let answer = {
				question: state.current_question,
				value: value,
			};
			let new_answers = state.answers.push(answer);

			return {
				answers: new_answers,
				current_question: pick_next_question(new_answers),
			};
		});
	}

	facets() {
		let facets = answers_scores(this.state.answers);

		return <table>
			<tbody>
			{facets.map(row => <tr key={row.facet}><td>{row.facet}</td><td>{Math.round(100*row.score)}%</td></tr>)}
			</tbody>
		</table>;
	}

	words() {
		let facets = answers_scores(this.state.answers);
		let words = [];
		let things = [];

		// The score is basically the percentile of people that this facet is
		// higher than.
		//
		// To have hi = 1 standard deviation above mean and lo = 1 std dev
		// below, use facet.score >= 0.84134 and facet.score <= 0.15866.
		//
		// The standard IPIP way of determining hi/lo is facet.score >= 0.7 and
		// facet.score <= 0.3
		for (let facet of facets) {
			let term = null;

			if (facet.score >= 0.7) {
				term = '+'+facet.facet;
			} else if (facet.score <= 0.3) {
				term = '-'+facet.facet;
			}

			if (term) {
				words.push(descriptors[term]);

				if (likes[term]) {
					things.push(likes[term]);
				}
			}
		}

		return <div>
			<p>{words.join(', ')}</p>
			<p>{things.join(', ')}</p>
		</div>;
	}

	undo() {
		this.setState(state => {
			let new_answers = state.answers.pop();

			return {
				current_question: pick_next_question(new_answers),
				answers: new_answers,
			};
		});
	}

	show_results() { this.setState({ show_results: true }); }
	hide_results() { this.setState({ show_results: false }); }

	render() {
		return (
			<div className="App">
				<h1><abbr title="International Personality Item Pool">IPIP</abbr>-NEO Personality Test</h1>
				<p>{this.state.answers.size} of {Object.keys(questions).length} questions answered</p>
				<p>{this.state.current_question.prompt}</p>
				<p><input type="image" src="spectrum.png" onClick={this.clickAnswer.bind(this)}/></p>
				<p><button onClick={this.undo.bind(this)}>Undo</button></p>
				{this.state.show_results ?
					<div>
					<button onClick={this.hide_results.bind(this)}>Hide results</button>
					{this.facets()}
					{this.words()}
					</div>
					: <button onClick={this.show_results.bind(this)}>Show results</button>
				}
			</div>
		);
	}
}

export default App;
