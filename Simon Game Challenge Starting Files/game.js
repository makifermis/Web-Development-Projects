var userClickedPattern= []
var gamePattern = []
var buttonColours = ["red", "blue", "green", "yellow"]
var level = 0

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $('#'+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)
    $("#level-title").text("Level "+ ++level)
}

$('[type="button"]').on("click", function() {
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(level)
  } );

$(document).on("keydown", function(){
    if(level === 0){
      nextSequence()
    }
    
})

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
   $('#'+currentColour).addClass("pressed")
   
   setTimeout(function(){
    $('#'+currentColour).removeClass("pressed")

   }, 100);
}

function checkAnswer(currentLevel){
    for (let index = 0; index < currentLevel; index++) {
        if(gamePattern[index] === userClickedPattern[index]){
            console.log("success")            

        }else{
            console.log("failed")           

        }       
    }
}

