document.addEventListener('DOMContentLoaded', () => {

    /*  Mob nevi */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuPanel = document.getElementById('mobile-menu-panel');

    if (mobileMenuBtn && mobileMenuPanel) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuPanel.classList.toggle('is-open');

            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenuPanel.classList.contains('is-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    /* 
        HERO BACKGROUND SLIDER 
        */
    const bgSwiperEl = document.querySelector('.hero-bg-swiper');
    if (bgSwiperEl) {
        new Swiper('.hero-bg-swiper', {
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            speed: 1500,
            loop: true,
            allowTouchMove: false,
            autoplay: { delay: 4000, disableOnInteraction: false },
        });
    }

    /*  HERO FRONT SLIDER  */
    const heroSwiperEl = document.querySelector('.hero-front-swiper');
    if (heroSwiperEl) {
        new Swiper('.hero-front-swiper', {
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: 20,
            speed: 800,
            loop: true,
            grabCursor: true,
            autoplay: { delay: 3000, disableOnInteraction: false },
            pagination: { el: '.hero-pagination', clickable: true },
        });
    }

    /* 2. TESTIMONIAL SLIDER  */
    const testimonialSwiperEl = document.querySelector('.testimonial-swiper');
    if (testimonialSwiperEl) {
        new Swiper('.testimonial-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            speed: 500,
            loop: true,
            breakpoints: {
                768: { slidesPerView: 2 },
            },
            navigation: { prevEl: '#testi-prev', nextEl: '#testi-next' },
        });
    }

    /* 
       3. FAQ  */
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            document.querySelectorAll('.faq-answer').forEach(el => {
                if (el !== answer) el.style.maxHeight = null;
            });
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== question.parentElement) item.classList.remove('is-open');
            });

            question.parentElement.classList.toggle('is-open');
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

});


$(function () {
    $('.portfolio-section').on('click', 'button', function () {

        $(this).siblings().removeClass('active');
        $(this).addClass('active');


        let filterValue = $(this).attr('data-filter');


        if (filterValue === '*' || filterValue === 'all') {
            $('.portfolio-item').fadeIn(300);
        } else {
            $('.portfolio-item').hide();
            $(filterValue).fadeIn(300);
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("recent-carousel");
    const scrollLeftBtn = document.getElementById("scroll-left");
    const scrollRightBtn = document.getElementById("scroll-right");

    // The distance to scroll on each click (approx 2 card widths)
    const scrollAmount = 400;

    if (scrollLeftBtn && scrollRightBtn && carousel) {
        scrollLeftBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });

        scrollRightBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    }
});

// blog page from

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        document.getElementById('formMessage').classList.remove('hidden');
        this.reset();
        setTimeout(() => {
            document.getElementById('formMessage').classList.add('hidden');
        }, 5000);
    });
}

//about page slider
$(document).ready(function () {
    const recentCarousel = $('#recent-carousel');

    // Next button click (Scroll Right)
    $('#recent-next').click(function () {
        const cardWidth = recentCarousel.children().first().outerWidth(true);
        recentCarousel.animate({
            scrollLeft: recentCarousel.scrollLeft() + cardWidth
        }, 'normal');
    });

    // Prev button click 
    $('#recent-prev').click(function () {
        const cardWidth = recentCarousel.children().first().outerWidth(true);
        recentCarousel.animate({
            scrollLeft: recentCarousel.scrollLeft() - cardWidth
        }, 'normal');
    });
});

// test
$(document).ready(function () {
    $('#recent-prev').click(function () {
        // Apnar click-er bhetorer code ekhane thakbe
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });
});

//  test
$(document).ready(function () {
    $('#recent-prev').click(function () {
        // Apnar click-er bhetorer code ekhane thakbe
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });
});

$(document).ready(function () {
    // 1. Carousel Scroll Left & Right buttons (jQuery)
    const $carousel = $('#recent-carousel');

    $('#recent-prev').on('click', function () {
        $carousel.animate({ scrollLeft: '-=300' }, 300);
    });

    $('#recent-next').on('click', function () {
        $carousel.animate({ scrollLeft: '+=300' }, 300);
    });

    $('#extra-carousel-item').removeClass('hidden').css('display', 'flex');
});