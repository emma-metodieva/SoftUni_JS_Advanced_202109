function addItem() {
    const input = document.getElementById('newItemText');

    const newElement = document.createElement('li');
    newElement.textContent = input.value.toString();

    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeElement);

    newElement.appendChild(button);

    const unsortedList = document.getElementById('items');
    unsortedList.appendChild(newElement);

    input.value = '';

    function removeElement(evt) {
        evt.target.parentElement.remove()
    }
}