var again = true;
var count = 0;
var win = 0;
var draw = 0;
var lose = 0;

const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#com-choice");
const matchResult = document.querySelector("#match-result");
const scoreCounterWin = document.querySelector("#score-counter-win");
const scoreCounterLose = document.querySelector("#score-counter-lose");
const rock = document.querySelector(".rock");
const scissor = document.querySelector(".scissor");
const paper = document.querySelector(".paper");
const cRock = document.querySelector(".cRock");
const cScissor = document.querySelector(".cScissor");
const cPaper = document.querySelector(".cPaper");

function computerRandom() {
    var com = Math.random();
    if (com < 0.34) {
        return "Rock";
    }
    if (com >= 0.34 && com < 0.67) {
        return "Scissor";
    }
    return "Paper";
}
function computerColor(comAnswer) {
    if (comAnswer == "Rock") {
        cScissor.classList.add("btn-secondary");
        cScissor.classList.remove("btn-danger");
        cPaper.classList.add("btn-secondary");
        cPaper.classList.remove("btn-danger");
        cRock.classList.add("btn-danger");
        cRock.classList.remove("btn-secondary");
    }
    else if (comAnswer == "Scissor") {
        cRock.classList.add("btn-secondary");
        cRock.classList.remove("btn-danger");
        cPaper.classList.add("btn-secondary");
        cPaper.classList.remove("btn-danger");
        cScissor.classList.add("btn-danger");
        cScissor.classList.remove("btn-secondary");
    }
    else {
        cRock.classList.add("btn-secondary");
        cRock.classList.remove("btn-danger");
        cScissor.classList.add("btn-secondary");
        cScissor.classList.remove("btn-danger");
        cPaper.classList.add("btn-danger");
        cPaper.classList.remove("btn-secondary");
    }
}

function result(comAnswer, playerChoice) {
    if (playerChoice == comAnswer) {
        draw += 1;
        matchResult.style.color = "#ffffff";
        return "DRAW";
    } else {
        if (playerChoice == "Rock" && comAnswer == "Scissor") {
            win += 1;
            matchResult.style.color = "#28a745";
            return "YOU WIN";
        } else if (playerChoice == "Rock" && comAnswer == "Paper") {
            lose += 1;
            matchResult.style.color = "#dc3545";
            return "YOU LOSE";
        } else if (playerChoice == "Scissor" && comAnswer == "Paper") {
            win += 1;
            matchResult.style.color = "#28a745";
            return "YOU WIN";
        } else if (playerChoice == "Scissor" && comAnswer == "Rock") {
            lose += 1;
            matchResult.style.color = "#dc3545";
            return "YOU LOSE";
        } else if (playerChoice == "Paper" && comAnswer == "Rock") {
            win += 1;
            matchResult.style.color = "#28a745";
            return "YOU WIN";
        } else if (playerChoice == "Paper" && comAnswer == "Scissor") {
            lose += 1;
            matchResult.style.color = "#dc3545";
            return "YOU LOSE";
           
        }
    }
}

rock.addEventListener('click', function() {
    playerChoice.innerHTML = "You Choose : Rock";
    var comAnswer = computerRandom()
    computerChoice.innerHTML = "Com Choose : " + comAnswer;
    matchResult.innerHTML = result(comAnswer, "Rock");
    computerColor(comAnswer);
    scoreCounterWin.innerHTML = win;
    scoreCounterLose.innerHTML = lose;
    scissor.classList.add("btn-secondary");
    scissor.classList.remove("btn-success");
    paper.classList.add("btn-secondary");
    paper.classList.remove("btn-success");
    rock.classList.add("btn-success");
    rock.classList.remove("btn-secondary");


})
scissor.addEventListener('click', function() {
    playerChoice.innerHTML = "You Choose : Scissor";
    var comAnswer = computerRandom();
    computerChoice.innerHTML = "Com Choose : " + comAnswer;
    matchResult.innerHTML = result(comAnswer, "Scissor");
    computerColor(comAnswer);
    scoreCounterWin.innerHTML = win;
    scoreCounterLose.innerHTML = lose;
    rock.classList.add("btn-secondary");
    rock.classList.remove("btn-success");
    paper.classList.add("btn-secondary");
    paper.classList.remove("btn-success");
    scissor.classList.add("btn-success");
    scissor.classList.remove("btn-secondary");

})
paper.addEventListener('click', function() {
    playerChoice.innerHTML = "You Choose : Paper";
    var comAnswer = computerRandom();
    computerChoice.innerHTML = "Com Choose : " + comAnswer;
    matchResult.innerHTML = result(comAnswer, "Paper");
    computerColor(comAnswer);
    scoreCounterWin.innerHTML = win;
    scoreCounterLose.innerHTML = lose;
    rock.classList.add("btn-secondary");
    rock.classList.remove("btn-success");
    scissor.classList.add("btn-secondary");
    scissor.classList.remove("btn-success");
    paper.classList.add("btn-success");
    paper.classList.remove("btn-secondary");

})

