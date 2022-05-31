const numbers = document.getElementById("numbers");
const gameTable = document.getElementById("gameTable") as HTMLTableElement;
const startBtn: any = document.getElementById("start");
const cell:number = 3;

startBtn.addEventListener("click", start);

function start() {
    gameTable.innerHTML = "";
    numbers.innerHTML = "";
    init();
}

function init() {
    gameTable.style.background = "#e6e6e6";
    gameTable.style.border = "2px #242424 solid";

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
                    td.addEventListener("drop", onDrop);
                    td.addEventListener("dragover", onDragover);
                    td.addEventListener("dragenter", onDragenter);
                    td.addEventListener("dragleave", onDragleave);
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
        num.addEventListener("dragstart", onDragStart);
        numbers.appendChild(num);
    }
    const remove = document.createElement("div") as HTMLDivElement;
    remove.className = "remove";
    remove.draggable = true;
    numbers.appendChild(remove);
}

// ドラッグ操作 要素を通過中
function onDragover(e) {
    e.preventDefault();
}

// ドラッグ操作 要素へ進入 
function onDragenter(e) {
    // putのクラス名を追加
    this.classList.toggle("put");
}

// ドラッグ操作 要素から退出
function onDragleave(e) {
    // 色が残らない様にクラス名を削除
    this.classList.toggle("put");
}

function onDragStart(e) {
    // dataTransferにテキスト情報を保持させる
    e.dataTransfer.setData("text", e.target.textContent);
    // 予期せぬ伝達を防ぐ
    e.stopPropagation();
}

function onDrop(e) {
    console.log("test");
    // dataTransferからテキスト情報を取得
    const text = e.dataTransfer.getData("text");
    const num = document.querySelectorAll(".num");
    num.forEach((value) => {
        if (value.textContent === text) {
            value.classList.add("select");
        } else if (value.textContent === e.target.textContent) {
            value.classList.remove("select");
        }
    });
    e.target.textContent = text;
    this.classList.remove("put");
}

function checkAnswer() {
    let total = [];
    // HTMLからthを取得
    const th = document.querySelector("th");
    for (let i = 0; i < cell + 1; i++) {
        total.push(gameTable.rows[0].cells[i].textContent);
    }
}