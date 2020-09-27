$(function() {
    var slider = $('.slider'),
    sliderContent = slider.html(),
    slideWidth = $('.sl_ctr').outerWidth(),
    slideCount = $('.slider img').length,
    prev_b = $('.prev_b'),
    next_b = $('.next_b'),
    sliderInterval = 3300,
    animateTime = 1000,
    course = 1,
    margin = -slideWidth;

    $('.slider img: last').clone().prependTo('.slider');$('.slider img').eq(1).clone().appendTo('.slider');
    $('.slider').css('margin-left', -slideWidth);

    function next_bSlide() {
	    interval = window.setInterval(animate, sliderInterval)
    }

    function animate() {
	    if (margin == -slideCount * slideWidth - slideWidth) {
		    slider.css({'marginLeft': -slideWidth});
		    margin = -slideWidth * 2
	    } else if (margin == 0 && course == -1) {
		    slider.css({'marginLeft': -slideWidth * slideCount});
		    margin = -slideWidth * slideCount + slideWidth
		} else {
			margin = margin - slideWidth * (course)
		}

		slider.animate({'marginLeft': margin}, animateTime)
	}

	function sliderStop() {
		window.clearInterval(interval)
	}

	prev_b.click(function() {
	    if (slider.is(':animated')) {
		    return false
	    }

        var course2=course;
        course = -1;
        animate();
        course = course2
    });

    next_b.click(function() {
	    if (slider.is(':animated')) {
	    	return false
	    }

	    var course2 = course;
	    course = 1;
	    animate();
	    course = course2
    });

    slider.add(next_b).add(prev_b).hover(
        function() {
	        sliderStop()
        },

        next_bSlide
    );

    next_bSlide()
});