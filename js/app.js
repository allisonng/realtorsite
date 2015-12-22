$(document).ready(function() {
// jQuery.fn.extend({
    // zigzag: function () {
        // var text = $(this).text();
        // var zigzagText = '';
        // var toggle = true; //lower/uppper toggle
			// $.each(text, function(i, nome) {
				// zigzagText += (toggle) ? nome.toUpperCase() : nome.toLowerCase();
				// toggle = (toggle) ? false : true;
			// });
	// return zigzagText;
    // }
// });
	jQuery.fn.extend({
		scrollToBottom: function() {
		    $('html, body').animate({
       			 scrollTop: $(this).offset().top
   			 }, 2000);
		},
		scrollToTop: function() {
			$('html, body').animate({
				scrollTop: $('#main-menu').offset().top
			}, 1000);
		}
	});
	
	$('.button-scrollToTop').click(function() {
		$(this).scrollToTop();
	});

	$('#button-aboutus').click(function(){
		$('.main-section').hide();
		$('#about-us').fadeIn('slow').scrollToBottom();
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
