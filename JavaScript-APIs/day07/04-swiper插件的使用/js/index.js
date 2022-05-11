window.addEventListener('load', function () {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination', // 调用分页器的意思
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})