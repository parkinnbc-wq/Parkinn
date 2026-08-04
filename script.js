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

    if(answer===questions[currentQuestion].correct){

    score++;

    let sound = document.getElementById("correctSound");
sound.currentTime = 0;
sound.play().catch(function(error){
    console.log(error);
});

setTimeout(function(){
    alert("✅ ถูกต้อง!");
},300);
    }else{

        wrong++;

let sound = document.getElementById("wrongSound");
sound.currentTime = 0;
sound.play().catch(function(error){
    console.log(error);
});

setTimeout(function(){
    alert("❌ ผิด");
},300);

    }


    currentQuestion++;


    if(currentQuestion < questions.length){

        showQuestion();

    }else{

        showResult();

    }

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
