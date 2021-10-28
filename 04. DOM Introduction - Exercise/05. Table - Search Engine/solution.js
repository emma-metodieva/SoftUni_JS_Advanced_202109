function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchText = document.getElementById('searchField').value;
      const rows = document.querySelectorAll('body > table > tbody > tr');

      for (let row of Array.from(rows)) {
         row.classList.remove('select');
         for (let cell of Array.from(row.cells)) {
            if (cell.textContent.includes(searchText)) {
               row.classList.add('select')
            }
         }
      }

      document.getElementById('searchField').value = ''
   }
}