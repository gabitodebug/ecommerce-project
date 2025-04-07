/* js/carrito.js */

// Autocompletado para búsqueda
(function() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
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
  
  // Modal para confirmar eliminación del carrito
  (function() {
    const deleteButton = document.getElementById('delete-item');
    const modal = document.getElementById('confirm-modal');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');
  
    if(deleteButton && modal) {
      deleteButton.addEventListener('click', () => {
        modal.style.display = 'flex';
      });
      confirmYes.addEventListener('click', () => {
        modal.style.display = 'none';
        alert('Producto eliminado del carrito');
      });
      confirmNo.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  })();
  
  // Funcionalidad del carrusel, swipe y ampliación de imagen
  (function() {
    const carousel = document.getElementById('product-carousel');
    if (!carousel) return;
    const carouselItem = carousel.querySelector('.carousel-item');
    let startX, startY;
    let currentTranslate = 0;
    let isDragging = false;
    let movedX = 0;
    let movedY = 0;
    const threshold = 50; // Umbral de desplazamiento
  
    carousel.addEventListener('touchstart', touchStart, false);
    carousel.addEventListener('touchmove', touchMove, false);
    carousel.addEventListener('touchend', touchEnd, false);
  
    function touchStart(e) {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      isDragging = true;
    }
  
    function touchMove(e) {
      if (!isDragging) return;
      const touch = e.touches[0];
      movedX = touch.clientX - startX;
      movedY = touch.clientY - startY;
      // Si el movimiento es mayor en horizontal, se desliza el carrusel
      if (Math.abs(movedX) > Math.abs(movedY)) {
        e.preventDefault();
        carouselItem.style.transform = `translateX(${currentTranslate + movedX}px)`;
      }
    }
  
    function touchEnd(e) {
      isDragging = false;
      // Deslizar horizontalmente para cambiar imágenes
      if (Math.abs(movedX) > threshold && Math.abs(movedX) > Math.abs(movedY)) {
        if (movedX < 0) {
          currentTranslate -= carousel.offsetWidth;
        } else {
          currentTranslate += carousel.offsetWidth;
        }
        carouselItem.style.transform = `translateX(${currentTranslate}px)`;
      }
      // Si se desliza verticalmente hacia abajo para eliminar producto
      if (movedY > threshold && Math.abs(movedY) > Math.abs(movedX)) {
        showTrashIcon();
      }
      movedX = 0;
      movedY = 0;
    }
  
    function showTrashIcon() {
      const trashIcon = document.getElementById('trash-icon');
      trashIcon.style.display = 'block';
      setTimeout(() => {
        trashIcon.style.display = 'none';
        alert('Producto eliminado');
        // Aquí podrías eliminar el elemento del DOM si es necesario
      }, 1000);
    }
  
    // Ampliar imagen al tocar una de las imágenes del carrusel
    const images = carouselItem.querySelectorAll('img');
    const modal = document.getElementById('enlarge-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close-modal');
  
    images.forEach(img => {
      img.addEventListener('click', function(e) {
        modal.style.display = 'flex';
        modalImg.src = this.src;
      });
    });
  
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    modal.addEventListener('click', function(e) {
      if(e.target === modal) {
        modal.style.display = 'none';
      }
    });
  })();
  