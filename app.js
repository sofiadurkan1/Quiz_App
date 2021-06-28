const quizData=[
    {
        question: 'Middle Eastern eggs baked into tomatoes for breakfast?',
        a:'Menemen',
        b:'Parmigiana',
        c:'Poutine',
        d:'Spanakopita',
        correct:'a'
    },{
        question:'American grilled sandwich composed of corned beef, Swiss cheese, sauerkraut? ',
        a:'Michetta',
        b:'Croque Madame',
        c:'Bocadillo',
        d:'Reuben',
        correct:'d'

    },{
        question:'Which is the most stolen food in the world?',
        a:'Bread',
        b:'Egg',
        c:'Cheese',
        d:'Milk',
        correct:'c'
    

    },{
        question:'American Graham crackers with chocolate and marshmallow? ',
        a:'Peach Cobbler',
        b:'Baklava',
        c:'Chocolate',
        d:'S mores',
        correct:'d'

    }


];
const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");

const a_text = document.getElementById('a_text');
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");





let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText= currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;





    
}
function getSelected(){

    let answer = undefined;

    answersEls.forEach((answerEl) =>{
        if(answerEl.checked){
             answer = answerEl.id;

        }

    });

    return answer;

        
    }

    function deselectAnswers(){
        answersEls.forEach((answerEl) =>{
            answerEl.checked =false;

        });

    }


submitBtn.addEventListener('click',() =>{
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score ++
        }
        currentQuiz++;
    if(currentQuiz<quizData.length){
        loadQuiz();
    }else{
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>`;
    }
}
});








