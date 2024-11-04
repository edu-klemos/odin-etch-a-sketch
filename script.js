function createSquareDivs() {
    const container = document.querySelector("#container")
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.setAttribute("id", "row");
        container.appendChild(row);
        for (let j = 0; j < 16; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute("id", "square")
            row.appendChild(squareDiv);
        }
    }
}

createSquareDivs();