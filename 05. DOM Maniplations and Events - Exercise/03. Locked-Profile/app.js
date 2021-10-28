function lockedProfile() {
    const buttons = [...document.querySelectorAll('button')];
    buttons.forEach(b => b.addEventListener('click', onClick));

    function onClick(e) {
        const parent = e.target.parentElement;

        if (parent.querySelector('input[value=lock]').checked === false) {
            const info = [...parent.querySelectorAll('div')]
                .find(d => d.id.includes('HiddenFields'));

            if (e.target.textContent === 'Show more') {
                info.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else if (e.target.textContent === 'Hide it') {
                info.style.display = '';
                e.target.textContent = 'Show more'
            }
        }
    }
}