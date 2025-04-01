document.addEventListener('DOMContentLoaded', function(){
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevArrow = document.querySelector('.left-arrow');
    const nextArrow = document.querySelector('.right-arrow');

    let counter = 0;
    const slideWidth = carouselSlide.clientWidth;

    // Función para actualizar posición del carrusel
    function updateCarousel(){
        if (counter < 0){
            counter = images.length - 1;
        }
        else if (counter >= images.length){
            counter = 0;
        }
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }

    // Cambio automático cada 5 segundos
    let autoSlide = setInterval(() => {
        counter++;
        updateCarousel();
    }, 5000);

    // Evento para mover con flechas
    nextArrow.addEventListener('click', () => {
        counter++;
        updateCarousel();
        resetAutoSlide();
    });

    prevArrow.addEventListener('click', () => {
        counter--;
        updateCarousel();
        resetAutoSlide();
    });

    // Reiniciar el auto deslizamiento
    function resetAutoSlide(){
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            counter++;
            updateCarousel();
        }, 5000);
    }

    // Ajustar el carrusel al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
        carouselSlide.style.transition = 'none';
        updateCarousel();
        setTimeout(() => {
            carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        }, 100);
    });
});
