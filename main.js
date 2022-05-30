var numbers = document.getElementById("numbers");
var gameTable = document.getElementById("gameTable");
var startBtn = document.getElementById("start");
var cell = 3;
startBtn.addEventListener("click", start);
function start() {
    init();
}
function init() {
    numbers.innerHTML = "";
    gameTable.style.background = "#e6e6e6";
    gameTable.style.border = "2px #242424 solid";
    // 行数(縦)は現在数を表示する行も含めて生成するため+2にする
    for (var i = 0; i < cell + 2; i++) {
        var tr = document.createElement("tr");
        if (i === 0 || i === cell + 1) {
            // 一番上の行を生成する
            // 右側に残数も表示するので+1する
            for (var j = 0; j < cell + 1; j++) {
                var th = document.createElement("th");
                tr.appendChild(th);
            }
        }
        else {
            // 表データを生成する
            // 右側に残数も表示するので+1する
            for (var k = 0; k < cell + 1; k++) {
                if (k === cell) {
                    var th = document.createElement("th");
                    tr.appendChild(th);
                }
                else {
                    var td = document.createElement("td");
                    td.addEventListener("drop", onDrop);
                    tr.appendChild(td);
                }
            }
        }
        gameTable.appendChild(tr);
    }
    // 数字ブロックを生成する
    for (var i = 0; i < cell * cell; i++) {
        var num = document.createElement("div");
        num.className = "num";
        num.draggable = true;
        num.textContent = String(i + 1);
        num.addEventListener("dragstart", onDragStart);
        numbers.appendChild(num);
    }
    var remove = document.createElement("div");
    remove.className = "remove";
    remove.draggable = true;
    //remove.textContent = "✕";
    numbers.appendChild(remove);
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
    var text = e.dataTransfer.getData("text");
    var num = document.querySelectorAll(".num");
}
