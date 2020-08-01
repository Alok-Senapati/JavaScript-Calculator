function initializeScreen() {
    for (let i = 1; i < 100; i++) {
        setTimeout(() => {
            document.getElementById('overlay').style.top = i + "vh";
            document.getElementById('overlay').style.height = (100 - i) + "vh";
        }, i * 30);
    }
}