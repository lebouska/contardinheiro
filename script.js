const imgDiv = document.querySelector('#img');
const main = document.querySelector('#main');
const reaisAnswer = document.querySelector('#reais');
const centavosAnswer = document.querySelector('#centavos');
const sendAnswer = document.querySelector('#start');
const correct = document.querySelector('#correct');
const wrong = document.querySelector('#wrong');

const MakeQuestionBank = (function () {
    let questionBank = [];
    let coinsBank = [];
    let billsBank = [];

    class Question{
        constructor (string){
            this.value = eval(string);
            this.img = `./img/${string}.jpg`;
        }
    }

    const addQuestion = (value) => {
        const question = new Question (value);
        questionBank.push(question);
    }

    const addCoins = (value) => {
        const coin = new Question(value);
        coinsBank.push(coin);
    }

    const addBills = (value) => {
        const bill = new Question(value);
        billsBank.push(bill);
    }

    const getBank = () => {
        return questionBank;
    }

    const getCoins = () => {
        return coinsBank;
    }

    const getBills = () => {
        return billsBank;
    }

    addCoins("10+10");
    addCoins("10+10+10+10");
    addCoins("25+5");
    addCoins("25+10+10");
    addCoins("25+25+25+10");
    addCoins("25+50+5");
    addCoins("25+50+5+10");
    addCoins("25+50+10+10");
    addCoins("50+10+5");
    addCoins("50+10+10");
    addCoins("50+25");
    addCoins("100+5");
    addCoins("100+5+25+10");
    addCoins("100+10+10");
    addCoins("100+10+25+10");
    addCoins("100+25");
    addCoins("100+50");
    addCoins("100+50+5+10");
    addCoins("100+50+10");
    addCoins("100+50+10+10");
    addCoins("100+50+25");
    addCoins("100+50+25+5");
    addCoins("100+50+25+10");
    addCoins("100+100");
    addCoins("100+100+5");
    addCoins("100+100+10");
    addCoins("100+100+25+5");
    addCoins("100+100+25+10");
    addCoins("100+100+50");
    addCoins("100+100+50+5");
    addCoins("100+100+50+25");
    addCoins("100+100+100+5");
    addCoins("100+100+100+50");
    addCoins("100+100+100+100");

    addBills("200+500");
    addBills("200+500+500+500");
    addBills("200+1000");
    addBills("200+2000");
    addBills("200+5000");
    addBills("200+5000+200");
    addBills("500+200+200+200");
    addBills("1000+200+200");
    addBills("1000+500");
    addBills("1000+1000+1000+200");
    addBills("2000+200+200");
    addBills("2000+500");
    addBills("2000+2000");
    addBills("2000+2000+500");
    addBills("2000+2000+2000+200");
    addBills("2000+5000+5000+5000");
    addBills("5000+500+500+500");
    addBills("5000+1000");
    addBills("5000+1000+1000+1000");
    addBills("5000+2000");
    addBills("5000+2000+2000");
    addBills("5000+5000+5000+200");
    addBills("10000+200");
    addBills("10000+200+200+200");
    addBills("10000+2000");
    addBills("10000+2000+2000+2000");
    addBills("10000+5000");
    addBills("10000+10000+500");
    addBills("10000+10000+1000");
    addBills("10000+10000+2000");
    addBills("10000+10000+5000");
    addBills("10000+10000+10000+500");
    addBills("10000+10000+10000+1000");
    addBills("10000+10000+10000+2000");

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

    return {getBank, getCoins, getBills}
})();

const gameController = (function () {
    let usableQuestions = MakeQuestionBank.getBank();
    let usableBills = MakeQuestionBank.getBills();
    let usableCoins = MakeQuestionBank.getCoins();

    let game = "one";

    const removeQuestion = (question) => {
        usableQuestions = usableQuestions.filter(value => value != question);
    }

    const removeBillsCoins = (bills, coins) => {
        usableBills = usableBills.filter(value => value != bills);
        usableCoins = usableCoins.filter(value => value != coins);
    }

    const selectQuestion = () => {
        return Math.floor(Math.random() * usableQuestions.length);
    }

    const selectBills = () => {
        return Math.floor(Math.random() * usableBills.length);
    }

    const selectCoins = () => {
        return Math.floor(Math.random() * usableCoins.length);
    }

    const choseGame = () => {
        if (correctTotal > 0) {
            let randomValue = Math.floor(Math.random() * (usableQuestions.length + usableBills.length));
            if (randomValue < usableQuestions.length) {
                game = "one";
            } else {
                game = "two";
            }   
        }
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
    let selectedBill = "";
    let selectedCoin = "";

    let firstTest = true
    
    const playRoundOne = () => {
        selectedQuestion = usableQuestions[selectQuestion()];
            
        imgDiv.textContent = "";
        firstTest = true
        
        const img = document.createElement('img');
        img.src = selectedQuestion.img;
        imgDiv.appendChild(img);
    }

    const playRoundTwo = () => {
        selectedBill = usableBills[selectBills()];
        selectedCoin = usableCoins[selectCoins()];
            
        imgDiv.textContent = "";
        firstTest = true
        
        const imgBill = document.createElement('img');
        imgBill.src = selectedBill.img;
        imgDiv.appendChild(imgBill);

        const imgCoin = document.createElement('img');
        imgCoin.src = selectedCoin.img;
        imgDiv.appendChild(imgCoin);
    }

    const playRound = () => {
        choseGame();
        if (usableQuestions.length > 0 || usableBills.length > 0) {
            if (game == "one") {
                playRoundOne();
            } else {
                playRoundTwo();
            }
        } else {
            endGame();
        }
    }

    const testAnswer = () => {
        let answerGiven = +reaisAnswer.value * 100 + +centavosAnswer.value;
        if (game == "one") {
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
        } else {
            if (answerGiven == +selectedBill.value + +selectedCoin.value) {
                if (firstTest == true) {
                    updateTotal("correct");
                }
                reaisAnswer.value = "";
                centavosAnswer.value = "";
                removeBillsCoins(selectedBill, selectedCoin);
                playRound();
            } else {
                if (firstTest == true) {
                    firstTest = false;
                    updateTotal("wrong");
                }
            }
        }
    }

    sendAnswer.addEventListener('click', function(event) {
        testAnswer();
    })

    playRound();
})();