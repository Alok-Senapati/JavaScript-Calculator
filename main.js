let res = 0;
let num = 0;
let dotFlag = false;
let signFlag = false;
let operator = "";
let displayString = "0";

function initializeScreen() {
    document.getElementById('display').innerText = displayString;
    for (let i = 1; i < 100; i++) {
        setTimeout(() => {
            document.getElementById('overlay').style.top = i + "vh";
            document.getElementById('overlay').style.height = (100 - i) + "vh";
        }, i * 30);
    }
}