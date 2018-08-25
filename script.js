var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode button event listeners
    setupModeButtons();
    // set squares originally
    setupSquares();
    reset();
}

// reset button
resetButton.addEventListener("click", function() {
    reset();
});

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}


function setupModeButtons() {
    
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // set initial colors to squares in html
        squares[i].style.backgroundColor = colors[i];

        // add click listeners to squares.=
        squares[i].addEventListener("click", function () {

            // grab color of picked square
            var clickedColor = this.style.backgroundColor;

            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
            }
            else {
                // set to background color
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }

}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(amount) {
    //amount = num in video

    var arr = [];

    for (var i = 0; i < amount; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256); // 255 is max number
    var g = Math.floor(Math.random() * 256); 

    var b = Math.floor(Math.random() * 256); 
    return "rgb(" + r + ", " + g + ", " + b + ")";
}