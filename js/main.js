$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    startPosition:1,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})