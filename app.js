const quizData = {
  quizzes: [
    {
      id: "html",
      title: "HTML",
      icon: "</>",
      badgeClass: "badge-html",
      questions: [
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Markup Language",
            "Hyper Text Marketing Language",
            "Hyper Text Markup Leveler"
          ],
          answer: "Hyper Text Markup Language"
        },
        {
          question: "Which HTML element is used to define the largest heading?",
          options: ["<h6>", "<head>", "<h1>", "<header>"],
          answer: "<h1>"
        },
        {
          question: "Which attribute is used to provide alternative text for an image?",
          options: ["title", "src", "alt", "caption"],
          answer: "alt"
        },
        {
          question: "Which semantic tag represents a self-contained piece of content?",
          options: ["<section>", "<article>", "<div>", "<span>"],
          answer: "<article>"
        },
        {
          question: "Which HTML tag creates a numbered list?",
          options: ["<ul>", "<dl>", "<list>", "<ol>"],
          answer: "<ol>"
        },
        {
          question: "Which attribute makes an input field required before form submission?",
          options: ["validate", "mandatory", "required", "checked"],
          answer: "required"
        },
        {
          question: "Where should metadata like character encoding and viewport settings be placed?",
          options: ["<body>", "<footer>", "<head>", "<main>"],
          answer: "<head>"
        },
        {
          question: "Which tag is used to embed an external JavaScript file?",
          options: ["<js>", "<script>", "<code>", "<link>"],
          answer: "<script>"
        },
        {
          question: "Which input type allows selecting multiple options from a set?",
          options: ["radio", "checkbox", "toggle", "select"],
          answer: "checkbox"
        },
        {
          question: "Which element defines navigation links?",
          options: ["<nav>", "<aside>", "<menu>", "<bar>"],
          answer: "<nav>"
        }
      ]
    },
    {
      id: "css",
      title: "CSS",
      icon: "#",
      badgeClass: "badge-css",
      questions: [
        {
          question: "What does CSS stand for?",
          options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
          ],
          answer: "Cascading Style Sheets"
        },
        {
          question: "Which property changes the text color of an element?",
          options: ["font-color", "text-style", "color", "foreground"],
          answer: "color"
        },
        {
          question: "Which layout module arranges items in a single row or column?",
          options: ["Grid", "Flexbox", "Float", "Table"],
          answer: "Flexbox"
        },
        {
          question: "Which CSS unit is relative to the root html element font size?",
          options: ["em", "rem", "vh", "px"],
          answer: "rem"
        },
        {
          question: "Which property controls the space inside an element's border?",
          options: ["margin", "gap", "padding", "spacing"],
          answer: "padding"
        },
        {
          question: "Which position value keeps an element fixed relative to the viewport?",
          options: ["absolute", "relative", "sticky", "fixed"],
          answer: "fixed"
        },
        {
          question: "Which selector targets an element with id='header'?",
          options: [".header", "#header", "*header", "header"],
          answer: "#header"
        },
        {
          question: "Which property creates a two-dimensional row and column layout?",
          options: ["display: grid", "display: flex", "display: block", "display: inline"],
          answer: "display: grid"
        },
        {
          question: "Which value of box-sizing includes padding and border in total width?",
          options: ["content-box", "border-box", "margin-box", "inner-box"],
          answer: "border-box"
        },
        {
          question: "Which CSS feature applies styles conditionally based on screen width?",
          options: ["@keyframes", "@import", "@media", "@layer"],
          answer: "@media"
        }
      ]
    },
    {
      id: "javascript",
      title: "JavaScript",
      icon: "JS",
      badgeClass: "badge-js",
      questions: [
        {
          question: "Which keyword declares a block-scoped variable that can be reassigned?",
          options: ["const", "var", "let", "static"],
          answer: "let"
        },
        {
          question: "Which method selects the first element matching a CSS selector?",
          options: [
            "document.getElementsByClassName()",
            "document.querySelector()",
            "document.findElement()",
            "document.selectAll()"
          ],
          answer: "document.querySelector()"
        },
        {
          question: "Which array method creates a new array with elements passing a test?",
          options: ["forEach()", "map()", "filter()", "reduce()"],
          answer: "filter()"
        },
        {
          question: "What does JSON.stringify() do?",
          options: [
            "Parses a JSON string into an object",
            "Converts a JavaScript value into a JSON string",
            "Validates HTML markup",
            "Saves data to sessionStorage"
          ],
          answer: "Converts a JavaScript value into a JSON string"
        },
        {
          question: "Which operator checks both value and type equality?",
          options: ["==", "=", "===", "!="],
          answer: "==="
        },
        {
          question: "Which method attaches an event handler to a DOM element?",
          options: ["onEvent()", "attachListener()", "addEventListener()", "bindEvent()"],
          answer: "addEventListener()"
        },
        {
          question: "What does event.preventDefault() do on a form submit event?",
          options: [
            "Deletes form inputs",
            "Prevents the browser's default page reload behavior",
            "Disables all buttons",
            "Clears localStorage"
          ],
          answer: "Prevents the browser's default page reload behavior"
        },
        {
          question: "Which object persists data across browser sessions with no expiration?",
          options: ["sessionStorage", "window.name", "localStorage", "navigator"],
          answer: "localStorage"
        },
        {
          question: "Which method adds one or more elements to the end of an array?",
          options: ["push()", "pop()", "shift()", "unshift()"],
          answer: "push()"
        },
        {
          question: "Which keyword is used inside an async function to wait for a Promise?",
          options: ["defer", "await", "yield", "hold"],
          answer: "await"
        }
      ]
    },
    {
      id: "accessibility",
      title: "Accessibility",
      icon: "A11Y",
      badgeClass: "badge-a11y",
      questions: [
        {
          question: "What is the main goal of web accessibility?",
          options: [
            "Making pages load only on desktop monitors",
            "Ensuring websites are usable by people of all abilities",
            "Replacing semantic HTML with div elements",
            "Hiding focus outlines from keyboard users"
          ],
          answer: "Ensuring websites are usable by people of all abilities"
        },
        {
          question: "Which element is best for an interactive action like opening a menu?",
          options: ["<div onclick=''>", "<span role='link'>", "<button type='button'>", "<p>"],
          answer: "<button type='button'>"
        },
        {
          question: "Why should decorative images have an empty alt attribute (alt='')?",
          options: [
            "So CSS loads faster",
            "So screen readers skip purely decorative visuals",
            "Because browsers block non-empty alt tags",
            "To increase image resolution"
          ],
          answer: "So screen readers skip purely decorative visuals"
        },
        {
          question: "Which key is primarily used to move focus between interactive elements?",
          options: ["Tab", "Shift", "Alt", "Escape"],
          answer: "Tab"
        },
        {
          question: "Why is sufficient color contrast between text and background important?",
          options: [
            "It reduces JavaScript bundle size",
            "It makes text readable for users with low vision",
            "It disables browser zoom",
            "It prevents horizontal scrolling"
          ],
          answer: "It makes text readable for users with low vision"
        },
        {
          question: "Which HTML element connects a label directly to a form control?",
          options: ["<label>", "<cite>", "<mark>", "<small>"],
          answer: "<label>"
        },
        {
          question: "What does WCAG stand for?",
          options: [
            "Web Content Accessibility Guidelines",
            "Website Code and Graphics Standard",
            "Web Component Access Group",
            "Wide Content Accessibility Gateway"
          ],
          answer: "Web Content Accessibility Guidelines"
        },
        {
          question: "Why should keyboard focus indicators remain visible?",
          options: [
            "They improve animation frame rates",
            "Keyboard users rely on them to see where focus is",
            "They automatically submit forms",
            "They replace page titles"
          ],
          answer: "Keyboard users rely on them to see where focus is"
        },
        {
          question: "Which attribute helps describe an icon-only button for assistive tech?",
          options: ["data-label", "aria-label", "tabindex", "placeholder"],
          answer: "aria-label"
        },
        {
          question: "How does using semantic headings (<h1>-<h6>) help accessibility?",
          options: [
            "It encrypts form data",
            "It creates a clear document outline for navigation",
            "It forces mobile viewports",
            "It removes margin collapse"
          ],
          answer: "It creates a clear document outline for navigation"
        }
      ]
    }
  ]
};

