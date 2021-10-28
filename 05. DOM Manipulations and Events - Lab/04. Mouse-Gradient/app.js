function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);

    const result = document.getElementById('result');

    function onMove(evt) {
        const box = evt.target;
        const offset = Math.floor(evt.offsetX /  box.clientWidth * 100);

        result.textContent = `${offset}%`
    }
}