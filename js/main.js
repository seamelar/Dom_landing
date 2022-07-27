$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    startPosition:1,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 3
        },
        950: {
            items: 4
        }
    }
})