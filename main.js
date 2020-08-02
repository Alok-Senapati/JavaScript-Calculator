let res = 0;
let dotFlag = false;
let displayString = "";
let divideSign = String.fromCharCode(247);
let multiplySign = String.fromCharCode(215);
let invalidFlag = false;

function setDisplay(displayStr) {
    document.getElementById('display').value = displayStr;
}

function initializeScreen() {
    setDisplay("0");
    for (let i = 1; i < 100; i++) {
        setTimeout(() => {
            document.getElementById('overlay').style.top = i + "vh";
            document.getElementById('overlay').style.height = (100 - i) + "vh";
        }, i * 30);
    }
}

function clearAll() {
    res = 0;
    dotFlag = false;
    displayString = "";
    invalidFlag = false;
    setDisplay("0");
}

function backSpace() {
    if (displayString.length == 1 || invalidFlag) {
        clearAll();
    } else if (displayString.length > 0) {
        displayString = displayString.slice(0, -1);
        setDisplay(displayString);
    } else {
        setDisplay(displayString);
    }
}

function concatToCalculate(n) {
    if (invalidFlag) {
        displayString = n;
        invalidFlag = false;
        dotFlag = false;
    } else {
        displayString += n;
    }

    setDisplay(displayString);
}

function addBraces() {
    if (invalidFlag) {
        displayString = n;
        invalidFlag = false;
        dotFlag = false;
    } else if (!dotFlag) {
        displayString += '(';
        dotFlag = true;
    } else {
        displayString += ')';
        dotFlag = false;
    }

    setDisplay(displayString);
}

function equate() {
    if (displayString) {
        try {
            displayString = displayString.replace(divideSign, "/");
            displayString = displayString.replace(multiplySign, "*");
            displayString = String(eval(displayString));
            if (displayString.length > 10) {
                displayString = "";
                console.log(true);
                setDisplay('Result exceeds limit.');
                invalidFlag = true;
            } else {
                setDisplay(displayString);
            }
        } catch {
            displayString = "Invalid Operation";
            invalidFlag = true;
            setDisplay(displayString);
        }
    } else {
        setDisplay("0");
    }
}