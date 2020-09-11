window.onload = function () {

    function scrollHeader() {
        if (document.documentElement.scrollTop || window.pageYOffset > 0) {
            document.querySelector('header').classList.add('scrolled')
        } else {
            document.querySelector('header').classList.remove('scrolled')
        }
    }
    scrollHeader()

    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        effect: 'fade',
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true
    });

    function videoPlay() {
        document.querySelector('#video').addEventListener('click', function () {
            document.body.classList.toggle('playing')
        })
    }
    videoPlay()

    function burgerMenu() {
        document.querySelector('#burger-icon').addEventListener('click', function () {
            document.body.classList.toggle('burger-opened')
        })
    }
    burgerMenu()

    window.addEventListener('scroll', scrollHeader)

}