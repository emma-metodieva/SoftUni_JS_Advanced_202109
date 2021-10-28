function addItem() {
    const input = document.getElementById('newItemText');

    const newElement = document.createElement('li');
    newElement.innerText = input.value.toString();

    const unsortedList = document.getElementById('items');
    unsortedList.appendChild(newElement);

    input.value = '';
}