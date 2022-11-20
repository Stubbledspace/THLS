(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    const datetimeSlotPicker = document.querySelector('datetime-slot-picker');
     
     /* LISTENER FOR DATE AND TIME SLOT CHANGES */
     datetimeSlotPicker.addEventListener('slotUpdate', function(event){ console.log('Updated Slot: ', event.detail) });
      
     /* INITIALIZING THE AVAILABLE SLOTS. TIME SLOTS IS OPTIONAL */
     datetimeSlotPicker.slots = [
       {
         "date": 'Sun, 20 Nov 2022',
         "timeSlots": [
           '6 AM - 7 AM',
           '7 AM - 8 AM',
           '8 AM - 9 AM',
           '9 AM - 10 AM',
           '10 AM - 11 AM',
           '11 AM - 12 PM',
           '12 PM - 1 PM',
           '1 PM - 2 PM',
           '2 PM - 3 PM',
           '3 PM - 4 PM',
           '4 PM - 5 PM',
           '5 PM - 6 PM',
           '6 PM - 7 PM',
           '7 PM - 8 PM',
           '8 PM - 9 PM',
           '9 PM - 10 PM',  
           '10 PM - 11 PM',
           '11 PM - 12 AM'     
          ]
       },
     ];
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });
    
})(jQuery);

