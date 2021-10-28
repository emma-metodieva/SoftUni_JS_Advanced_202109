function solve() {
    const table = document.getElementsByTagName('table')[0];
    const output = document.querySelector("#check > p");
    const [buttonQuickCheck, buttonClear] = [...document.getElementsByTagName('button')];

    buttonQuickCheck.addEventListener('click', check);
    buttonClear.addEventListener('click', clear);

    function check() {
        const input = [...document.querySelectorAll('input[type=number]')]
            .map(i => Number(i.value));

        let solved = true;
        for (let i = 1; i <= 3; i++) {
            if (!([input[0], input[1], input[2]].indexOf(i) !== -1 && //row1
                  [input[3], input[4], input[5]].indexOf(i) !== -1 && //row2
                  [input[6], input[7], input[8]].indexOf(i) !== -1 && //row2
                  [input[0], input[3], input[6]].indexOf(i) !== -1 && //col1
                  [input[1], input[4], input[7]].indexOf(i) !== -1 && //col2
                  [input[2], input[5], input[8]].indexOf(i) !== -1)){ //col3
            solved = false
            }
        }

        if (solved) {
            output.textContent = 'You solve it! Congratulations!';
            output.style.color = 'green';
            table.style.border = '2px solid green';
        } else {
            output.textContent = 'NOP! You are not done yet...';
            output.style.color = 'red';
            table.style.border = '2px solid red';
        }
    }

    function clear() {
        [...document.querySelectorAll('input[type=number]')].forEach(i => i.value = '');
        output.textContent = '';
        table.style = '';
    }
}