<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Beloved Prophet - Interactive Seerah Quiz (30 Questions)</title>
    <style>
        :root {
            --primary-color: #1b4332;
            --secondary-color: #d8f3dc;
            --accent-color: #52b788;
            --text-color: #2d3748;
            --bg-color: #f8f9fa;
            --card-bg: #ffffff;
            --border-radius: 12px;
            --transition-speed: 0.3s;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }

        header {
            background: linear-gradient(135deg, #1b4332, #2d6a4f);
            color: white;
            padding: 2rem 1rem;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        header h1 {
            margin: 0 0 0.5rem 0;
            font-size: 2.2rem;
        }

        header p {
            margin: 0;
            opacity: 0.9;
            font-size: 1.1rem;
        }

        .container {
            max-width: 900px;
            margin: 2rem auto;
            padding: 0 1rem;
        }

        .lang-selector {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .lang-btn {
            background-color: var(--card-bg);
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
            padding: 0.5rem 1.5rem;
            border-radius: 30px;
            cursor: pointer;
            font-weight: bold;
            transition: all var(--transition-speed);
        }

        .lang-btn.active, .lang-btn:hover {
            background-color: var(--primary-color);
            color: white;
            box-shadow: 0 4px 12px rgba(27, 67, 50, 0.2);
        }

        .card {
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 2rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
            margin-bottom: 2rem;
        }

        .passage-box {
            border-left: 5px solid var(--accent-color);
            background-color: #f1faee;
            padding: 1.5rem;
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
            margin-bottom: 2rem;
            font-size: 1.1rem;
        }

        .passage-box h3 {
            margin-top: 0;
            color: var(--primary-color);
        }

        .quiz-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid #edf2f7;
            padding-bottom: 0.75rem;
        }

        .cefr-badge {
            background-color: var(--secondary-color);
            color: var(--primary-color);
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-weight: bold;
            font-size: 0.85rem;
        }

        .question-text {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
        }

        .options-grid {
            display: grid;
            gap: 1rem;
        }

        .option-btn {
            background-color: #f8f9fa;
            border: 2px solid #e2e8f0;
            padding: 1rem;
            border-radius: 8px;
            text-align: left;
            font-size: 1rem;
            cursor: pointer;
            transition: all var(--transition-speed);
        }

        .option-btn:hover:not(:disabled) {
            border-color: var(--accent-color);
            background-color: #f4f9f5;
        }

        .option-btn.correct {
            background-color: #d1e7dd !important;
            border-color: #198754 !important;
            color: #0f5132;
            font-weight: bold;
        }

        .option-btn.incorrect {
            background-color: #f8d7da !important;
            border-color: #dc3545 !important;
            color: #842029;
        }

        .nav-footer {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
        }

        .nav-btn {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            transition: opacity var(--transition-speed);
        }

        .nav-btn:disabled {
            background-color: #cbd5e1;
            cursor: not-allowed;
        }

        .score-container {
            text-align: center;
            padding: 3rem 1rem;
        }

        .score-container h2 {
            color: var(--primary-color);
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .rtl {
            direction: rtl;
            text-align: right;
        }

        @media(max-width: 600px) {
            header h1 { font-size: 1.8rem; }
            .card { padding: 1rem; }
        }
    </style>
</head>
<body>

    <header>
        <h1 id="app-title">My Beloved Prophet Seerah</h1>
        <p>Interactive Reading Comprehension & Quiz Module (30 Questions)</p>
    </header>

    <div class="container">
        <div class="lang-selector">
            <button class="lang-btn active" onclick="setLanguage('e')">English</button>
            <button class="lang-btn" onclick="setLanguage('k')">کوردی</button>
            <button class="lang-btn" onclick="setLanguage('a')">العربية</button>
        </div>

        <div id="quiz-app"></div>
    </div>

    <script>
        const quizData = {
          "title": "My Beloved Prophet Seerah",
          "chapters": {
            "Chapter 1": {
              "p": "Muhammad 'alaihis-salâm was born 53 years before the Hegira, on the twelfth of the month of Rabî'ul-awwal, on a Monday night towards morning, in Mecca. Historians say that day coincides with the twentieth of April in the year AD 571. His father's name is Abdullah, and His mother's name is Âmina. When He was twenty-five years old, He married Khadîja-tul-Kubrâ. When He was forty years old, He was informed by Allahu ta'âlâ that He is the Prophet for all human beings and jinns.",
              "qa": [
                {
                  "q": "In which city was Prophet Muhammad born?",
                  "v": "A1",
                  "e": "Mecca city|Medina city|Damascus city|Baghdad city|Cairo city",
                  "k": "شاری مەککە|شاری مەدینە|شاری دیمەشق|شاری بەغدا|شاری قاهیرە",
                  "a": "مدينة مكة|مدينة المدينة|مدينة دمشق|مدينة بغداد|مدينة القاهرة"
                },
                {
                  "q": "What was the name of the Prophet's father?",
                  "v": "A1",
                  "e": "Abdullah name|Abû Tâlib name|Abdulmuttalib name|Zubayr name|Hamza name",
                  "k": "ناوی عەبدوڵڵا|ناوی ئەبوو تالیب|ناوی عەبدولموتەلیب|ناوی زوبێر|ناوی حەمزە",
                  "a": "اسم عبد الله|اسم أبو طالب|اسم عبد المطلب|اسم الزبير|اسم حمزة"
                },
                {
                  "q": "What was the name of the Prophet's mother?",
                  "v": "A1",
                  "e": "Âmina name|Khadîja name|Fâtima name|Safiyya name|Halîma name",
                  "k": "ناوی ئامینە|ناوی خەدیجە|ناوی فاتیحە|ناوی سەفییە|ناوی حەلیمە",
                  "a": "اسم آمنة|اسم خديجة|اسم فاطمة|اسم صفية|اسم حليمة"
                },
                {
                  "q": "At what age did Muhammad marry Khadîja-tul-Kubrâ?",
                  "v": "A2",
                  "e": "Twenty-five years|Thirty years|Forty years|Fifteen years|Twenty years",
                  "k": "پەنجو بیست ساڵ|سی ساڵ تەمەن|چڵ ساڵ تەمەن|پازدە ساڵ تەمەن|بیست ساڵ تەمەن",
                  "a": "خمس وعشرون سنة|ثلاثون سنة|أربعون سنة|خمس عشرة سنة|عشرون سنة"
                },
                {
                  "q": "At what age was Muhammad informed that He is the Prophet?",
                  "v": "A2",
                  "e": "Forty years old|Fifty years old|Thirty years old|Sixty years old|Twenty years old",
                  "k": "تەمەنی چڵ ساڵ|تەمەنی پەنجا ساڵ|تەمەنی سی ساڵ|تەمەنی شەست ساڵ|تەمەنی بیست ساڵ",
                  "a": "عمر الأربعين|عمر الخمسين|عمر الثلاثين|عمر الستين|عمر العشرين"
                },
                {
                  "q": "On which day of the week was the Prophet born?",
                  "v": "B1",
                  "e": "Monday night|Friday night|Sunday night|Tuesday night|Thursday night",
                  "k": "شەوی دووشەممە|شەوی هەینی|شەوی یەکشەممە|شەوی سێشەممە|شەوی پێنجشەممە",
                  "a": "ليلة الإثنين|ليلة الجمعة|ليلة الأحد|ليلة الثلاثاء|ليلة الخميس"
                },
                {
                  "q": "Which month is mentioned as the month of the Prophet's birth?",
                  "v": "B1",
                  "e": "Rabî'ul-awwal month|Ramadân month|Muharram month|Sha'bân month|Rajab month",
                  "k": "مانگی ڕەبیعولئەوڵ|مانگی ڕەمەزان|مانگی محەڕەم|مانگی شەعبان|مانگی ڕەجەب",
                  "a": "شهر ربيع الأول|شهر رمضان|شهر محرم|شهر شعبان|شهر رجب"
                },
                {
                  "q": "According to historians, the Prophet's birth date coincides with which English calendar date?",
                  "v": "B2",
                  "e": "April twentieth|May twentieth|March twentieth|June twentieth|July twentieth",
                  "k": "بیستی نیسان|بیستی ئایار|بیستی ئازار|بیستی حوزەیران|بیستی تەمموز",
                  "a": "العشرون من أبريل|العشرون من مايو|العشرون من مارس|العشرون من يونيو|العشرون من يوليو"
                },
                {
                  "q": "How many years before the Hegira was the Prophet born?",
                  "v": "B2",
                  "e": "Fifty-three years|Forty-three years|Sixty-three years|Thirty-three years|Twenty-three years",
                  "k": "پەنجو سێ ساڵ|چلو سێ ساڵ|شەستو سێ ساڵ|سێو سی ساڵ|بیستو سێ ساڵ",
                  "a": "ثلاث وخمسون سنة|ثلاث وأربعون سنة|ثلاث وستون سنة|ثلاث وثلاثون سنة|ثلاث وعشرون سنة"
                },
                {
                  "q": "For whom did Allahu ta'âlâ send Muhammad as the final prophet?",
                  "v": "C1",
                  "e": "Humans and jinns|Only humans|Only angels|Animals and birds|Only Arabs",
                  "k": "مرۆڤ و جِنۆکە|تەنها مرۆڤەکان|تەنها فریشتەکان|ئاژەڵ و باڵندە|تەنها عەرەبەکان",
                  "a": "البشر والجن|البشر فقط|الملائكة فقط|الحيوانات والطيور|العرب فقط"
                },
                {
                  "q": "What does the blessed name Muhammad mean according to the text?",
                  "v": "C1",
                  "e": "Praised repeatedly|Chosen one|The truthful one|The trustworthy one|Guided one",
                  "k": "زۆر ستایشکراو|هەڵبژێردراو|ڕاستگۆترین کەس|جێی متمانە|ڕێنموونی کراو",
                  "a": "المحمد مراراً|المصختار منها|الصادق الأمين|المرشد دائماً|الهادي للحق"
                },
                {
                  "q": "Who was the grandfather that kept the young Prophet until eight years of age?",
                  "v": "A1",
                  "e": "Abdulmuttalib name|Abû Tâlib name|Abdullah name|Hamza name|Abbâs name",
                  "k": "عبدالمطلب ناوی|ئەبوو تالیب ناوی|عەبدوڵڵا ناوی|حەمزە ناوی|عەباس ناوی",
                  "a": "عبد المطلب اسم|أبو طالب اسم|عبد الله اسم|حمزة اسم|عباس اسم"
                },
                {
                  "q": "Who took care of the Prophet after His grandfather's death?",
                  "v": "A2",
                  "e": "Uncle Abû Tâlib|Uncle Hamza|Uncle Abbâs|Uncle Zubayr|Uncle Harith",
                  "k": "مامە ئەبوو تالیب|مامە حەمزە|مامە عەباس|مامە زوبێر|مامە حارث",
                  "a": "العم أبو طالب|العم حمزة|العم عباس|العم زبير|العم حارث"
                },
                {
                  "q": "What was the name of the Prophet's first son with Khadîja?",
                  "v": "B1",
                  "e": "Qâsim name|Abdullah name|Ibrâhîm name|Tâhir name|Tayyib name",
                  "k": "قاسم ناوی|عەبدوڵڵا ناوی|إبراهيم ناوی|طاهر ناوی|طيب ناوی",
                  "a": "قاسم اسم|عبد الله اسم|إبراهيم اسم|طاهر اسم|طيب اسم"
                },
                {
                  "q": "What honorific title was given to the Prophet because He was unique like a pearl?",
                  "v": "B2",
                  "e": "Durr al-Yatîm|Sayyid al-Anbiyâ|Habîbullah name|Khâtam al-Rijâl|Nûr al-Hudâ",
                  "k": "دڕی یەتیم ناوی|سەیدو ئەنبیا|حەبیبوڵڵا ناوی|خاتەمو ڕیجال|نورو هودا",
                  "a": "در اليتيم اسم|سيد الأنبياء|حبيب الله اسم|خاتم الرجال|نور الهدى"
                },
                {
                  "q": "At what age did the Prophet migrate to Medîna?",
                  "v": "C1",
                  "e": "Fifty-three years|Forty-three years|Sixty-three years|Twenty-five years|Forty years",
                  "k": "تەمەنی پەنجو سێ|تەمەنی چلو سێ|تەمەنی شەستو سێ|تەمەنی بیستو پێنج|تەمەنی چڵ ساڵ",
                  "a": "عمر الثالثة والخمسين|عمر الثالثة والأربعين|عمر الثالثة والستين|عمر الخامسة والعشرين|عمر الأربعين"
                },
                {
                  "q": "In which year of the Hegira did the Prophet pass away?",
                  "v": "C2",
                  "e": "Eleventh Hegira|Tenth Hegira|Twelfth Hegira|Ninth Hegira|Eighth Hegira",
                  "k": "ساڵی یازدەی هجری|ساڵی دەهەمی هجری|ساڵی دوازدەی هجری|ساڵی نۆیەمی هجری|ساڵی هەشتەمی هجری",
                  "a": "الحادية عشرة هجري|العاشرة هجري|الثانية عشرة هجري|التاسعة هجري|الثامنة هجري"
                },
                {
                  "q": "What was the age of the Prophet when He passed away?",
                  "v": "B1",
                  "e": "Sixty-three years|Fifty-three years|Seventy-three years|Eighty-three years|Forty-three years",
                  "k": "شەستو سێ ساڵ|پەنجو سێ ساڵ|حەفتو سێ ساڵ|رەشتو سێ ساڵ|چلو سێ ساڵ",
                  "a": "ثلاث وستون سنة|ثلاث وخمسون سنة|ثلاث وسبعون سنة|ثلاث وثمانون سنة|ثلاث وأربعون سنة"
                },
                {
                  "q": "In which lighted city did the Prophet pass away?",
                  "v": "A1",
                  "e": "Medîna city|Mecca city|Damascus city|Jerusalem city|Taif city",
                  "k": "مەدینەی منەوڕە|مەککەی موکەڕەمە|دیمەشقی شاری|قودسی پیرۆز|طایفی شاری",
                  "a": "مدينة المدينة|مدينة مكة|مدينة دمشق|مدينة القدس|مدينة الطائف"
                },
                {
                  "q": "What specific event happened when the Prophet was fifty-two years old?",
                  "v": "B2",
                  "e": "Mi'raj happened|Hegira happened|First wahy came|Battle happened|Marriage happened",
                  "k": "معراج روویدا|هجرت ڕوویدا|وەحی یەکەم هات|جەنگ ڕوویدا|هاوسەرگیری ڕوویدا",
                  "a": "حدث المعراج|حدثت الهجرة|جاء الوحي الأول|حدثت الغزوة|حدث الزواج"
                },
                {
                  "q": "What was the name of the tribe to which the Prophet belonged?",
                  "v": "A2",
                  "e": "Quraysh tribe|Banu Tamim|Banu Khazraj|Banu Aws|Banu Ghatafan",
                  "k": "هۆزی قورەیش|بەنوو تەمیم|بەنوو خەزرەج|بەنوو ئەوس|بەنوو غەتەفان",
                  "a": "قبيلة قريش|بنو تميم|بنو خزرج|بنو أوس|بنو غطفان"
                },
                {
                  "q": "Who was the wet nurse that breastfed and raised the Prophet in the desert?",
                  "v": "B1",
                  "e": "Halîma as-Sa'diyya|Thuwaybah name|Barakah name|Sumayyah name|Asma name",
                  "k": "حەلیمەی سەعدییە|ثووەیبە ناوی|بەرەکە ناوی|سومەییە ناوی|ئەسما ناوی",
                  "a": "حليمة السعدية|ثويبة اسم|بركة اسم|سمية اسم|أسماء اسم"
                },
                {
                  "q": "What was the respectful title given to the Prophet by the people of Mecca before prophethood due to His honesty?",
                  "v": "A1",
                  "e": "Al-Amîn (The Trustworthy)|As-Siddîq|Al-Fârûq|Dhu-Nûrayn|Khalîlullah",
                  "k": "الأمين (جێی متمانە)|الصدیق|الفاروق|ذو النورین|خلیل‌الله",
                  "a": "الأمين|الصديق|الفاروق|ذو النورين|خليل الله"
                },
                {
                  "q": "Which uncle of the Prophet protected Him in Mecca but passed away without accepting Islam?",
                  "v": "B2",
                  "e": "Abû Tâlib name|Abû Lahab name|Hamza name|Abbâs name|Zubayr name",
                  "k": "ئەبوو تالیب ناوی|ئەبوو لەهەب ناوی|حەمزە ناوی|عەباس ناوی|زوبێر ناوی",
                  "a": "اسم أبو طالب|اسم أبو لهب|اسم حمزة|اسم عباس|اسم زبير"
                },
                {
                  "q": "In which cave did the Prophet spend time in reflection and where the first revelation descended?",
                  "v": "A2",
                  "e": "Cave of Hirâ|Cave of Thawr|Cave of Uhud|Cave of Hiraq|Cave of Noor",
                  "k": "غار حراء|غار ثوڕ|غار ئوحود|غار حێراق|غار نور",
                  "a": "غار حراء|غار ثور|غار أحد|غار حراق|غار النور"
                },
                {
                  "q": "Who was the angel that brought the first divine revelation to the Prophet?",
                  "v": "A1",
                  "e": "Angel Jibrîl (Gabriel)|Angel Mîkâîl|Angel Isrâfîl|Angel Malik|Angel Ridwan",
                  "k": "فریشتە جبراییل|فریشتە میکائیل|فریشتە إسرافیل|فریشتە مالک|فریشتە ڕیدوان",
                  "a": "الملك جبريل|الملك ميكائيل|الملك إسرافيل|الملك مالك|الملك رضوان"
                },
                {
                  "q": "What was the name of the historic migration from Mecca to Medîna?",
                  "v": "A2",
                  "e": "Hegira (Hijrah)|Isra and Mi'raj|Badr Expedition|Conquest of Mecca|Farewell Pilgrimage",
                  "k": "هجرت (کۆچ)|ئیسرا و مەعراج|غەزوەی بەدر|فەتحی مەککە|حەجی ماڵئاوایی",
                  "a": "الهجرة|الإسراء والمعراج|غزوة بدر|فتح مكة|حج الوداع"
                },
                {
                  "q": "What was the original name of Medîna before the migration of the Prophet?",
                  "v": "B2",
                  "e": "Yathrib name|Taif name|Kufa name|Basra name|Yaman name",
                  "k": "يثرب ناوی|طایف ناوی|کوفە ناوی|بەسڕە ناوی|یەمەن ناوی",
                  "a": "اسم يثرب|اسم الطائف|اسم الكوفة|اسم البصرة|اسم اليمن"
                },
                {
                  "q": "Which daughter of the Prophet married Ali ibn Abî Tâlib?",
                  "v": "B1",
                  "e": "Fâtima-tuz-Zahrâ|Zaynab name|Ruqayyah name|Umm Kulthûm|Safiyya name",
                  "k": "فاتیحە-توز-زەهرا|زەینەب ناوی|رەقەیە ناوی|ئوم کەلسوم|سەفییە ناوی",
                  "a": "فاطمة الزهراء|زينب اسم|رقية اسم|أم كلثوم|صفية اسم"
                },
                {
                  "q": "What was the name of the final pilgrimage performed by the Prophet shortly before passing away?",
                  "v": "B2",
                  "e": "Hajjat al-Wadâ' (Farewell Pilgrimage)|Umrah al-Qada|Hajj al-Akbar|Mabrur Pilgrimage|Madina Pilgrimage",
                  "k": "حەجی ماڵئاوایی|عومەرەی قەزا|حەجی ئەکبەر|حەجی مەبروور|حەجی مەدینە",
                  "a": "حجة الوداع|عمرة القضاء|الحج الأكبر|الحج المبرور|حج المدينة"
                }
              ]
            }
          }
        };

        let currentLang = 'e';
        let currentQuestionIndex = 0;
        let score = 0;
        let answered = false;
        const questions = quizData.chapters["Chapter 1"].qa;
        const passage = quizData.chapters["Chapter 1"].p;

        function setLanguage(lang) {
            currentLang = lang;
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            renderQuiz();
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        const shuffledOptionsCache = {};

        function getOptions(qObj, index) {
            if (!shuffledOptionsCache[index]) {
                const rawOptions = qObj[currentLang].split('|');
                const mapped = rawOptions.map((opt, i) => ({ text: opt, isCorrect: i === 0 }));
                shuffledOptionsCache[index] = shuffleArray(mapped);
            }
            return shuffledOptionsCache[index];
        }

        function renderQuiz() {
            const app = document.getElementById('quiz-app');
            const isRtl = currentLang === 'k' || currentLang === 'a';
            
            if (currentQuestionIndex >= questions.length) {
                app.innerHTML = `
                    <div class="card score-container ${isRtl ? 'rtl' : ''}">
                        <h2>Quiz Completed! 🎉</h2>
                        <p>Your Score: <strong>${score}</strong> out of ${questions.length}</p>
                        <button class="nav-btn" onclick="restartQuiz()">Restart Quiz</button>
                    </div>
                `;
                return;
            }

            const q = questions[currentQuestionIndex];
            const options = getOptions(q, currentQuestionIndex);

            app.innerHTML = `
                <div class="card ${isRtl ? 'rtl' : ''}">
                    <div class="passage-box">
                        <h3>Passage Context</h3>
                        <p>${passage}</p>
                    </div>

                    <div class="quiz-header">
                        <span>Question ${currentQuestionIndex + 1} of ${questions.length}</span>
                        <span class="cefr-badge">Level: ${q.v}</span>
                    </div>

                    <div class="question-text">${q.q}</div>

                    <div class="options-grid">
                        ${options.map((opt, i) => `
                            <button class="option-btn" id="opt-${i}" onclick="handleAnswer(${opt.isCorrect}, ${i})">${opt.text}</button>
                        `).join('')}
                    </div>

                    <div class="nav-footer">
                        <button class="nav-btn" onclick="prevQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>Previous</button>
                        <button class="nav-btn" id="next-btn" onclick="nextQuestion()" ${!answered ? 'disabled' : ''}>${currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}</button>
                    </div>
                </div>
            `;
        }

        function handleAnswer(isCorrect, selectedIndex) {
            if (answered) return;
            answered = true;

            const options = getOptions(questions[currentQuestionIndex], currentQuestionIndex);
            options.forEach((opt, i) => {
                const btn = document.getElementById(`opt-${i}`);
                if (opt.isCorrect) {
                    btn.classList.add('correct');
                } else if (i === selectedIndex) {
                    btn.classList.add('incorrect');
                }
                btn.disabled = true;
            });

            if (isCorrect) {
                score++;
            }

            document.getElementById('next-btn').disabled = false;
        }

        function nextQuestion() {
            answered = false;
            currentQuestionIndex++;
            renderQuiz();
        }

        function prevQuestion() {
            if (currentQuestionIndex > 0) {
                answered = true;
                currentQuestionIndex--;
                renderQuiz();
            }
        }

        function restartQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            answered = false;
            for (let key in shuffledOptionsCache) delete shuffledOptionsCache[key];
            renderQuiz();
        }

        renderQuiz();
    </script>
</body>
</html>
