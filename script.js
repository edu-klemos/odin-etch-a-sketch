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

function paintSquare(...colorsOption) {
    const squares = document.querySelectorAll("#square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
        })
    })
};

function resetSquareDivs() {
    const container = document.querySelector("#container");
    container.textContent = "";
}

function createNewSketch(squaresNumber, ...colorsOption) {
    resetSquareDivs();
    createSquareDivs(squaresNumber);
    paintSquare(...colorsOption)
}


createNewSketch(16);

(function newSketchButton() {
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        let squaresNumber;
        do {
            squaresNumber = Number(prompt("Squares per side:"));
            console.log(squaresNumber);
        } while(squaresNumber < 1 || squaresNumber > 100 || !Number.isInteger(squaresNumber));
        createNewSketch(squaresNumber);
         
    })
})();



