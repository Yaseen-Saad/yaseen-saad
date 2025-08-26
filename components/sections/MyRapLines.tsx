'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MicrophoneIcon } from '@heroicons/react/24/outline';

const myRapLines = [
	{
		line: 'انا مش براب انا بعيد ترتيب المفاهيم\nانا مش خصمك انا المراية الي بتوريك انت مين\nقولت اني مجرد فايس لا انا ال face\nبتاع الباتل والفن والعلم وال base\nوانت؟ مجرد chekpoint بعي عليه وانا في الطريق لل ace',
		translation:
			"I'm not just a rapper, I rearrange concepts.\nI'm not your rival, I'm the mirror that shows you who you are.\nYou said I'm just a face, but I'm THE face of battle, art, science, and the base.\nAnd you? Just a checkpoint I pass on my way to ace.",
		context: 'Battle intro, self-definition',
	},
	{
		line: 'بعد ما خلصت الراوند بتاعتك بدأت تحس انك عندك ego\nبس للاسف كل الي قولته أفكار فاضية وكل الي في دماغك مجرد echo',
		translation:
			"After your round, you started feeling ego, but sadly all you said were empty ideas, and all in your head is just echo.",
		context: 'Battle, opponent\'s ego',
	},
  {
    line: "انا مش براب انا بعيد ترتيب المفاهيم\nانا مش خصمك انا المراية الي بتوريك انت مين\nقولت اني مجرد فايس لا انا ال face\nبتاع الباتل والفن والعلم وال base\nوانت؟ مجرد chekpoint بعي عليه وانا في الطريق لل ace",
    translation: "I'm not just a rapper, I rearrange concepts.\nI'm not your rival, I'm the mirror that shows you who you are.\nYou said I'm just a face, but I'm THE face of battle, art, science, and the base.\nAnd you? Just a checkpoint I pass on my way to ace.",
    context: "Battle intro, self-definition"
  },
  {
    line: "بعد ما خلصت الراوند بتاعتك بدأت تحس انك عندك ego\nبس للاسف كل الي قولته أفكار فاضية وكل الي في دماغك مجرد echo",
    translation: "After your round, you started feeling ego, but sadly all you said were empty ideas, and all in your head is just echo.",
    context: "Battle, opponent's ego"
  },
  {
    line: "أسمر بنضارة… لكن البصيرة HD\nبشوف من خلال الزحمة… وانت حتى مش شايف الـــ entry",
    translation: "Brown-skinned with glasses... but my vision is HD.\nI see through the crowd... you can't even see the entry.",
    context: "Vision, clarity"
  },
  {
    line: "أول اليوم؟ اول سيشن … هوفف, صاحي قبليها بساعتين\nمش عشان افطر، لأ… عشان أخلص أفكاري الـــ main\nبدرس Physics، وMath، وبـ Brain ما بينمش\nوبين كل Question و Assignment… بقول bar ينزل يعمل punch",
    translation: "First thing in the day? First session... woke up two hours before.\nNot for breakfast, but to finish my main ideas.\nStudying Physics, Math, and my brain never sleeps.\nBetween every question and assignment, a bar drops and punches.",
    context: "Study, routine, punchlines"
  },
  {
    line: "بتكتب زي اللي بيجرب حظه فال ـ code\nوأنا بكتر bars زي ال structured… JSON في كل load\nنفس النظارة؟ آه، بس الفرق في الـ focus\nأنا شايف مستقبلي واضح… وإنت بتحاول تظبط الـ locus",
    translation: "You write like you're trying your luck in code.\nI multiply bars like structured JSON in every load.\nSame glasses? Yeah, but the difference is in focus.\nI see my future clear... you're just trying to fix your locus.",
    context: "Focus, future, code"
  },
  {
    line: "الناس بتسأل: \"هو ده بيذاكر إمتى؟\"\nوأنا بكتب bars تشرح نظرية فوق فهم الـ system\nكأني Parallel Process… بكمل والكل في freeze\nمخي بيشتغل logic وArt… وقلبي بيكتب ال beats",
    translation: "People ask: 'When does he study?'\nI'm writing bars that explain theories above the system's understanding.\nLike a parallel process... I keep going while all are in freeze.\nMy mind works logic and art... my heart writes the beats.",
    context: "Logic, art, parallel process"
  },
  {
    line: "Straight As؟ دي مش معجزة، دي طبيعة\nأول ما بشوف السؤال… بيجاوب هو لوحده من الفضيحة",
    translation: "Straight As? That's not a miracle, it's nature.\nAs soon as I see the question... it answers itself from the exposure.",
    context: "Grades, nature"
  },
  {
    line: "الناس تشد شعرها قبل الامتحان، وأنا براجع memes\nوأخش أكتب سطرين… تطلع نتايجي premium scenes",
    translation: "People pull their hair before exams, I'm reviewing memes.\nI write two lines... my results come out as premium scenes.",
    context: "Exams, chill, premium results"
  },
  {
    line: "مش lazy… أنا efficient، بعمل في ساعة اللي يعملوه في أسبوع\nكلهم عايشين عالبصمجة… وأنا عايش عالـ (مش لاقي حاجة على نفس القافية الصراحة)",
    translation: "Not lazy... I'm efficient, I do in an hour what they do in a week.\nThey're all living on rote... I'm living on (couldn't find a rhyme tbh)",
    context: "Efficiency, unique style"
  },
  {
    line: "أنا مش داخل الباتل عشان أفوز… أنا داخل أعلمك إزاي الخوف بيتكسر\nأنا مش مجرد راپر… ده حتى الــ bars بتاعتي ليها syllabus وتتفسر\nكل خط مني عليه credit… كل punch ليه source ومرجع\nأنا ياسو… فاكرين اللحظة دي؟ دي الـ history نفسه وهو بيتفرّج!",
    translation: "I'm not in the battle to win... I'm here to teach you how fear breaks.\nI'm not just a rapper... even my bars have a syllabus and get explained.\nEvery line has credit... every punch has a source and reference.\nI'm Yasoo... remember this moment? It's history itself watching!",
    context: "Battle, teaching, history"
  },
  {
    line: "ومتجيش تعملي فيها leader ولا battler دا مجرد illusion\nدا انا لسا سايبك ياض تايه في البوستر وبتسأل ال AI عى ال conlusion",
    translation: "Don't act like a leader or battler, that's just an illusion.\nI just left you lost in the poster, asking AI for the conclusion.",
    context: "Illusion, AI, lost opponent"
  },
  {
    line: "أنا بكتب bars تشرح المعادلة، punch يضرب بالـ precision\nبذاكر قليل، وبجيب A total… يعني النجاح بالنسبة لي routine mission",
    translation: "I write bars that explain the equation, punch hits with precision.\nI study little, get total A... success for me is a routine mission.",
    context: "Precision, routine success"
  },
  {
    line: "امبارح كنت لسا بتكتب زنا وانا الي براجعهولك علشان يتسلم\nوانهاردة جاي تتمنظر عليا في الباتل راب احا يابني ما تتلملم",
    translation: "Yesterday you were still writing nonsense and I was reviewing it for you to submit.\nToday you come showing off in battle rap, man, get yourself together.",
    context: "Battle, opponent, advice"
  },
  {
    line: "هو مين الواد دا يا عم قولي مين الي داعيه\nفين صاحب الباتل دي وفين الواد اللي حاميه\nده نازل قدامي كدة مش عارف إيه كاسيه\nبس معلش يسطا برضه مش ذنبه والعيب مش عليه\nدا شكله بعت الباتل دي... هيروح يصلي ويدعي ربنا يشفيه",
    translation: "Who's this guy, tell me who invited him?\nWhere's the owner of this battle and who's protecting him?\nHe's standing in front of me, not knowing what's going on.\nBut it's not his fault, the blame's not on him.\nLooks like he sent this battle... he'll go pray and ask God to heal him.",
    context: "Battle, opponent, sympathy"
  },
  {
    line: "التدريب في الصباح والتعويض بالرقام\nولابنتذاكر بالليل ولا بنذاكر بالنهار\nانت مش هتفهم الكلام دا ودي غلطتك اليوم\nفمتجيش بعد الباتل تشكي من الهموم\nحتى fast flow",
    translation: "Training in the morning, making up with numbers.\nWe don't study at night or during the day.\nYou won't understand this, that's your mistake today.\nDon't come after the battle complaining about worries.\nEven fast flow.",
    context: "Training, study, battle, flow"
  },];

