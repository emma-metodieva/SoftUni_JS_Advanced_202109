function solve() {
    const tableBody = document.getElementsByTagName('tbody')[0];

    const generateButton = [...document.querySelectorAll('button')]
        .find(b => b.textContent === 'Generate');
    generateButton.addEventListener('click', generate);

    const buyButton = [...document.querySelectorAll('button')]
        .find(b => b.textContent === 'Buy');
    buyButton.addEventListener('click', buy);

    function generate() {
        [...document.querySelectorAll('input[type=checkbox]')]
            .forEach(cb => cb.disabled = false);

        let inputTextArea = document.querySelectorAll('textarea')[0];
        let input = '';
        if (inputTextArea.value !== undefined) {input = JSON.parse(inputTextArea.value)}

        for (let furniture of input) {
            const row = document.createElement('tr');

            const tdImage = document.createElement('td');
            tdImage.innerHTML = `<img src="${furniture.img}">`;
            row.appendChild(tdImage);

            const tdName = document.createElement('td');
            tdName.innerHTML = `<p>${furniture.name}</p>`;
            row.appendChild(tdName);

            const tdPrice = document.createElement('td');
            tdPrice.innerHTML = `<p>${furniture.price}</p>`;
            row.appendChild(tdPrice);

            const tdDecFactor = document.createElement('td');
            tdDecFactor.innerHTML = `<p>${furniture.decFactor}</p>`;
            row.appendChild(tdDecFactor);

            const tdCheckbox = document.createElement('td');
            tdCheckbox.innerHTML = '<input type="checkbox">';
            row.appendChild(tdCheckbox);

            tableBody.appendChild(row)
        }

        inputTextArea.value = '';
    }

    function buy() {
        let output = '';

        const checkedFurniture = [...document.querySelectorAll('input[type=checkbox]')]
            .filter(cb => cb.checked === true)
            .map(cb => cb.parentElement.parentElement);

        const isColumnNameText = (h) => h.textContent === 'Name';
        const columnName = [...document.querySelectorAll('thead tr th')]
            .findIndex(isColumnNameText);
        let furnitureNames = checkedFurniture
            .map(f => f.children[columnName].textContent.trim());
        output += `Bought furniture: ${furnitureNames.join(', ')}\n`;

        const isColumnPriceText = (h) => h.textContent === 'Price';
        const columnPrice = [...document.querySelectorAll('thead tr th')]
            .findIndex(isColumnPriceText);
        let furniturePrice = checkedFurniture
            .map(f => Number(f.children[columnPrice].textContent.trim()))
            .reduce((s, p) => s + p, 0);
        output += `Total price: ${furniturePrice.toFixed(2)}\n`;

        const isColumnDecFactorText = (h) => h.textContent === 'Decoration factor';
        const columnDecFactor = [...document.querySelectorAll('thead tr th')]
            .findIndex(isColumnDecFactorText);
        let furnitureDecFactor = (checkedFurniture
            .map(f => Number(f.children[columnDecFactor].textContent.trim()))
            .reduce((s, f) => s + f, 0)) / checkedFurniture.length;
        output += `Average decoration factor: ${furnitureDecFactor}`;

        let outputTextArea = document.querySelectorAll('textarea')[1];
        outputTextArea.value = output;
    }
}