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
    for (var i = 0; i < cell + 2; i++) {
        var tr = document.createElement("tr");
        if (i === 0 || i === cell + 1) {
            for (var j = 0; j < cell + 1; j++) {
                var th = document.createElement("th");
                tr.appendChild(th);
            }
        }
        else {
            for (var k = 0; k < cell + 1; k++) {
                if (k === cell) {
                    var th = document.createElement("th");
                    tr.appendChild(th);
                }
                else {
                    var td = document.createElement("td");
                    tr.appendChild(td);
                }
            }
        }
        //const td = document.createElement("td");
        //tr.appendChild(td);
        gameTable.appendChild(tr);
    }
}
