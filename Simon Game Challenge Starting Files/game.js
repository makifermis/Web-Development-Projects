var userClickedPattern= []
var gamePattern = []
var buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $('#'+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)
}

$('[type="button"]').on( "click", function() {
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
  } );

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}


