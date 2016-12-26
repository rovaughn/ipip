exports.aspects = {"anxiety":{"aspect":"neuroticism","alpha":0.83},"anger":{"aspect":"neuroticism","alpha":0.88},"depression":{"aspect":"neuroticism","alpha":0.88},"self-consciousness":{"aspect":"neuroticism","alpha":0.8},"immoderation":{"aspect":"neuroticism","alpha":0.77},"vulnerability":{"aspect":"neuroticism","alpha":0.82},"friendliness":{"aspect":"extraversion","alpha":0.87},"gregariousness":{"aspect":"extraversion","alpha":0.79},"assertiveness":{"aspect":"extraversion","alpha":0.84},"activity level":{"aspect":"extraversion","alpha":0.71},"excitement-seeking":{"aspect":"extraversion","alpha":0.78},"cheerfulness":{"aspect":"extraversion","alpha":0.81},"imagination":{"aspect":"openness","alpha":0.83},"artistic interests":{"aspect":"openness","alpha":0.84},"emotionality":{"aspect":"openness","alpha":0.81},"adventurousness":{"aspect":"openness","alpha":0.77},"intellect":{"aspect":"openness","alpha":0.86},"liberalism":{"aspect":"openness","alpha":0.86},"trust":{"aspect":"agreeableness","alpha":0.82},"morality":{"aspect":"agreeableness","alpha":0.75},"altruism":{"aspect":"agreeableness","alpha":0.77},"cooperation":{"aspect":"agreeableness","alpha":0.73},"modesty":{"aspect":"agreeableness","alpha":0.77},"sympathy":{"aspect":"agreeableness","alpha":0.75},"self-efficacy":{"aspect":"conscientousness","alpha":0.78},"orderliness":{"aspect":"conscientousness","alpha":0.82},"dutifulness":{"aspect":"conscientousness","alpha":0.71},"achievement-striving":{"aspect":"conscientousness","alpha":0.78},"self-discipline":{"aspect":"conscientousness","alpha":0.85},"cautiousness":{"aspect":"conscientousness","alpha":0.76}};
exports.questions = [{"prompt":"I worry about things.","facet":"anxiety","inverted":false},{"prompt":"I fear for the worst.","facet":"anxiety","inverted":false},{"prompt":"I am afraid of many things.","facet":"anxiety","inverted":false},{"prompt":"I get stressed out easily.","facet":"anxiety","inverted":false},{"prompt":"I get caught up in my problems.","facet":"anxiety","inverted":false},{"prompt":"I am not easily bothered by things.","facet":"anxiety","inverted":true},{"prompt":"I am relaxed most of the time.","facet":"anxiety","inverted":true},{"prompt":"I am not easily disturbed by events.","facet":"anxiety","inverted":true},{"prompt":"I don't worry about things that have already happened.","facet":"anxiety","inverted":true},{"prompt":"I adapt easily to new situations.","facet":"anxiety","inverted":true},{"prompt":"I get angry easily.","facet":"anger","inverted":false},{"prompt":"I get irritated easily.","facet":"anger","inverted":false},{"prompt":"I get upset easily.","facet":"anger","inverted":false},{"prompt":"I am often in a bad mood.","facet":"anger","inverted":false},{"prompt":"I lose my temper.","facet":"anger","inverted":false},{"prompt":"I rarely get irritated.","facet":"anger","inverted":true},{"prompt":"I seldom get mad.","facet":"anger","inverted":true},{"prompt":"I am not easily annoyed.","facet":"anger","inverted":true},{"prompt":"I keep my cool.","facet":"anger","inverted":true},{"prompt":"I rarely complain.","facet":"anger","inverted":true},{"prompt":"I often feel blue.","facet":"depression","inverted":false},{"prompt":"I dislike myself.","facet":"depression","inverted":false},{"prompt":"I am often down in the dumps.","facet":"depression","inverted":false},{"prompt":"I have a low opinion of myself.","facet":"depression","inverted":false},{"prompt":"I have frequent mood swings.","facet":"depression","inverted":false},{"prompt":"I feel desperate.","facet":"depression","inverted":false},{"prompt":"I feel that my life lacks direction.","facet":"depression","inverted":false},{"prompt":"I seldom feel blue.","facet":"depression","inverted":true},{"prompt":"I feel comfortable with myself.","facet":"depression","inverted":true},{"prompt":"I am very pleased with myself.","facet":"depression","inverted":true},{"prompt":"I am easily intimidated.","facet":"self-consciousness","inverted":false},{"prompt":"I am afraid that I will do the wrong thing.","facet":"self-consciousness","inverted":false},{"prompt":"I find it difficult to approach others.","facet":"self-consciousness","inverted":false},{"prompt":"I am afraid to draw attention to myself.","facet":"self-consciousness","inverted":false},{"prompt":"I only feel comfortable with friends.","facet":"self-consciousness","inverted":false},{"prompt":"I stumble over my words.","facet":"self-consciousness","inverted":false},{"prompt":"I am not embarrassed easily.","facet":"self-consciousness","inverted":true},{"prompt":"I am comfortable in unfamiliar situations.","facet":"self-consciousness","inverted":true},{"prompt":"I am not bothered by difficult social situations.","facet":"self-consciousness","inverted":true},{"prompt":"I am able to stand up for myself.","facet":"self-consciousness","inverted":true},{"prompt":"I often eat too much.","facet":"immoderation","inverted":false},{"prompt":"I don't know why I do some of the things I do.","facet":"immoderation","inverted":false},{"prompt":"I do things I later regret.","facet":"immoderation","inverted":false},{"prompt":"I go on binges.","facet":"immoderation","inverted":false},{"prompt":"I love to eat.","facet":"immoderation","inverted":false},{"prompt":"I rarely overindulge.","facet":"immoderation","inverted":true},{"prompt":"I easily resist temptations.","facet":"immoderation","inverted":true},{"prompt":"I am able to control my cravings.","facet":"immoderation","inverted":true},{"prompt":"I never spend more than I can afford.","facet":"immoderation","inverted":true},{"prompt":"I never splurge.","facet":"immoderation","inverted":true},{"prompt":"I panic easily.","facet":"vulnerability","inverted":false},{"prompt":"I become overwhelmed by events.","facet":"vulnerability","inverted":false},{"prompt":"I feel that I'm unable to deal with things.","facet":"vulnerability","inverted":false},{"prompt":"I can't make up my mind.","facet":"vulnerability","inverted":false},{"prompt":"I get overwhelmed by emotions.","facet":"vulnerability","inverted":false},{"prompt":"I remain calm under pressure.","facet":"vulnerability","inverted":true},{"prompt":"I can handle complex problems.","facet":"vulnerability","inverted":true},{"prompt":"I know how to cope.","facet":"vulnerability","inverted":true},{"prompt":"I readily overcome setbacks.","facet":"vulnerability","inverted":true},{"prompt":"I am calm even in tense situations.","facet":"vulnerability","inverted":true},{"prompt":"I make friends easily.","facet":"friendliness","inverted":false},{"prompt":"I warm up quickly to others.","facet":"friendliness","inverted":false},{"prompt":"I feel comfortable around people.","facet":"friendliness","inverted":false},{"prompt":"I act comfortably with others.","facet":"friendliness","inverted":false},{"prompt":"I cheer people up.","facet":"friendliness","inverted":false},{"prompt":"I am hard to get to know.","facet":"friendliness","inverted":true},{"prompt":"I often feel uncomfortable around others.","facet":"friendliness","inverted":true},{"prompt":"I avoid contacts with others.","facet":"friendliness","inverted":true},{"prompt":"I am not really interested in others.","facet":"friendliness","inverted":true},{"prompt":"I keep others at a distance.","facet":"friendliness","inverted":true},{"prompt":"I love large parties.","facet":"gregariousness","inverted":false},{"prompt":"I talk to a lot of different people at parties.","facet":"gregariousness","inverted":false},{"prompt":"I enjoy being part of a group.","facet":"gregariousness","inverted":false},{"prompt":"I involve others in what I am doing.","facet":"gregariousness","inverted":false},{"prompt":"I love surprise parties.","facet":"gregariousness","inverted":false},{"prompt":"I prefer to be alone.","facet":"gregariousness","inverted":true},{"prompt":"I want to be left alone.","facet":"gregariousness","inverted":true},{"prompt":"I don't like crowded events.","facet":"gregariousness","inverted":true},{"prompt":"I avoid crowds.","facet":"gregariousness","inverted":true},{"prompt":"I seek quiet.","facet":"gregariousness","inverted":true},{"prompt":"I take charge.","facet":"assertiveness","inverted":false},{"prompt":"I try to lead others.","facet":"assertiveness","inverted":false},{"prompt":"I can talk others into doing things.","facet":"assertiveness","inverted":false},{"prompt":"I seek to influence others.","facet":"assertiveness","inverted":false},{"prompt":"I take control of things.","facet":"assertiveness","inverted":false},{"prompt":"I wait for others to lead the way.","facet":"assertiveness","inverted":true},{"prompt":"I keep in the background.","facet":"assertiveness","inverted":true},{"prompt":"I have little to say.","facet":"assertiveness","inverted":true},{"prompt":"I don't like to draw attention to myself.","facet":"assertiveness","inverted":true},{"prompt":"I hold back my opinions.","facet":"assertiveness","inverted":true},{"prompt":"I am always busy.","facet":"assertiveness","inverted":false},{"prompt":"I am always on the go.","facet":"assertiveness","inverted":false},{"prompt":"I do a lot in my spare time.","facet":"assertiveness","inverted":false},{"prompt":"I can manage many things at the same time.","facet":"assertiveness","inverted":false},{"prompt":"I react quickly.","facet":"assertiveness","inverted":false},{"prompt":"I like to take it easy.","facet":"assertiveness","inverted":true},{"prompt":"I like to take my time.","facet":"assertiveness","inverted":true},{"prompt":"I like a leisurely lifestyle.","facet":"assertiveness","inverted":true},{"prompt":"I let things proceed at their own pace.","facet":"assertiveness","inverted":true},{"prompt":"I react slowly.","facet":"assertiveness","inverted":true},{"prompt":"I love excitement.","facet":"excitement-seeking","inverted":false},{"prompt":"I seek adventure.","facet":"excitement-seeking","inverted":false},{"prompt":"I love action.","facet":"excitement-seeking","inverted":false},{"prompt":"I enjoy being part of a loud crowd.","facet":"excitement-seeking","inverted":false},{"prompt":"I enjoy being reckless.","facet":"excitement-seeking","inverted":false},{"prompt":"I act wild and crazy.","facet":"excitement-seeking","inverted":false},{"prompt":"I am willing to try anything once.","facet":"excitement-seeking","inverted":false},{"prompt":"I seek danger.","facet":"excitement-seeking","inverted":false},{"prompt":"I would never go hang gliding or bungee jumping.","facet":"excitement-seeking","inverted":true},{"prompt":"I dislike loud music.","facet":"excitement-seeking","inverted":true},{"prompt":"I radiate joy.","facet":"cheerfulness","inverted":false},{"prompt":"I have a lot of fun.","facet":"cheerfulness","inverted":false},{"prompt":"I express childlike joy.","facet":"cheerfulness","inverted":false},{"prompt":"I laugh my way through life.","facet":"cheerfulness","inverted":false},{"prompt":"I love life.","facet":"cheerfulness","inverted":false},{"prompt":"I look at the bright side of life.","facet":"cheerfulness","inverted":false},{"prompt":"I laugh aloud.","facet":"cheerfulness","inverted":false},{"prompt":"I amuse my friends.","facet":"cheerfulness","inverted":false},{"prompt":"I am not easily amused.","facet":"cheerfulness","inverted":true},{"prompt":"I seldom joke around.","facet":"cheerfulness","inverted":true},{"prompt":"I have a vivid imagination.","facet":"imagination","inverted":false},{"prompt":"I enjoy wild flights of fantasy.","facet":"imagination","inverted":false},{"prompt":"I love to daydream.","facet":"imagination","inverted":false},{"prompt":"I like to get lost in thought.","facet":"imagination","inverted":false},{"prompt":"I indulge in my fantasies.","facet":"imagination","inverted":false},{"prompt":"I spend time reflecting on things.","facet":"imagination","inverted":false},{"prompt":"I seldom daydream.","facet":"imagination","inverted":true},{"prompt":"I do not have a good imagination.","facet":"imagination","inverted":true},{"prompt":"I seldom get lost in thought.","facet":"imagination","inverted":true},{"prompt":"I have difficulty imagining things.","facet":"imagination","inverted":true},{"prompt":"I believe in the importance of art.","facet":"imagination","inverted":false},{"prompt":"I like music.","facet":"imagination","inverted":false},{"prompt":"I see beauty in things that others might not notice.","facet":"imagination","inverted":false},{"prompt":"I love flowers.","facet":"imagination","inverted":false},{"prompt":"I enjoy the beauty of nature.","facet":"imagination","inverted":false},{"prompt":"I do not like art.","facet":"imagination","inverted":true},{"prompt":"I do not like poetry.","facet":"imagination","inverted":true},{"prompt":"I do not enjoy going to art museums.","facet":"imagination","inverted":true},{"prompt":"I do not like concerts.","facet":"imagination","inverted":true},{"prompt":"I do not enjoy watching dance performances.","facet":"imagination","inverted":true},{"prompt":"I experience my emotions intensely.","facet":"emotionality","inverted":false},{"prompt":"I feel others' emotions.","facet":"emotionality","inverted":false},{"prompt":"I am passionate about causes.","facet":"emotionality","inverted":false},{"prompt":"I enjoy examining myself and my life.","facet":"emotionality","inverted":false},{"prompt":"I try to understand myself.","facet":"emotionality","inverted":false},{"prompt":"I seldom get emotional.","facet":"emotionality","inverted":true},{"prompt":"I am not easily affected by my emotions.","facet":"emotionality","inverted":true},{"prompt":"I rarely notice my emotional reactions.","facet":"emotionality","inverted":true},{"prompt":"I experience very few emotional highs and lows.","facet":"emotionality","inverted":true},{"prompt":"I don't understand people who get emotional.","facet":"emotionality","inverted":true},{"prompt":"I prefer variety to routine.","facet":"adventurousness","inverted":false},{"prompt":"I like to visit new places.","facet":"adventurousness","inverted":false},{"prompt":"I am interested in many things.","facet":"adventurousness","inverted":false},{"prompt":"I like to begin new things.","facet":"adventurousness","inverted":false},{"prompt":"I prefer to stick with things that I know.","facet":"adventurousness","inverted":true},{"prompt":"I dislike changes.","facet":"adventurousness","inverted":true},{"prompt":"I don't like the idea of change.","facet":"adventurousness","inverted":true},{"prompt":"I am a creature of habit.","facet":"adventurousness","inverted":true},{"prompt":"I dislike new foods.","facet":"adventurousness","inverted":true},{"prompt":"I am attached to conventional ways.","facet":"adventurousness","inverted":true},{"prompt":"I like to solve complex problems.","facet":"intellect","inverted":false},{"prompt":"I love to read challenging material.","facet":"intellect","inverted":false},{"prompt":"I have a rich vocabulary.","facet":"intellect","inverted":false},{"prompt":"I can handle a lot of information.","facet":"intellect","inverted":false},{"prompt":"I enjoy thinking about things.","facet":"intellect","inverted":false},{"prompt":"I am not interested in abstract ideas.","facet":"intellect","inverted":true},{"prompt":"I avoid philosophical discussions.","facet":"intellect","inverted":true},{"prompt":"I have difficulty understanding abstract ideas.","facet":"intellect","inverted":true},{"prompt":"I am not interested in theoretical discussions.","facet":"intellect","inverted":true},{"prompt":"I avoid difficult reading material.","facet":"intellect","inverted":true},{"prompt":"I tend to vote for liberal political candidates.","facet":"liberalism","inverted":false},{"prompt":"I believe that there is no absolute right and wrong.","facet":"liberalism","inverted":false},{"prompt":"I believe that criminals should receive help rather than punishment.","facet":"liberalism","inverted":false},{"prompt":"I believe in one 1 religion.","facet":"liberalism","inverted":true},{"prompt":"I tend to vote for conservative political candidates.","facet":"liberalism","inverted":true},{"prompt":"I believe that too much tax money goes to support artists.","facet":"liberalism","inverted":true},{"prompt":"I believe laws should be strictly enforced.","facet":"liberalism","inverted":true},{"prompt":"I believe that we coddle criminals too much.","facet":"liberalism","inverted":true},{"prompt":"I believe that we should be tough on crime.","facet":"liberalism","inverted":true},{"prompt":"I like to stand during the national anthem.","facet":"liberalism","inverted":true},{"prompt":"I trust others.","facet":"trust","inverted":false},{"prompt":"I believe that others have good intentions.","facet":"trust","inverted":false},{"prompt":"I trust what people say.","facet":"trust","inverted":false},{"prompt":"I believe that people are basically moral.","facet":"trust","inverted":false},{"prompt":"I believe in human goodness.","facet":"trust","inverted":false},{"prompt":"I think that all will be well.","facet":"trust","inverted":false},{"prompt":"I distrust people.","facet":"trust","inverted":true},{"prompt":"I suspect hidden motives in others.","facet":"trust","inverted":true},{"prompt":"I am wary of others.","facet":"trust","inverted":true},{"prompt":"I believe that people are essentially evil.","facet":"trust","inverted":true},{"prompt":"I would never cheat on my taxes.","facet":"morality","inverted":false},{"prompt":"I stick to the rules.","facet":"morality","inverted":false},{"prompt":"I use flattery to get ahead.","facet":"morality","inverted":true},{"prompt":"I use others for my own ends.","facet":"morality","inverted":true},{"prompt":"I know how to get around the rules.","facet":"morality","inverted":true},{"prompt":"I cheat to get ahead.","facet":"morality","inverted":true},{"prompt":"I put people under pressure.","facet":"morality","inverted":true},{"prompt":"I pretend to be concerned for others.","facet":"morality","inverted":true},{"prompt":"I take advantage of others.","facet":"morality","inverted":true},{"prompt":"I obstruct others' plans.","facet":"morality","inverted":true},{"prompt":"I make people feel welcome.","facet":"altruism","inverted":false},{"prompt":"I anticipate the needs of others.","facet":"altruism","inverted":false},{"prompt":"I love to help others.","facet":"altruism","inverted":false},{"prompt":"I am concerned about others.","facet":"altruism","inverted":false},{"prompt":"I have a good word for everyone.","facet":"altruism","inverted":false},{"prompt":"I look down on others.","facet":"altruism","inverted":true},{"prompt":"I am indifferent to the feelings of others.","facet":"altruism","inverted":true},{"prompt":"I make people feel uncomfortable.","facet":"altruism","inverted":true},{"prompt":"I turn my back on others.","facet":"altruism","inverted":true},{"prompt":"I take no time for others.","facet":"altruism","inverted":true},{"prompt":"I am easy to satisfy.","facet":"cooperation","inverted":false},{"prompt":"I can't stand confrontations.","facet":"cooperation","inverted":false},{"prompt":"I hate to seem pushy.","facet":"cooperation","inverted":false},{"prompt":"I have a sharp tongue.","facet":"cooperation","inverted":true},{"prompt":"I contradict others.","facet":"cooperation","inverted":true},{"prompt":"I love a good fight.","facet":"cooperation","inverted":true},{"prompt":"I yell at people.","facet":"cooperation","inverted":true},{"prompt":"I insult people.","facet":"cooperation","inverted":true},{"prompt":"I get back at others.","facet":"cooperation","inverted":true},{"prompt":"I hold a grudge.","facet":"cooperation","inverted":true},{"prompt":"I dislike being the center of attention.","facet":"modesty","inverted":false},{"prompt":"I dislike talking about myself.","facet":"modesty","inverted":false},{"prompt":"I consider myself an average person.","facet":"modesty","inverted":false},{"prompt":"I seldom toot my own horn.","facet":"modesty","inverted":false},{"prompt":"I believe that I am better than others.","facet":"modesty","inverted":true},{"prompt":"I think highly of myself.","facet":"modesty","inverted":true},{"prompt":"I have a high opinion of myself.","facet":"modesty","inverted":true},{"prompt":"I know the answers to many questions.","facet":"modesty","inverted":true},{"prompt":"I boast about my virtues.","facet":"modesty","inverted":true},{"prompt":"I make myself the center of attention.","facet":"modesty","inverted":true},{"prompt":"I sympathize with the homeless.","facet":"sympathy","inverted":false},{"prompt":"I feel sympathy for those who are worse off than myself.","facet":"sympathy","inverted":false},{"prompt":"I value cooperation over competition.","facet":"sympathy","inverted":false},{"prompt":"I suffer from others' sorrows.","facet":"sympathy","inverted":false},{"prompt":"I am not interested in other people's problems.","facet":"sympathy","inverted":true},{"prompt":"I tend to dislike soft-hearted people.","facet":"sympathy","inverted":true},{"prompt":"I believe in an eye for an eye.","facet":"sympathy","inverted":true},{"prompt":"I try not to think about the needy.","facet":"sympathy","inverted":true},{"prompt":"I believe people should fend for themselves.","facet":"sympathy","inverted":true},{"prompt":"I can't stand weak people.","facet":"sympathy","inverted":true},{"prompt":"I complete tasks successfully.","facet":"self-efficacy","inverted":false},{"prompt":"I excel in what I do.","facet":"self-efficacy","inverted":false},{"prompt":"I handle tasks smoothly.","facet":"self-efficacy","inverted":false},{"prompt":"I am sure of my ground.","facet":"self-efficacy","inverted":false},{"prompt":"I come up with good solutions.","facet":"self-efficacy","inverted":false},{"prompt":"I know how to get things done.","facet":"self-efficacy","inverted":false},{"prompt":"I misjudge situations.","facet":"self-efficacy","inverted":true},{"prompt":"I don't understand things.","facet":"self-efficacy","inverted":true},{"prompt":"I have little to contribute.","facet":"self-efficacy","inverted":true},{"prompt":"I don't see the consequences of things.","facet":"self-efficacy","inverted":true},{"prompt":"I like order.","facet":"orderliness","inverted":false},{"prompt":"I like to tidy up.","facet":"orderliness","inverted":false},{"prompt":"I want everything to be 'just right.'","facet":"orderliness","inverted":false},{"prompt":"I love order and regularity.","facet":"orderliness","inverted":false},{"prompt":"I do things according to a plan.","facet":"orderliness","inverted":false},{"prompt":"I often forget to put things back in their proper place.","facet":"orderliness","inverted":true},{"prompt":"I leave a mess in my room.","facet":"orderliness","inverted":true},{"prompt":"I leave my belongings around.","facet":"orderliness","inverted":true},{"prompt":"I am not bothered by messy people.","facet":"orderliness","inverted":true},{"prompt":"I am not bothered by disorder.","facet":"orderliness","inverted":true},{"prompt":"I try to follow the rules.","facet":"dutifulness","inverted":false},{"prompt":"I keep my promises.","facet":"dutifulness","inverted":false},{"prompt":"I pay my bills on time.","facet":"dutifulness","inverted":false},{"prompt":"I tell the truth.","facet":"dutifulness","inverted":false},{"prompt":"I listen to my conscience.","facet":"dutifulness","inverted":false},{"prompt":"I break rules.","facet":"dutifulness","inverted":true},{"prompt":"I break my promises.","facet":"dutifulness","inverted":true},{"prompt":"I get others to do my duties.","facet":"dutifulness","inverted":true},{"prompt":"I do the opposite of what is asked.","facet":"dutifulness","inverted":true},{"prompt":"I misrepresent the facts.","facet":"dutifulness","inverted":true},{"prompt":"I go straight for the goal.","facet":"achievement-striving","inverted":false},{"prompt":"I work hard.","facet":"achievement-striving","inverted":false},{"prompt":"I turn plans into actions.","facet":"achievement-striving","inverted":false},{"prompt":"I plunge into tasks with all my heart.","facet":"achievement-striving","inverted":false},{"prompt":"I do more than what's expected of me.","facet":"achievement-striving","inverted":false},{"prompt":"I set high standards for myself and others.","facet":"achievement-striving","inverted":false},{"prompt":"I demand quality.","facet":"achievement-striving","inverted":false},{"prompt":"I am not highly motivated to succeed.","facet":"achievement-striving","inverted":true},{"prompt":"I do just enough work to get by.","facet":"achievement-striving","inverted":true},{"prompt":"I put little time and effort into my work.","facet":"achievement-striving","inverted":true},{"prompt":"I get chores done right away.","facet":"self-discipline","inverted":false},{"prompt":"I am always prepared.","facet":"self-discipline","inverted":false},{"prompt":"I start tasks right away.","facet":"self-discipline","inverted":false},{"prompt":"I get to work at once.","facet":"self-discipline","inverted":false},{"prompt":"I carry out my plans.","facet":"self-discipline","inverted":false},{"prompt":"I find it difficult to get down to work.","facet":"self-discipline","inverted":true},{"prompt":"I waste my time.","facet":"self-discipline","inverted":true},{"prompt":"I need a push to get started.","facet":"self-discipline","inverted":true},{"prompt":"I have difficulty starting tasks.","facet":"self-discipline","inverted":true},{"prompt":"I postpone decisions.","facet":"self-discipline","inverted":true},{"prompt":"I avoid mistakes.","facet":"cautiousness","inverted":false},{"prompt":"I choose my words with care.","facet":"cautiousness","inverted":false},{"prompt":"I stick to my chosen path.","facet":"cautiousness","inverted":false},{"prompt":"I jump into things without thinking.","facet":"cautiousness","inverted":true},{"prompt":"I make rash decisions.","facet":"cautiousness","inverted":true},{"prompt":"I like to act on a whim.","facet":"cautiousness","inverted":true},{"prompt":"I rush into things.","facet":"cautiousness","inverted":true},{"prompt":"I do crazy things.","facet":"cautiousness","inverted":true},{"prompt":"I act without thinking.","facet":"cautiousness","inverted":true},{"prompt":"I often make last-minute plans.","facet":"cautiousness","inverted":true}];
exports.descriptors = {"+achievement-striving":"driven to achieve, ambitious, goal-oriented, enterprising","-achievement-striving":"lackadaisical, complacent, lacks direction","+activity level":"energetic, busy, fast-paced","-activity level":"sedentary, slow-paced, inactive","+adventurousness":"likes to try new & varied activities, versatile","-adventurousness":"prefers the 'tried & true', narrow range of behaviour, predictable","+agreeableness":"compassionate, eager to please, good natured, prefers cooperation over competition and conflict","-agreeableness":"hard-headed, skeptical, competitive, proud, prefers competition over co-operation","+altruism":"keen to help others, considerate, soft-hearted","-altruism":"self-absorbed, highly self-interested","+anger":"short-tempered, irritable, intense","-anger":"easygoing, patient, even tempered","+anxiety":"worrying, apprehensive, tense","-anxiety":"calm, relaxed, carefree","+artistic interests":"appreciates art, music & poetry, artistic, stylish","-artistic interests":"insensitive to art and beauty","+assertiveness":"self-confident, assertive, forceful, dominant","-assertiveness":"quiet, passive, submissive","+cautiousness":"thinks carefully, thorough, cautious","-cautiousness":"hasty, impatient, impulsive","+cheerfulness":"enthusiastic, cheerful, positive, exuberant","-cheerfulness":"calm, tranquil, serious, sober","+conscientousness":"conscientious, disciplined, efficient, well organised, likes precise detail, strong sense of duty","-conscientousness":"spontaneous, disorganised, prefers flexible plans, dislikes precise details","+cooperation":"co-operative, compliant, deferent","-cooperation":"outspoken, competitive, headstrong, stubborn","+depression":"pessimistic, prone to be discontent","-depression":"contented, upbeat, hopeful","+dutifulness":"ethical, principled, dependable","-dutifulness":"casual, unreliable, irresponsible","+emotionality":"experiences deep & varied emotions, responsive","-emotionality":"disregards feelings & emotions, controlled","+excitement-seeking":"pleasure-seeking, daring, adventurous","-excitement-seeking":"avoids risks, composed, conventional, uncomplicated","+extraversion":"outgoing, friendly, assertive, likes working with others, enjoys direct leadership roles","-extraversion":"reserved, formal, serious, quiet, prefers working alone, avoids direct leadership roles","+friendliness":"friendly, affectionate, cheerful","-friendliness":"reserved, cool, formal","+gregariousness":"gregarious, needs & likes people","-gregariousness":"'bit of a loner', likes own company","+imagination":"inventive, original, imaginative, creative","-imagination":"practical, matter-of-fact","+immoderation":"easily tempted, self-indulgent","-immoderation":"consistently stands firm, self-denying, resists temptation","+intellect":"intellectually curious, has many interests, open-minded","-intellect":"limited curiosity, narrowly focused","+liberalism":"ready to re-examine principles and values, unconventional","-liberalism":"conservative, dogmatic, conventional, tradition bound","+modesty":"humble, self-effacing, unassuming","-modesty":"arrogant, conceited","+morality":"candid, sincere, frank, forthright","-morality":"cautious, guarded, manipulative, indirect","+neuroticism":"experiences negative emotional reactions and feelings of anxiety, prone to worry, easily upset","-neuroticism":"not easily upset in stressful situations, relaxed, resilient, calm","+openness":"imaginative, open-minded, experimental, prefers creative conceptual problem-solving","-openness":"traditionalist, down-to-earth, practical, conservative, prefers traditional outlooks and technical problem-solving","+orderliness":"neat and tidy, methodical, orderly","-orderliness":"disorganised, careless","+self-consciousness":"inhibited, easily embarrassed, self-conscious, shy","-self-consciousness":"socially confident, self-assured","+self-discipline":"self-motivated, persevering, completes tasks","-self-discipline":"lacks self-discipline, unfocused, procrastinates","+self-efficacy":"competent, self-confident, resourceful","-self-efficacy":"easily distracted, ill-prepared, unsure","+sympathy":"soft-hearted, understanding, easily moved, compassionate","-sympathy":"calculating, coldly realistic, hard-headed, tough-minded","+trust":"believe what they hear and see, accepting, forgiving, trusting","-trust":"tendency to be sceptical, suspicious, cynical, distrusting","+vulnerability":"panics easily, confused, dependent","-vulnerability":"thinks clearly in stressful situations, self-confident, poised, clear-thinking"};
