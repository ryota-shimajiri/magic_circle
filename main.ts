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

    // 行数(縦)は現在数を表示する行も含めて生成するため+2にする
    for (let i = 0; i < cell + 2; i++) {
        const tr = document.createElement("tr");

        if (i === 0 || i === cell + 1) {
            // 一番上の行を生成する
            // 右側に残数も表示するので+1する
            for (let j = 0; j < cell + 1; j++) {
                const th = document.createElement("th");
                tr.appendChild(th);
            }
        } else {
            // 表データを生成する
            // 右側に残数も表示するので+1する
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
        gameTable.appendChild(tr);
    }
    // 数字ブロックを生成する
    for (let i = 0; i < cell * cell; i ++) {
        const num = document.createElement("div") as HTMLDivElement;
        num.className = "num";
        num.draggable = true;
        num.textContent = String(i + 1);
        // TODO
        //num.addEventListener("dragstart", onDragStart);
        numbers.appendChild(num);
    }
}