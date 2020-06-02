const sliders = (slides, prev, next) => {
    let items = document.querySelectorAll(slides),
        slideIndex = 0;

    function nextSlide(n) {
        if (n < 0 && slideIndex === 0) {
            slideIndex = items.length - slideIndex;
        }
        if (slideIndex === 7) {
            slideIndex = 0;
        }
        items.forEach((item, index) => {
            if (index + slideIndex + 1 === items.length) {
                item.classList.remove('screenshots__photo--p6');
                item.classList.add('screenshots__photo--p0');
            } else if (index + slideIndex === items.length) {
                item.classList.remove('screenshots__photo--p0');
                item.classList.add('screenshots__photo--p1');
            } else if (index + slideIndex < items.length) {
                item.classList.remove(`screenshots__photo--p${index + slideIndex}`);
                item.classList.add(`screenshots__photo--p${index + slideIndex + 1}`);
            } else if (index + slideIndex > items.length) {
                item.classList.remove(`screenshots__photo--p${index + slideIndex - items.length}`)
                item.classList.add(`screenshots__photo--p${index + slideIndex - items.length + 1}`)
            } else if (index + slideIndex + 1 > items.length) {
                item.classList.remove(`screenshots__photo--p${index + slideIndex}`);
                item.classList.add(`screenshots__photo--p${index + slideIndex - items.length}`);
            }
        });
        slideIndex++;
    }

        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            nextSlide(-1);
        });
        nextBtn.addEventListener('click', () => {
            nextSlide(1);
        });
    };


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    sliders('.screenshots > img', '.fa-arrow-left', '.fa-arrow-right')
});