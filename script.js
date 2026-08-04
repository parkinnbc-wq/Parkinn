let team = "";

function selectTeam(name){
    team = name;
    alert("เลือก "+team+" แล้ว!");
}
let currentQuestion = 0;
let score = 0;
let wrong = 0;

function startGame(){

    document.getElementById("home").style.display="none";
    document.getElementById("quiz").style.display="block";

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

    if(answer===questions[currentQuestion].correct){

        score++;

        alert("✅ ถูกต้อง!");

    }else{

        wrong++;

        alert("❌ ผิด");

    }


    currentQuestion++;


    if(currentQuestion < questions.length){

        showQuestion();

    }else{

        showResult();

    }

}



function showResult(){

    document.getElementById("finalScore").innerHTML =
"คุณได้ "+score+" / "+questions.length+" คะแนน";

    document.getElementById("result").style.display="block";


   document.getElementById("finalScore").innerHTML =
"คุณได้คะแนน "+score+" / "+questions.length+" คะแนน";
    "<br>✅ ถูก "+score+" ข้อ"+
    "<br>❌ ผิด "+wrong+" ข้อ";

}
