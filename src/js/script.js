import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "/src/sass/style.scss";


try {
    const swiper = new Swiper('.works__slider', {
        slidesPerView: 1,
        modules: [Navigation, Pagination],
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            1920: {
                spaceBetween: 35
            }
        },
        // Optional parameters
        loop: true

    });
} catch { }

// const slider = document.querySelector('.swiper').swiper;