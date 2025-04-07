/* js/index.js */

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
  
  // Notificación para "Agregar al carrito"
  (function() {
    function showNotification() {
      const notification = document.getElementById('notification');
      if (notification) {
        notification.classList.add('show');
        setTimeout(() => {
          notification.classList.remove('show');
        }, 3000);
      }
    }
  
    // Se asocia a los botones con id que inician con "add-to-cart"
    const addToCartButtons = document.querySelectorAll('.btn-checkout');
    addToCartButtons.forEach(btn => {
      if (btn.id && btn.id.startsWith('add-to-cart')) {
        btn.addEventListener('click', showNotification);
      }
    });
  })();
  