// quizapp.js
let currentQuestion = 0;
let score = 0;
let questions = [];

// Fetch questions from the server
fetch("/api/questions")
  .then((res) => res.json())
  .then((data) => {
    questions = data;
    showQuestion();
  })
  .catch((err) => {
    document.getElementById("quiz-container").innerHTML = `<p>Failed to load quiz. Please try again later.</p>`;
    console.error("Error loading questions:", err);
  });

// Display current question and choices
function showQuestion() {
  const container = document.getElementById("quiz-container");
  if (currentQuestion >= questions.length) {
    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
    return;
  }

  const q = questions[currentQuestion];
  container.innerHTML = `
    <div class="question">${q.question}</div>
    <ul class="choices">
      ${q.answers
        .map(
          (a, i) => `
        <li><button onclick="submitAnswer('${a}')">${String.fromCharCode(65 + i)}. ${a}</button></li>
      `
        )
        .join("")}
    </ul>
  `;
}

// Handle answer submission
function submitAnswer(selected) {
  const correct = questions[currentQuestion].correctAnswer;
  if (selected === correct) score++;
  currentQuestion++;
  showQuestion();
}