const letters = ["A", "B", "C", "D"];

const bodyEl = document.body;
const themeSwitchBtn = document.getElementById("themeSwitch");
const activeSubjectEl = document.getElementById("activeSubject");

const startScreenEl = document.getElementById("startScreen");
const quizScreenEl = document.getElementById("quizScreen");
const resultScreenEl = document.getElementById("resultScreen");

const subjectListEl = document.getElementById("subjectList");
const questionCounterEl = document.getElementById("questionCounter");
const questionHeadingEl = document.getElementById("questionHeading");
const progressFillEl = document.getElementById("progressFill");
const optionsListEl = document.getElementById("optionsList");

const submitAnswerBtn = document.getElementById("submitAnswerBtn");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const validationMsgEl = document.getElementById("validationMsg");

const scoreBoxEl = document.getElementById("scoreBox");
const playAgainBtn = document.getElementById("playAgainBtn");

let selectedQuiz = null;
let currentQuestionIndex = 0;
let selectedOption = null;
let score = 0;
let isSubmitted = false;

function applyTheme(theme) {
  bodyEl.classList.remove("dark", "light");
  bodyEl.classList.add(theme);
  localStorage.setItem("quizTheme", theme);
}

function initTheme() {
  const savedTheme = localStorage.getItem("quizTheme");
  applyTheme(savedTheme === "light" ? "light" : "dark");
}

