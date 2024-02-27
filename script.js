const imgDiv = document.querySelector('#img');
const main = document.querySelector('#main');
const reaisAnswer = document.querySelector('#reais');
const centavosAnswer = document.querySelector('#centavos');
const sendAnswer = document.querySelector('#start');
const correct = document.querySelector('#correct');
const wrong = document.querySelector('#wrong');

const MakeQuestionBank = (function () {
    let questionBank = [];

    class Question{
        constructor (string){
            this.value = eval(string);
            this.img = `./img/${string}.jpg`;
        }
    }

    const addQuestion = (value, img) => {
        const question = new Question (value, img);
        questionBank.push(question);
    }

    const getBank = () => {
        return questionBank;
    }

    addQuestion("10+10");
    addQuestion("10+10+10+10");
    addQuestion("25+5"); 
    addQuestion("25+10+10");
    addQuestion("25+25+25+10");
    addQuestion("25+50+5");
    addQuestion("25+50+5+10");
    addQuestion("25+50+10+10");
    addQuestion("50+10+5");
    addQuestion("50+10+10");
    addQuestion("50+25");
    addQuestion("100+5");
    addQuestion("100+5+25+10");
    addQuestion("100+10+10");
    addQuestion("100+10+25+10");
    addQuestion("100+25");
    addQuestion("100+50");
    addQuestion("100+50+5+10");
    addQuestion("100+50+10");
    addQuestion("100+50+10+10");
    addQuestion("100+50+25");
    addQuestion("100+50+25+5");
    addQuestion("100+50+25+10");
    addQuestion("100+100");
    addQuestion("100+100+5");
    addQuestion("100+100+10");
    addQuestion("100+100+25+5");
    addQuestion("100+100+25+10");
    addQuestion("100+100+50");
    addQuestion("100+100+50+5");
    addQuestion("100+100+50+25");
    addQuestion("100+100+100+5");
    addQuestion("100+100+100+50");
    addQuestion("100+100+100+100");
    addQuestion("200+200+200");
    addQuestion("200+500");
    addQuestion("200+500+500+500");
    addQuestion("200+1000");
    addQuestion("200+2000");
    addQuestion("200+5000");
    addQuestion("200+5000+200");
    addQuestion("500+200+200+200");
    addQuestion("1000+200+200");
    addQuestion("1000+500");
    addQuestion("1000+1000+1000+200");
    addQuestion("2000+200+200");
    addQuestion("2000+500");
    addQuestion("2000+2000");
    addQuestion("2000+2000+500");
    addQuestion("2000+2000+2000+200");
    addQuestion("2000+5000+5000+5000");
    addQuestion("5000+500+500+500");
    addQuestion("5000+1000");
    addQuestion("5000+1000+1000+1000");
    addQuestion("5000+2000");
    addQuestion("5000+2000+2000");
    addQuestion("5000+5000+5000+200");
    addQuestion("10000+200");
    addQuestion("10000+200+200+200");
    addQuestion("10000+2000");
    addQuestion("10000+2000+2000+2000");
    addQuestion("10000+5000");
    addQuestion("10000+10000+500");
    addQuestion("10000+10000+1000");
    addQuestion("10000+10000+2000");
    addQuestion("10000+10000+5000");
    addQuestion("10000+10000+10000+500");
    addQuestion("10000+10000+10000+1000");
    addQuestion("10000+10000+10000+2000");
    addQuestion("10000+10000+10000+10000");

    return {getBank}
})();

const gameController = (function () {
    let usableQuestions = MakeQuestionBank.getBank();

    const removeQuestion = (question) => {
        usableQuestions = usableQuestions.filter(value => value != question);
    }

    const selectQuestion = () => {
        return Math.floor(Math.random() * usableQuestions.length);
    }

    const endGame = () => {
        main.textContent = ""
        const endText = document.createElement('div');
        endText.textContent = "Fim do jogo";
        endText.id = "endGame";
        main.appendChild(endText);
    }

    let correctTotal = 0;
    let wrongTotal = 0;

    const updateScore = () => {
        correct.textContent = correctTotal + " Corretos";
        wrong.textContent = wrongTotal + " Errados";
    }

    const updateTotal = (value) => {
        if (value == "correct") {
            correctTotal += 1;
        } else {
            wrongTotal += 1;
        }
        updateScore();
    }

    let selectedQuestion = "";
    let firstTest = true
    
    const playRound = () => {
        if (usableQuestions.length > 0) {
            selectedQuestion = usableQuestions[selectQuestion()];
            
            imgDiv.textContent = "";
            firstTest = true
            
            const img = document.createElement('img');
            img.src = selectedQuestion.img;
            imgDiv.appendChild(img);
        } else {
            endGame();
        }
    }

    const testAnswer = () => {
        let answerGiven = +reaisAnswer.value * 100 + +centavosAnswer.value;
        if (answerGiven == +selectedQuestion.value) {
            if (firstTest == true) {
                updateTotal("correct");
            }
            reaisAnswer.value = "";
            centavosAnswer.value = "";
            removeQuestion(selectedQuestion);
            playRound();
        } else {
            if (firstTest == true) {
                firstTest = false;
                updateTotal("wrong");
            }
        }
    }

    sendAnswer.addEventListener('click', function(event) {
        testAnswer();
    })

    playRound();
})();