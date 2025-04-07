/* js/carousel.js */

/* --- Funcionalidad del Carrusel y Swipe --- */
(function() {
    const carousel = document.getElementById('product-carousel');
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
      // Si el movimiento es mayor en horizontal, se mueve el carrusel
      if (Math.abs(movedX) > Math.abs(movedY)) {
        e.preventDefault();
        carouselItem.style.transform = `translateX(${currentTranslate + movedX}px)`;
      }
    }
  
    function touchEnd(e) {
      isDragging = false;
      // Si se deslizó horizontalmente (para ver más imágenes)
      if (Math.abs(movedX) > threshold && Math.abs(movedX) > Math.abs(movedY)) {
        if (movedX < 0) {
          // Deslizar a la izquierda
          currentTranslate -= carousel.offsetWidth;
        } else {
          // Deslizar a la derecha
          currentTranslate += carousel.offsetWidth;
        }
      }
      // Si se deslizó verticalmente hacia abajo (para borrar producto)
      if (movedY > threshold && Math.abs(movedY) > Math.abs(movedX)) {
        showTrashIcon();
      } else {
        carouselItem.style.transform = `translateX(${currentTranslate}px)`;
      }
      movedX = 0;
      movedY = 0;
    }
  
    function showTrashIcon() {
      const trashIcon = document.getElementById('trash-icon');
      trashIcon.style.display = 'block';
      // Se muestra el icono de papelera durante un segundo y se simula la eliminación
      setTimeout(() => {
        trashIcon.style.display = 'none';
        alert('Producto eliminado');
        // Aquí podrías eliminar el elemento del DOM si lo requieres
      }, 1000);
    }
  })();
  
  /* --- Funcionalidad para Ampliar Imagen al Tocar --- */
  (function() {
    const images = document.querySelectorAll('.carousel-item img');
    const modal = document.getElementById('enlarge-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close-modal');
  
    images.forEach(img => {
      img.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.src;
      });
    });
  
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    // Cerrar el modal al tocar fuera de la imagen
    modal.addEventListener('click', function(e) {
      if(e.target === modal) {
        modal.style.display = 'none';
      }
    });
  })();
  