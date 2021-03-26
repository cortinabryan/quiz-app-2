const quizData = [
  {
    question: "How old is Bryan?",
    a: "10",
    b: "17",
    c: "25",
    d: "110",
    correct: "c",
  },
  {
    question: "Which instrument has 6 strings",
    a: "Guitar",
    b: "Violin",
    c: "Bass Guitar",
    d: "Cello",
    correct: "a",
  },
  {
    question: "Which fruit is Yellow?",
    a: "Apple",
    b: "Orange",
    c: "Kiwi",
    d: "Banana",
    correct: "d",
  },
  {
    question: "Which sport involves kicking a ball",
    a: "Basketball",
    b: "Soccer",
    c: "Tennis",
    d: "Baseball",
    correct: "b",
  },
  {
    question: "Which martial art involves no strikes",
    a: "Jiu Jitsu",
    b: "Boxing",
    c: "Muay Thai",
    d: "Karate",
    correct: "a",
  },
];

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  currentQuestion++;
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;
  loadQuiz();
});
