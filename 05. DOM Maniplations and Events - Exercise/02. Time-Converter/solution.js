function attachEventsListeners() {
    let timeSeconds = 0;

    const buttons = document.querySelectorAll('input[type=button]');
    for (let button of buttons) {
        button.addEventListener('click', onClick)
    }

    function onClick(e) {
        let input = e.target.parentElement.querySelector('input[type=text]');

        if (e.target.id === 'daysBtn' && input.id === 'days') {
            timeSeconds = Number(input.value) * 24 * 60 * 60;
        } else if (e.target.id === 'hoursBtn' && input.id === 'hours') {
            timeSeconds = Number(input.value) * 60 * 60
        } else if (e.target.id === 'minutesBtn' && input.id === 'minutes') {
            timeSeconds = Number(input.value) * 60
        } else if (e.target.id === 'secondsBtn' && input.id === 'seconds') {
            timeSeconds = Number(input.value)
        }

        document.getElementById('seconds').value = timeSeconds;
        document.getElementById('minutes').value = timeSeconds / 60;
        document.getElementById('hours').value = timeSeconds / 60 / 60;
        document.getElementById('days').value = timeSeconds / 60 / 60 / 24;
    }
}