function renderActiveSubject() {
  if (!selectedQuiz) {
    activeSubjectEl.innerHTML = "";
    return;
  }

  activeSubjectEl.innerHTML = "";
  const badge = document.createElement("span");
  badge.className = `subject-badge ${selectedQuiz.badgeClass}`;
  badge.textContent = selectedQuiz.icon;

  const title = document.createElement("span");
  title.textContent = selectedQuiz.title;

  activeSubjectEl.append(badge, title);
}

function showScreen(screenName) {
  startScreenEl.classList.toggle("hidden", screenName !== "start");
  quizScreenEl.classList.toggle("hidden", screenName !== "quiz");
  resultScreenEl.classList.toggle("hidden", screenName !== "result");
  renderActiveSubject();
}

function renderSubjects() {
  subjectListEl.innerHTML = "";

  quizData.quizzes.forEach((quiz) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "subject-card";

    const badge = document.createElement("span");
    badge.className = `subject-badge ${quiz.badgeClass}`;
    badge.textContent = quiz.icon;

    const title = document.createElement("span");
    title.textContent = quiz.title;

    btn.append(badge, title);
    btn.addEventListener("click", () => startQuiz(quiz.id));
    subjectListEl.appendChild(btn);
  });
}

function startQuiz(quizId) {
  selectedQuiz = quizData.quizzes.find((item) => item.id === quizId);
  currentQuestionIndex = 0;
  score = 0;
  selectedOption = null;
  isSubmitted = false;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
  const totalQuestions = selectedQuiz.questions.length;

  selectedOption = null;
  isSubmitted = false;
  validationMsgEl.classList.add("hidden");
  submitAnswerBtn.classList.remove("hidden");
  nextQuestionBtn.classList.add("hidden");

  questionCounterEl.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
  questionHeadingEl.textContent = currentQuestion.question;
  progressFillEl.style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;

  optionsListEl.innerHTML = "";

  currentQuestion.options.forEach((optionText, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-card";

    const letterSpan = document.createElement("span");
    letterSpan.className = "option-letter";
    letterSpan.textContent = letters[index];

    const textSpan = document.createElement("span");
    textSpan.className = "option-text";
    textSpan.textContent = optionText;

    const statusSpan = document.createElement("span");
    statusSpan.className = "option-status";

    btn.append(letterSpan, textSpan, statusSpan);

    btn.addEventListener("click", () => {
      if (isSubmitted) return;
      selectedOption = optionText;
      validationMsgEl.classList.add("hidden");

      document.querySelectorAll(".option-card").forEach((card) => {
        card.classList.remove("selected");
      });
      btn.classList.add("selected");
    });

    optionsListEl.appendChild(btn);
  });
}

function handleSubmitAnswer() {
  if (!selectedOption) {
    validationMsgEl.classList.remove("hidden");
    return;
  }

  isSubmitted = true;
  validationMsgEl.classList.add("hidden");

  const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion.answer;

  if (isCorrect) {
    score += 1;
  }

  const optionCards = optionsListEl.querySelectorAll(".option-card");
  optionCards.forEach((card) => {
    card.disabled = true;
    const text = card.querySelector(".option-text").textContent;
    const statusEl = card.querySelector(".option-status");

    if (text === currentQuestion.answer) {
      card.classList.remove("selected");
      card.classList.add("correct");
      statusEl.textContent = "✓";
    } else if (text === selectedOption && !isCorrect) {
      card.classList.remove("selected");
      card.classList.add("incorrect");
      statusEl.textContent = "✕";
    }
  });

  submitAnswerBtn.classList.add("hidden");
  nextQuestionBtn.classList.remove("hidden");
  nextQuestionBtn.textContent =
    currentQuestionIndex === selectedQuiz.questions.length - 1
      ? "See Results"
      : "Next Question";
}

function handleNextQuestion() {
  if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  } else {
    renderResult();
  }
}

function renderResult() {
  showScreen("result");
  scoreBoxEl.innerHTML = "";

  const subjectRow = document.createElement("div");
  subjectRow.className = "score-subject";

  const badge = document.createElement("span");
  badge.className = `subject-badge ${selectedQuiz.badgeClass}`;
  badge.textContent = selectedQuiz.icon;

  const title = document.createElement("span");
  title.textContent = selectedQuiz.title;

  subjectRow.append(badge, title);

  const scoreValue = document.createElement("div");
  scoreValue.className = "score-value";
  scoreValue.textContent = String(score);

  const scoreTotal = document.createElement("p");
  scoreTotal.className = "score-total";
  scoreTotal.textContent = `out of ${selectedQuiz.questions.length}`;

  scoreBoxEl.append(subjectRow, scoreValue, scoreTotal);
}

themeSwitchBtn.addEventListener("click", () => {
  const nextTheme = bodyEl.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme);
});

submitAnswerBtn.addEventListener("click", handleSubmitAnswer);
nextQuestionBtn.addEventListener("click", handleNextQuestion);

playAgainBtn.addEventListener("click", () => {
  selectedQuiz = null;
  showScreen("start");
});

initTheme();
renderSubjects();
showScreen("start");