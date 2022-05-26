const numbers = document.getElementById("numbers");
const gameTable = document.getElementById("gameTable");
const startBtn: any = document.getElementById("start");
const cell:number = 3;

startBtn.addEventListener("click", start);

function start() {
    init();
}

function init() {
    numbers.innerHTML = "";
    gameTable.style.background = "#e6e6e6";
    for (let i = 0; i < cell + 2; i++) {
        const tr = document.createElement("tr");
        if (i === 0 || i === cell + 1) {
            for (let j = 0; j < cell + 1; j++) {
                const th = document.createElement("th");
                tr.appendChild(th);
            }
        } else {
            for (let k = 0; k < cell + 1; k++) {
                if (k === cell) {
                    const th = document.createElement("th");
                    tr.appendChild(th);
                } else {
                    const td = document.createElement("td");
                    tr.appendChild(td);
                }
            }
        }
        //const td = document.createElement("td");
        //tr.appendChild(td);
        gameTable.appendChild(tr);
    }
}