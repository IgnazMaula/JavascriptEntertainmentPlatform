function nextSequence() {
    var ramdomNumber = Math.floor(Math.random() * 4);
    const buttonColors = ["red", "blue", "green", "yellow"];
    var randomChoosenColor = buttonColors[ramdomNumber]
    gamePattern.push(randomChoosenColor)

    var randomChoosenBtn = $("#" + randomChoosenColor);
    randomChoosenBtn.fadeOut(100).fadeIn(100);
    playAudio(randomChoosenColor);
    level += 1;
    $("h1").html("level " + level);
}

function playAudio(color) {
    const audio = new Audio("sounds/" + color + ".mp3");
    audio.play();

}

function animatePress(color) {
    $("#" + color).addClass("pressed")
    setTimeout(function () {
        $("#" + color).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === level) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }
    } else {
        playAudio("wrong");
        $("body").addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").html("Game Over, Press any key to restart");
        startOver()
    }
}
function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    happenFirst = true;

}

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var happenFirst = true;

$(document).keypress(function () {
    if(happenFirst) {
        happenFirst = false;
        nextSequence();
    }
    
});

$(".btn").click(function () {
    var userChoosenColor = $(this).attr("id");
    userClickedPattern.push(userChoosenColor)
    animatePress(userChoosenColor);
    playAudio(userChoosenColor);
    checkAnswer(userClickedPattern.length - 1);

});