export default function MyRapLines() {
	const [visibleLines, setVisibleLines] = useState(4);

	const handleShowMore = () => {
		setVisibleLines((prev) => prev + 4);
	};

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-8"
				>
					<MicrophoneIcon className="w-12 h-12 mx-auto mb-4" />
					<h3 className="text-2xl font-bold mb-2">My Rap Lines</h3>
					<p className="opacity-80">When inspiration hits during coding sessions...</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-6">
					{myRapLines.slice(0, visibleLines).map((rap, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-white/10 dark:bg-black/10 rounded-lg p-6"
						>
							<div className="text-lg mb-3 leading-relaxed">
								{(() => {
									const isArabic = /[\u0600-\u06FF]/.test(rap.line);
									return (
										<span
											dir={isArabic ? 'rtl' : 'ltr'}
											style={{
												unicodeBidi: 'plaintext',
												fontFamily: isArabic
													? `'Cairo', 'Amiri', 'Tajawal', 'Arial', sans-serif`
													: 'monospace',
											}}
										>
											{rap.line}
										</span>
									);
								})()}
							</div>
							<div className="text-sm opacity-70 mb-2">
								Translation: <span dir="ltr">{rap.translation}</span>
							</div>
							<div className="text-xs opacity-50">
								Context: <span dir="ltr">{rap.context}</span>
							</div>
						</motion.div>
					))}
				</div>

				{visibleLines < myRapLines.length && (
					<div className="text-center mt-6">
						<button
							onClick={handleShowMore}
							className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
						>
							Show More
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
