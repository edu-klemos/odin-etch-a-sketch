function createSquareDivs(squaresNumber) {
    const container = document.querySelector("#container")
    for (let i = 0; i < squaresNumber; i++) {
        const row = document.createElement("div");
        row.setAttribute("id", "row");
        container.appendChild(row);
        for (let j = 0; j < squaresNumber; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute("id", "square")
            row.appendChild(squareDiv);
        }
    }
};

function paintSquare() {
    const randomColors = document.querySelector("#random-colors").checked;
    const opacity = document.querySelector("#opacity").checked;
    const squares = document.querySelectorAll("#square");
    if (randomColors) {
        squares.forEach((square) => {
            square.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = rgbRandomColor();
            })
        })
    }
    else {
        squares.forEach((square) => {
            square.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "black";
            })
        })
    }
    if (opacity) {
        squares.forEach((square) => {
            square.addEventListener("mouseover", (event) => {
                let opacityValue = Number(event.target.style.opacity);
                if (opacityValue !== 1) {
                    event.target.style.opacity = opacityValue + 0.1;
                }
            })
        }) 
    }
};

function resetSquareDivs() {
    const container = document.querySelector("#container");
    container.textContent = "";
}

function createNewSketch(squaresNumber) {
    resetSquareDivs();
    createSquareDivs(squaresNumber);
    paintSquare();
}

function rgbRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

(function newSketchButton() {
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        let squaresNumber;
        do {
            squaresNumber = Number(prompt("Squares per side:"));
        } while(squaresNumber < 1 || squaresNumber > 100 || !Number.isInteger(squaresNumber));
        createNewSketch(squaresNumber);
         
    })
})();

(function checkBoxes() {
    const checkBoxes = document.querySelectorAll("input");
    checkBoxes.forEach((checkBox) => {
        checkBox.addEventListener("change", paintSquare)
    })
})();

createNewSketch(16);
