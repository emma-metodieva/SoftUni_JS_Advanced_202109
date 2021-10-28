function addItem() {
    const dropdown = document.getElementById('menu');

    const button = document.querySelector('input[type="button"]');

    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.innerText = newItemText.value;
    option.value = newItemValue.value;
    dropdown.appendChild(option);

    newItemText.value = '';
    newItemValue.value = '';
}