var numSqaures = 6;
var colors = [];
var pickedColor; 
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("header");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupmodeButtons();
    setupSquares();
    reset();
}

function setupmodeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSqaures = 3: numSqaures = 6;
            reset();
            //ternary operation ^ replaces if/else statement below
    
            // if(this.textContent === "Easy"){
            //     numSqaures = 3;
            // }  else {
            //     numSqaures = 6; 
            // }
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
           var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changedColors(clickedColor);
                header.style.background = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

    function reset(){
        colors = generateRandomColors(numSqaures);
        //pick a new random color from array
        pickedColor = pickColor();
        //change color display to match picked Color
        colorDisplay.textContent = pickedColor;
        resetButton.textContent = "New Colors";
        messageDisplay.textContent = "";    
        // empty string displays when player wins
        messageDisplay.textContent = "";    
    
        //change colors of sqaures
        for(var i = 0; i < squares.length; i++){
            if(colors[i]){
                squares[i].style.display = "block";
                squares[i].style.background = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
        header.style.background = "steelblue";
    }

resetButton.addEventListener("click", function(){
    reset();
})

function changedColors(color){
    //loop through all squares
for(var i = 0; i < squares.length; i++)
    //change each color to match given color
    squares[i].style.background = color;
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//random colors function
function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);

    //pick a "green" from 0 -255
    var g = Math.floor(Math.random() * 256);

    //pick a "blue" from 0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}