function create(words) {
   const content = document.getElementById('content');
   content.addEventListener('click', onClick);

   for (let word of words) {
      const pElement = document.createElement('p');
      pElement.style.display = 'none';
      pElement.textContent = word;

      const divElement = document.createElement('div');
      divElement.appendChild(pElement);

      content.appendChild(divElement);
   }

   function onClick(e) {
      if (e.target.tagName === 'DIV' && e.target !== content) {
         e.target.querySelector('p').style.display = ''
      }
   }
}