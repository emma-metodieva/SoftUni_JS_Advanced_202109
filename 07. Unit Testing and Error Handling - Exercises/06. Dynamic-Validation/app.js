function validate() {
    const emailPattern = /([a-z]+@[a-z]+.[a-z]+)/;

    const input = document.getElementById('email');
    input.addEventListener('change', () => {
        if (!emailPattern.test(input.value)) {
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    })
}