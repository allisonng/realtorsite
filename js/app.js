$(document).ready(function() {

	jQuery.fn.extend({
		scrollToBottom: function() {
			console.log('meow', this);
			var $that = $(this);
		    $('html, body').animate({
       			 scrollTop: $that.offset().top     // this goes from very top to 'this' element
		       // $(window).scrollTop() + 100px     // this goes from CURRENT vertical position in screen to 100px foward
       			 // scrollTop: $(window).scrollTop() + ($that.offset().top - $(window).scrollTop())	// this should go from CURR part of page to 'this' element'
   			 }, 1500);
		       console.log('thatoffset', $that.offset().top);
		       console.log('thisoffset', $('html, body').offset().top);
		       console.log('$(window).scrollTop()', $(window).scrollTop());
		},
		scroll: function() {
			$('html, body').animate({
				scrollTop: $('#mini-nav').offset().top
			});
		},
		scrollToTop: function() {
			$('html, body').animate({
				scrollTop: $('#main-menu').offset().top
			}, 1500);
		},
		emailViaContactForm: function() {
			$('html, body').animate({
				scrollTop: $('#contactus-form').offset().top
			}, 1000);
		}
	});

	$('.button-scrollToTop').click(function() {
		$(this).scrollToTop();
	});

	$('#contactus-email').click(function() {
		$(this).emailViaContactForm();
	});

	$('#button-aboutus').click(function(){	// button says "Meet Us!"
		$('.main-section').hide();
		// $('#about-us').hide();
		// $('#about-us #about-us-testimonials').hide();
		// $('#about-us #about-us-info').hide();
		// $('#about-us #mini-nav').show().scrollToBottom();
		// $('#about-us').show().$('#mini-nav').fadeIn('slow').scrollToBottom();
		$('#about-us').toggle(function() {
			$('#mini-nav').fadeIn('slow');
		}).scrollToBottom();
	});

	$('#button-aboutusinfo').click(function(){
		$('#about-us-testimonials').hide();
		$('#about-us-info').toggle('fast').scrollToBottom();
	});

	$('#button-aboutustestimonials').click(function(){
		$('#about-us-info').hide();
		$('#about-us-testimonials').toggle('fast', function() {
			$('#testimonials-slider').slick('setPosition');
		}).scrollToBottom();

	});


	$('#testimonials-slider').slick({
			dots: true,	// caused weird scrollbar issue!!! >:c
	      	autoplay: false,
	      	pauseOnHover: true,
	      	pauseOnDotsHover: true,
	      	adaptiveHeight: true,
	      	respondTo: 'min',
	      	arrows: true	// causing width scrollbar issue
	});

	$('#button-contactus').click(function(){
		$('.main-section').hide();
		$('#contact-us').show('fast').scrollToBottom();
	});

	$('#button-newsletter').click(function(){
		$('.main-section').hide();
		$('#newsletter').show('fast').scrollToBottom();
	});

	$('#button-openhouses').click(function(){
		$('.main-section').hide();
		$('#open-houses').show('fast').scrollToBottom();
	});


});
