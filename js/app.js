$(document).ready(function() {

	jQuery.fn.extend({
		scrollToBottom: function() {
		    $('html, body').animate({
       			 // scrollTop: $(this).offset().top     // this goes from very top to 'this' element
       			 scrollTop: $(window).scrollTop() + ($(this).offset().top - $(window).scrollTop())	// this should go from CURR part of page to 'this' element'
   			 }, 1500);
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

	$('#button-aboutus').click(function(){
		$('.main-section').hide();
		$('#about-us #about-us-testimonials').hide();
		$('#about-us #about-us-info').hide();
		// $('#about-us #mini-nav').fadeIn('slow').scrollToBottom();
		// $('#about-us').show().$('#mini-nav').fadeIn('slow').scrollToBottom();
		$('#about-us').show(function() {
			$('#mini-nav').fadeIn('slow');
			$('#mini-nav').scrollToBottom();
		});
	});

	$('#button-aboutusinfo').click(function(){
		$('#about-us-testimonials').hide();
		$('#about-us-info').toggle('fast').scrollToBottom();
	});

	$('#button-aboutustestimonials').click(function(){
		$('#about-us-info').hide();
		$('#about-us-testimonials').toggle('fast', function() {
			$('#testimonials-slider').slick('setPosition');
			$(this).scrollToBottom();
		});

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
		$('#contact-us').fadeIn('slow').scrollToBottom();
	});

	$('#button-newsletter').click(function(){
		$('.main-section').hide();
		$('#newsletter').fadeIn('slow').scrollToBottom();
	});

	$('#button-openhouses').click(function(){
		$('.main-section').hide();
		$('#open-houses').fadeIn('slow').scrollToBottom();
	});


});
