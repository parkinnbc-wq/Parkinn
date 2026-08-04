let currentQuestion = 0;
let score = 0;

function startGame() {
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}

function showQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("question").innerHTML =
        "ข้อ " + (currentQuestion + 1) + " : " + q.question;

    document.getElementById("questionImage").src = q.image;

    const answers = document.getElementById("answers");
    answers.innerHTML = "";

    q.answers.forEach((answer, index) => {

        const btn = document.createElement("button");

        btn.className = "answerBtn";

        btn.innerHTML = answer;

        btn.onclick = () => checkAnswer(index);

        answers.appendChild(btn);

    });

    document.getElementById("score").innerHTML =
        "คะแนน : " + score;
}

function checkAnswer(index){

    if(index===questions[currentQuestion].correct){

        score++;

        alert("✅ ตอบถูก");

    }else{

        alert("❌ ตอบผิด");

    }

    currentQuestion++;

    if(currentQuestion<questions.length){

        showQuestion();

    }else{

        finishGame();

    }

}

function finishGame(){

    document.getElementById("quiz").style.display="none";

    document.getElementById("result").style.display="block";

    document.getElementById("finalScore").innerHTML=
    "คุณได้ "+score+" / "+questions.length+" คะแนน";

}
