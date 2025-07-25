function nextQuestion(currentid,nextid){
    document.getElementById(currentid).classList.remove('active');
    document.getElementById(nextid).classList.add('active');
}
function prevQuestion(currentid,previd){
    document.getElementById(currentid).classList.remove('active');
    document.getElementById(previd).classList.add('active');
}
function submitQuiz(){
    const correctAnswers = {
        q1:"q1a1",
        q2:"q2a2",
        q3:"q3a1",
        q4:"q4a3",
        q5:"q5a2",
    };
    let score = 0;
    let total = Object.keys(correctAnswers).length;
    for(let question in correctAnswers){
        let selected = document.querySelector(`input[name="${question}"]:checked`);
        if(selected && selected.id === correctAnswers[question]){
            score++;
        }
    }
    document.getElementById("q5").classList.remove("active");
    document.getElementById("result").classList.add("active");
    document.getElementById("score-display").innerText =
        `You scored ${score} out of ${total}! 🎯`;
}
function SubmitQuiz() {
    const correctAnswers = {
        q1: "q1a1",
        q2: "q2a3",
        q3: "q3a2",
        q4: "q4a3",
        q5: "q5a1",
    };
    let score = 0;
    let total = Object.keys(correctAnswers).length;
    for (let question in correctAnswers) {
        let selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.id === correctAnswers[question]) {
            score++;
        }
    }
    document.getElementById("q5").classList.remove("active");
    document.getElementById("result").classList.add("active"); 
    document.getElementById("score-display").innerText =
        `You scored ${score} out of ${total}! 🎯`; 
}
function submitJSQuiz() {
    const correctAnswers = {
        q1: "q1a1",
        q2: "q2a3",
        q3: "q3a1",
        q4: "q4a1",
        q5: "q5a2",
    };
    let score = 0;
    let total = Object.keys(correctAnswers).length;
    for (let question in correctAnswers) {
        let selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.id === correctAnswers[question]) {
            score++;
        }
    }
    document.getElementById("q5").classList.remove("active");
    document.getElementById("result").classList.add("active");
    document.getElementById("score-display").innerText =
        `You scored ${score} out of ${total}! 🎯`;
}
