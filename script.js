// **************************************************
// ARAPÇA BİLGİ YARIŞMASI SORU VERİ SETİ (20 Soru)
// **************************************************
const questions = [
  // 1. BOŞLUK DOLDURMA (HARF-İ CER)
  {
    "question": "Sınavda başarılı oldum. cümlesinde boş bırakılan yere gelmesi gereken harf-i cer hangisidir? 'نجحتُ (....) الإمتحانِ.'",
    "answers": [
      {"text": "إلى", "isCorrect": false},
      {"text": "في", "isCorrect": true},
      {"text": "من", "isCorrect": false},
      {"text": "على", "isCorrect": false}
    ]
  },
  
  // 2. FİİL-FAİL UYUMU (MAZİ FİİL)
  {
    "question": "Aşağıdaki cümlelerin hangisinde fiil (ذهب) ve fâil (المهندسون) arasında uygun bir uyum söz konusudur?",
    "answers": [
      {"text": "ذهبتْ المهندسون إلى المصنع.", "isCorrect": false},
      {"text": "ذهبَ المهندسونَ إلى المصنع.", "isCorrect": true},
      {"text": "يذهبُ المهندسون إلى المصنع.", "isCorrect": false},
      {"text": "ذهبوا المهندسون إلى المصنع.", "isCorrect": false}
    ]
  },
  
  // 3. İSİM TAMLAMASI KURALI
  {
    "question": "'Hocanın yeni arabası' tamlamasının doğru harekelenmiş şekli hangisidir?",
    "answers": [
      {"text": "سيارةٌ الأستاذِ الجديدةُ", "isCorrect": false},
      {"text": "سيارةُ الأستاذِ الجديدةُ", "isCorrect": true},
      {"text": "سيارةُ الأستاذِ جديدٌ", "isCorrect": false},
      {"text": "السيارةُ الأستاذِ الجديدةُ", "isCorrect": false}
    ]
  },
  
  // 4. MUZARİ FİİL VE OLUMSUZLUK (GELECEK ZAMAN)
  {
    "question": "Aşağıdakilerden hangisi 'Yarın gelmeyeceğim.' anlamına gelir?",
    "answers": [
      {"text": "ما جئتُ غداً.", "isCorrect": false},
      {"text": "لنْ أَجِيئَ غداً.", "isCorrect": true},
      {"text": "لمْ أَجِئْ غداً.", "isCorrect": false},
      {"text": "لا أجئُ غداً.", "isCorrect": false}
    ]
  },

  // 5. CÜMLE TERCÜMESİ
  {
    "question": "'Müslimeler üniversiteye girdiler.' cümlesinin doğru Arapçası nedir?",
    "answers": [
      {"text": "دخل المسلمون الجامعة.", "isCorrect": false},
      {"text": "دخلتْ المسلماتُ الجامعةَ.", "isCorrect": true},
      {"text": "دخلن المسلماتُ الجامعة.", "isCorrect": false},
      {"text": "المسلماتُ يدخلنَ الجامعةَ.", "isCorrect": false}
    ]
  },
  
  // 6. SIFAT/MEVSUF UYUMU (AKILSIZ ÇOĞULLAR)
  {
    "question": "Boşluğa gelmesi gereken en uygun sıfat hangisidir? 'هذه كتب (....).' (Bunlar eski kitaplardır.)",
    "answers": [
      {"text": "قديمةٌ", "isCorrect": true},
      {"text": "قديمون", "isCorrect": false},
      {"text": "قديمatٌ", "isCorrect": false},
      {"text": "قديمٌ", "isCorrect": false}
    ]
  },

  // 7. ZAMİR VE AİTLİK KİPİ
  {
    "question": "'Sizin (çoğul erkek) eviniz' ifadesinin Arapçası hangisidir?",
    "answers": [
      {"text": "بيتي", "isCorrect": false},
      {"text": "بيتكِ", "isCorrect": false},
      {"text": "بيتُكمْ", "isCorrect": true},
      {"text": "بيتُهنّ", "isCorrect": false}
    ]
  },

  // 8. İSİM CÜMLESİ ÖGELERİ
  {
    "question": "'المعلمون ماهرون.' (Öğretmenler yeteneklidir.) cümlesinde 'ماهرون' kelimesinin irab (hareke) durumu nedir?",
    "answers": [
      {"text": "Nasb (Üstün)", "isCorrect": false},
      {"text": "Cerr (Esre)", "isCorrect": false},
      {"text": "Ref (Ötre)", "isCorrect": true},
      {"text": "Cezm", "isCorrect": false}
    ]
  },
  
  // 9. EMİR FİİLİ (ÇOĞUL KADIN)
  {
    "question": "'Ey kızlar, oturun!' (çoğul bayan) emir fiili hangisidir?",
    "answers": [
      {"text": "اجلسْ", "isCorrect": false},
      {"text": "اجلسي", "isCorrect": false},
      {"text": "اجلسنَ", "isCorrect": true},
      {"text": "اجلسوا", "isCorrect": false}
    ]
  },
  
  // 10. LİNK VEREN EDATLAR
  {
    "question": "'Hava yağmurlu olduğu için dışarı çıkmadım.' cümlesinde 'olduğu için' anlamını en iyi karşılayan bağlaç hangisidir?",
    "answers": [
      {"text": "و", "isCorrect": false},
      {"text": "لأنَّ", "isCorrect": true},
      {"text": "أو", "isCorrect": false},
      {"text": "ثم", "isCorrect": false}
    ]
  },
  
  // 11. MÜENNİS ÇOĞUL (Cem-i Müennes Salim)
  {
    "question": "'Hastalıklar' anlamına gelen 'أمراض' kelimesinin türü nedir?",
    "answers": [
      {"text": "Cem-i Müennes Salim", "isCorrect": false},
      {"text": "Cem-i Müzekker Salim", "isCorrect": false},
      {"text": "Cem-i Teksir (Kırık Çoğul)", "isCorrect": true},
      {"text": "Müsenna (İkil)", "isCorrect": false}
    ]
  },
  
  // 12. MAZİ FİİLDE TEN VURGUSU
  {
    "question": "Aşağıdakilerden hangisi 'kesinlikle yazdım' anlamına gelir?",
    "answers": [
      {"text": "سأكتبُ", "isCorrect": false},
      {"text": "قدْ كتبتُ", "isCorrect": true},
      {"text": "لنْ أكتبَ", "isCorrect": false},
      {"text": "لمْ أكتبْ", "isCorrect": false}
    ]
  },

  // 13. ZARF-I MEKAN
  {
    "question": "Arapçada 'masanın altı' anlamına gelen kelime hangisidir?",
    "answers": [
      {"text": "فوقَ المكتبِ", "isCorrect": false},
      {"text": "تحتَ المكتبي", "isCorrect": false},
      {"text": "تحتَ المكتبِ", "isCorrect": true},
      {"text": "بجانبُ المكتبُ", "isCorrect": false}
    ]
  },
  
  // 14. İSM-İ MEVSÛL (İLİŞKİ ZAMİRİ)
  {
    "question": "Boşluğa gelmesi gereken uygun ism-i mevsûl (ilişki zamiri) nedir? 'جاء الطالبُ (....) نجحَ في الامتحان.'",
    "answers": [
      {"text": "التي", "isCorrect": false},
      {"text": "الذين", "isCorrect": false},
      {"text": "الذي", "isCorrect": true},
      {"text": "اللاتي", "isCorrect": false}
    ]
  },

  // 15. SAYILAR KURALI
  {
    "question": "'Üç erkek öğrenci' ifadesinin Arapçası hangisidir?",
    "answers": [
      {"text": "ثلاثةُ طلابٍ", "isCorrect": true},
      {"text": "ثلاثُ طلابٍ", "isCorrect": false},
      {"text": "ثلاثةُ طالبٍ", "isCorrect": false},
      {"text": "ثلاثُ طالبينِ", "isCorrect": false}
    ]
  },

  // 16. MUZARİ MANSUPLAR (ÜSTÜN YAPAN EDAT)
  {
    "question": "Boşluğa gelmesi gereken uygun fiil hangisidir? 'أريد أنْ (....) إلى السوقِ.'",
    "answers": [
      {"text": "تذهبُ", "isCorrect": false},
      {"text": "أذهبُ", "isCorrect": false},
      {"text": "أذهبَ", "isCorrect": true},
      {"text": "يذهبوا", "isCorrect": false}
    ]
  },
  
  // 17. İSİM CÜMLESİ ÇEVİRİSİ
  {
    "question": "'Ev temizdir.' cümlesinin Arapça karşılığı nedir?",
    "answers": [
      {"text": "كانَ البيتُ نظيفاً.", "isCorrect": false},
      {"text": "البيتُ نظيفٌ.", "isCorrect": true},
      {"text": "نظيفٌ البيتُ.", "isCorrect": false},
      {"text": "البيتُ النظيفُ.", "isCorrect": false}
    ]
  },

  // 18. TEKİL-İKİL-ÇOĞUL KAVRAMI
  {
    "question": "Aşağıdakilerden hangisi müsenna (ikil) yapıdadır?",
    "answers": [
      {"text": "قلم", "isCorrect": false},
      {"text": "قلمانِ", "isCorrect": true},
      {"text": "أقلام", "isCorrect": false},
      {"text": "قلمات", "isCorrect": false}
    ]
  },

  // 19. HARF-İ CER SONRASI
  {
    "question": "Harf-i Cer (مثل 'إلى') kendisinden sonra gelen ismin harekesini ne yapar?",
    "answers": [
      {"text": "Ref (Ötre)", "isCorrect": false},
      {"text": "Nasb (Üstün)", "isCorrect": false},
      {"text": "Cerr (Esre)", "isCorrect": true},
      {"text": "Sükûn", "isCorrect": false}
    ]
  },
  
  // 20. FİİL CÜMLESİ TERCÜMESİ
  {
    "question": "'Öğrenciler derslerini yazdılar.' cümlesinin doğru Arapçası nedir?",
    "answers": [
      {"text": "يكتبُ الطلابُ دروسَهم.", "isCorrect": false},
      {"text": "كتبَ الطلابُ دروسَهم.", "isCorrect": true},
      {"text": "كتبوا الطلابُ دروسَهم.", "isCorrect": false},
      {"text": "يكتبون الطلابُ دروسَهم.", "isCorrect": false}
    ]
  }
];

