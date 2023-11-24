jQuery(document).ready(function($) {
    let slider = $('.owl-carousel');
    slider.each(function() {
        $(this).owlCarousel({
            nav: false,
            loop: true,
            dots: false,
            pagination: false,
            margin: 40,
            autoHeight: false,
            stagePadding: 75,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 600,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 0,
                    margin: 30,
                },
                767: {
                    items: 1,
                    stagePadding: 25,
                },
                1000: {
                    items: 1,
                }
            }
        });
    });
});

// Panel Card Script
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}