// Arayüz elementlerini seçme
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizArea = document.getElementById("quiz-area");
const scoreArea = document.getElementById("score-area");
const finalScoreElement = document.getElementById("final-score");
const restartButton = document.getElementById("restart-btn");

let questions = []; // JSON'dan yüklenecek sorular
let currentQuestionIndex = 0;
let score = 0;

// 1. Soruları JSON dosyasından yükleyen asenkron fonksiyon
async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        questions = await response.json();
        startQuiz();
    } catch (error) {
        console.error("Sorular yüklenirken hata oluştu:", error);
        questionElement.innerHTML = "Hata: Sorular yüklenemedi. 'questions.json' dosyasını kontrol edin.";
    }
}

// 2. Quiz'i başlatan fonksiyon
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Sonraki Soru";
    quizArea.classList.remove('hide');
    scoreArea.classList.add('hide');
    showQuestion();
}

// 3. Mevcut soruyu ve cevapları gösteren fonksiyon
function showQuestion() {
    resetState(); // Önceki cevap butonlarını temizle

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        
        // Cevap doğruysa veri setine işaretle
        if (answer.isCorrect) {
            button.dataset.correct = answer.isCorrect;
        }

        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

// 4. Cevap butonlarını ve Next butonunu temizleyen fonksiyon
function resetState() {
    nextButton.classList.add('hide'); // Sonraki butonunu gizle
    nextButton.disabled = true;

    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// 5. Kullanıcı cevap seçtiğinde çalışan fonksiyon
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Tüm butonları devre dışı bırak
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct"); // Doğru cevabı göster
        }
        button.disabled = true; // Tüm butonları kilitle
    });

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    nextButton.classList.remove('hide');
    nextButton.disabled = false;
}

// 6. Skoru gösteren fonksiyon (Quiz bittiğinde)
function showScore() {
    resetState();
    quizArea.classList.add('hide');
    scoreArea.classList.remove('hide');
    finalScoreElement.innerHTML = `Toplam ${questions.length} sorudan ${score} tanesini doğru bildiniz!`;
}

// 7. Sonraki soruya geçen veya skoru gösteren fonksiyon
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

// Olay dinleyicileri
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz(); // Quiz bittiyse yeniden başlat
    }
});

restartButton.addEventListener("click", startQuiz);

// Uygulamayı başlat
loadQuestions();