// **************************************************
// HTML ELEMENTLERİ VE QUIZ MANTIĞI
// **************************************************

// Arayüz elementlerini seçme
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizArea = document.getElementById("quiz-area");
const scoreArea = document.getElementById("score-area");
const finalScoreElement = document.getElementById("final-score");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

// Quiz'i başlatan fonksiyon
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Sonraki Soru";
    quizArea.classList.remove('hide');
    scoreArea.classList.add('hide');
    showQuestion();
}

// Mevcut soruyu ve cevapları gösteren fonksiyon
function showQuestion() {
    resetState(); // Önceki cevap butonlarını temizle

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    // Soru metnini güncelle
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        
        // Cevap doğruysa veri setine işaretle (isCorrect kullanıyoruz)
        if (answer.isCorrect) {
            button.dataset.isCorrect = answer.isCorrect;
        }

        button.addEventListener("click", selectAnswer);
        // Arapça metinlerin (cevaplar) sağdan sola (RTL) düzgün görünmesi için sınıf ekle
        button.classList.add("rtl-text"); 
        answerButtons.appendChild(button);
    });
}

// Cevap butonlarını ve Next butonunu temizleyen fonksiyon
function resetState() {
    // Soru gösterilirken "Sonraki Soru" butonu gizli ve devre dışı kalmalı.
    nextButton.classList.add('hide'); 
    nextButton.disabled = true;

    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Kullanıcı cevap seçtiğinde çalışan fonksiyon
function selectAnswer(e) {
    const selectedBtn = e.target;
    // data-isCorrect değerini kontrol et
    const isCorrect = selectedBtn.dataset.isCorrect === "true"; 

    // Tüm butonları devre dışı bırak ve doğru cevabı göster
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.isCorrect === "true"){
            button.classList.add("correct"); // Doğru cevabı yeşil yap
        }
        button.disabled = true; // Tüm butonları kilitle
    });

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect"); // Yanlış cevabı kırmızı yap
    }

    // Cevap seçildi, sonraki butonu göster ve etkinleştir
    nextButton.classList.remove('hide');
    nextButton.disabled = false;
}

// Skoru gösteren fonksiyon (Quiz bittiğinde)
function showScore() {
    resetState();
    quizArea.classList.add('hide');
    scoreArea.classList.remove('hide');
    finalScoreElement.innerHTML = `Toplam **${questions.length}** sorudan **${score}** tanesini doğru bildiniz! Mükemmel!`;
}

// Sonraki soruya geçen veya skoru gösteren fonksiyon
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
startQuiz();
