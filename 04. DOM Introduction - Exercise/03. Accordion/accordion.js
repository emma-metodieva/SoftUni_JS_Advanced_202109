function toggle() {
    const button = document.querySelector("#accordion > div.head > span");
    const extra = document.querySelector("#extra");

    if (button.innerText.toUpperCase() === 'MORE') {
        extra.style.display = 'block';
        button.innerText = 'Less'
    } else {
        extra.style.display = 'none';
        button.innerText = 'More'
    }
}