const resetButton = document.getElementById("reset-game");
const buttonElements = document.querySelectorAll(".inner-div");
const turnO = true;
//const buttonElements = document.querySelectorAll(".inner-div").length;
const arraySymbols = ["X" , "O"];
const winPatterns = [
    [0 , 1 , 2] , 
    [0 , 3 , 6] , 
    [0 , 4 , 8] ,
    [1 , 4 , 7] , 
    [2 , 5 , 8] ,
    [2 , 4 , 6] ,
    [3 , 4 , 5] ,
    [6 , 7 , 8]
]
let count = 0;

const disableBoxes = () => {
    for (let box of buttonElements) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of buttonElements) {
        box.disabled = false;
    }
}

buttonElements.forEach((box) => {
    box.addEventListener("click" , () => {
        if (count % 2 === 0) {
            box.innerText = "O";
            count++;
        }
        else {
            box.innerText = "X";
            count++;
        }
        box.disabled = true;
        checkForWinner();
        isDraw();
    });
});

function resetGame() {
    count = 0;
    document.getElementById("winner").textContent = "";
    buttonElements.forEach((box) => {
        box.textContent = "";
        enableBoxes();
    });
}

function checkForWinner() {
   for (let pattern of winPatterns) {

    let pos1value = buttonElements[pattern[0]].innerText;
    let pos2value = buttonElements[pattern[1]].innerText;
    let pos3value = buttonElements[pattern[2]].innerText;
    
    if (pos1value != "" && pos2value != "" && pos3value != "") {
        if (pos1value === pos2value && pos2value === pos3value) {
            document.getElementById("winner").textContent = "The winner is " + pos1value + ", Congratulations!";
            disableBoxes();
            
        }
    }
    
   }
}

function isDraw() {
    let drawCount = 0;
    for (let z = 0; z < buttonElements.length; z++) {
        if (buttonElements[z].innerText != "") {
            drawCount++;
        }
    }
    if (drawCount === buttonElements.length) {
        document.getElementById("winner").textContent = "Game is draw, no one won!";
        disableBoxes();
    }

}

/*for (let i = 0; i < buttonElements; i++) {
    let button1 = document.querySelectorAll(".inner-div")[i]
    button1.addEventListener("click" , function() {
        
        if ((count % 2) === 0) {
            this.textContent = arraySymbols[0];
            count++;
        }
        else {
            this.textContent = arraySymbols[1];
            count++;
        }
        button1.disabled = true;
        checkForWinner();
    });
}*/




