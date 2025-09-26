/*=====================================================
Template Name   : Eduka
Description     : School, College, University And Courses HTML5 Template
Author          : LunarTemp
Version         : 1.0
=======================================================*/


(function ($) {
    
    "use strict";

    // multi level dropdown menu
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass('show');
        });
        return false;
    });


    // data-background    
    $(document).on('ready', function () {
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    });


    // navbar Search
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function () {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function () {
            $('body').removeClass('search-active');
        });
    }


    // wow init
    new WOW().init();


    // hero slider
    $('.hero-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        navText: [
            "<i class='far fa-long-arrow-left'></i>",
            "<i class='far fa-long-arrow-right'></i>"
        ],

        onInitialized: function(event) {
        var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
        doAnimations($firstAnimatingElements);
        },

        onChanged: function(event){
        var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
        doAnimations($firstAnimatingElements);
        }
    });

    //hero slider do animations
    function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationDuration = $this.data('duration');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay,
                'animation-duration': $animationDuration,
                '-webkit-animation-duration': $animationDuration,
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}


    // testimonial-slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
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
    });


    // event-slider
    $('.event-slider').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        dots: true,
        autoplay: false,
        navText: [
            "<i class='far fa-angle-left'></i>",
            "<i class='far fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // department-slider
    $('.department-slider').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        dots: true,
        autoplay: false,
        navText: [
            "<i class='far fa-angle-left'></i>",
            "<i class='far fa-angle-right'></i>"
        ],
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
    });


    // partner-slider
    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        navText: [
            "<i class='far fa-angle-left'></i>",
            "<i class='far fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // preloader
    $(window).on('load', function () {
        $(".preloader").fadeOut("slow");
    });


    // fun fact counter
    $('.counter').countTo();
    $('.counter-box').appear(function () {
        $('.counter').countTo();
    }, {
        accY: -100
    });


    // magnific popup init
    $(".popup-gallery").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    // scroll to top
    $(window).on('scroll',function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").addClass('active');
        } else {
            $("#scroll-top").removeClass('active');
        }
    });

    $("#scroll-top").on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });


    // navbar fixed top
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("fixed-top");
        } else {
            $('.navbar').removeClass("fixed-top");
        }
    });


    // project filter
    $(window).on('load', function () {
        if ($(".filter-box").children().length > 0) {
            $(".filter-box").isotope({
                itemSelector: '.filter-item',
                masonry: {
                    columnWidth: 1
                },
            });

            $('.filter-btn').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $(".filter-box").isotope({ filter: filterValue });
            });

            $(".filter-btn li").each(function () {
                $(this).on("click", function () {
                    $(this).siblings("li.active").removeClass("active");
                    $(this).addClass("active");
                });
            });
        }
    });


    // progress bar
    $(document).ready(function(){
        var progressBar = $('.progress');
        if(progressBar.length) {
        progressBar.each(function () {
            var Self = $(this);
            Self.appear(function () {
            var progressValue = Self.data('value');
            Self.find('.progress-bar').animate({
                width:progressValue+'%'           
            }, 1000);
            });
        })
        }
    });


    // countdown
    if ($('#countdown').length) {
        $('#countdown').countdown('2030/01/30', function (event) {
            $(this).html(event.strftime('' + '<div class="row">' + '<div class="col countdown-single">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Day%!d</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Hours</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minutes</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconds</h5>' + '</div>' + '</div>'));
        });
    }


    // copywrite date
    let date = new Date().getFullYear();
    $("#date").html(date);


})(jQuery);



function changePage(page) {
            const rows = document.querySelectorAll('#staffTable tr[data-index]');
            const totalEntries = rows.length;
            let entriesPerPage = 10; // Default to 10 entries per page

            // Update entries per page based on the selected option
            const entriesSelect = document.getElementById('entriesPerPage');
            entriesPerPage = parseInt(entriesSelect.value);

            let startIndex, endIndex;

            if (page === 1) {
                startIndex = 1;
                endIndex = Math.min(10, totalEntries);
            } else if (page === 2) {
                startIndex = 11;
                endIndex = Math.min(20, totalEntries);
            } else if (page === 3) {
                startIndex = 21;
                endIndex = Math.min(30, totalEntries);
            } else if (page === 4) {
                startIndex = 31;
                endIndex = Math.min(40, totalEntries);
            } else if (page === 5) {
                startIndex = 41;
                endIndex = Math.min(50, totalEntries);
            } else if (page === 6) {
                startIndex = 1;
                endIndex = totalEntries; // Show all 51 entries
            }

            // Hide all rows
            rows.forEach(row => row.classList.add('hidden'));

            // Show rows for the selected page
            rows.forEach(row => {
                const index = parseInt(row.getAttribute('data-index'));
                if (index >= startIndex && index <= endIndex) {
                    row.classList.remove('hidden');
                }
            });

            // Update pagination display
            document.getElementById('startIndex').textContent = startIndex;
            document.getElementById('endIndex').textContent = endIndex;
            document.getElementById('totalEntries').textContent = totalEntries;

            // Update current page styling
            const paginationLinks = document.querySelectorAll('#pagination a');
            paginationLinks.forEach(link => link.classList.remove('current'));
            document.querySelector(`#pagination a[onclick="changePage(${page})"]`).classList.add('current');

            // Disable Previous/Next if at boundaries
            document.querySelector('#pagination a[onclick="changePage(1)"]').style.pointerEvents = page === 1 ? 'none' : 'auto';
            document.querySelector('#pagination a[onclick="changePage(2)"]').style.pointerEvents = page === 6 ? 'none' : 'auto';
        }

        // Initial load
        window.onload = function() {
            changePage(1); // Start with page 1
        };

        // Handle entries per page change
        document.getElementById('entriesPerPage').addEventListener('change', function() {
            changePage(1); // Reset to page 1 on change
        });

        // Handle search functionality
        document.getElementById('searchInput').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const rows = document.querySelectorAll('#staffTable tr[data-index]');
            rows.forEach(row => {
                const name = row.cells[1].textContent.toLowerCase();
                if (name.includes(searchTerm)) {
                    row.classList.remove('hidden');
                } else {
                    row.classList.add('hidden');
                }
            });
            // Update pagination display
            const visibleRows = document.querySelectorAll('#staffTable tr[data-index]:not(.hidden)');
            if (visibleRows.length > 0) {
                document.getElementById('startIndex').textContent = parseInt(visibleRows[0].getAttribute('data-index'));
                document.getElementById('endIndex').textContent = parseInt(visibleRows[visibleRows.length - 1].getAttribute('data-index'));
                document.getElementById('totalEntries').textContent = visibleRows.length;
            } else {
                document.getElementById('startIndex').textContent = '0';
                document.getElementById('endIndex').textContent = '0';
                document.getElementById('totalEntries').textContent = '0';
            }
        });






