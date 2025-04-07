/* js/auriculares.js */

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
  
  // Pestañas para detalles del producto
  (function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    tabLinks.forEach(link => {
      link.addEventListener('click', () => {
        tabLinks.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        link.classList.add('active');
        const target = link.getAttribute('data-tab');
        document.getElementById(target).classList.add('active');
      });
    });
  })();
  
  // Notificación para "Agregar al carrito"
  (function() {
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
      addToCartButton.addEventListener('click', () => {
        const notification = document.getElementById('notification');
        if (notification) {
          notification.classList.add('show');
          setTimeout(() => {
            notification.classList.remove('show');
          }, 3000);
        }
      });
    }
  })();
  