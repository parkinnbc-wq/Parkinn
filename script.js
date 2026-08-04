let team = "";

function selectTeam(name){
    team = name;

    document.getElementById("clickSound").play();

    alert("เลือก " + team + " แล้ว");
}
let currentQuestion = 0;
let score = 0;
let wrong = 0;

function startGame(){

    document.getElementById("clickSound").play();
    document.getElementById("menu").style.display="none";
    document.getElementById("quiz").style.display="block";

    currentQuestion = 0;
    score = 0;
    wrong = 0;

    showQuestion();
}

function showQuestion(){

    let q = questions[currentQuestion];
console.log(q);

    document.getElementById("question").innerHTML =
    "ข้อ "+(currentQuestion+1)+"/"+questions.length+
    "<br>"+q.question;


    document.getElementById("questionImage").src =
questions[currentQuestion].image;


    let answerBox=document.getElementById("answers");

    answerBox.innerHTML="";


    q.answers.forEach(function(answer,index){

        let btn=document.createElement("button");

        btn.className="answerBtn";

        btn.innerHTML=answer;


        btn.onclick=function(){

            checkAnswer(index);

        };


        answerBox.appendChild(btn);

    });


    document.getElementById("score").innerHTML=
"⭐ "+score+" คะแนน";


document.getElementById("number").innerHTML=
"ข้อ "+(currentQuestion+1)+" / "+questions.length;

}



function checkAnswer(answer){

    let sound;

    if(answer===questions[currentQuestion].correct){

        score++;

        sound = document.getElementById("correctSound");

        alert("✅ ถูกต้อง!");

    }else{

        wrong++;

        sound = document.getElementById("wrongSound");

        alert("❌ ผิด");

    }

    sound.currentTime = 0;
    sound.play();

    setTimeout(function(){

        currentQuestion++;

        if(currentQuestion < questions.length){

            showQuestion();

        }else{

            showResult();

        }

    },1000);

}


function showResult(){

    let sound = document.getElementById("finishSound");
sound.currentTime = 0;
sound.play().catch(function(error){
    console.log(error);
});

    document.getElementById("result").style.display="block";

    document.getElementById("finalScore").innerHTML =
    "คุณได้คะแนน "+score+" / "+questions.length+" คะแนน"+
    "<br>✅ ถูก "+score+" ข้อ"+
    "<br>❌ ผิด "+wrong+" ข้อ";

}
