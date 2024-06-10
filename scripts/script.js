document.addEventListener('DOMContentLoaded', () => {

    // Swiper JS initialization 
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 7, // Numero di immagini visibili contemporaneamente
        spaceBetween: 15, // Spazio tra le immagini
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000, // Cambio automatico delle immagini ogni 3 secondi
            disableOnInteraction: false,
        },
    });

    // Event listener per le domande frequenti (FAQ)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});
