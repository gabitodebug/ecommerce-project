/* js/main.js */

// Autocompletado para búsqueda
(function() {
    const searchInput = document.getElementById('search-input');
    const autocompleteList = document.getElementById('autocomplete-list');
    const suggestions = ['Auriculares', 'Televisor', 'Iphone', 'Laptop', 'Cámara'];
  
    searchInput.addEventListener('input', function() {
      const value = this.value.toLowerCase();
      autocompleteList.innerHTML = '';
      if (!value) return;
      suggestions.forEach(item => {
        if (item.toLowerCase().includes(value)) {
          const div = document.createElement('div');
          div.classList.add('autocomplete-suggestion');
          div.innerText = item;
          div.addEventListener('click', () => {
            searchInput.value = item;
            autocompleteList.innerHTML = '';
          });
          autocompleteList.appendChild(div);
        }
      });
    });
  
    document.addEventListener('click', (e) => {
      if(e.target !== searchInput) {
        autocompleteList.innerHTML = '';
      }
    });
  })();
  