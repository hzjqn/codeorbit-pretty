 
// JQuery

$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();

	$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
});

$(document).ready(function (e){

	$('.tabs li').on('click', function(e){
		if ($(this).hasClass('por')) {
			$('.tabs li.active').toggleClass('active');
			$('.content-wrp .active').toggleClass('active');
			$(this).toggleClass('active');
			$('.content.por').toggleClass('active');
		} else if ($(this).hasClass('exp')){
			$('.tabs li.active').toggleClass('active');
			$('.content-wrp .active').toggleClass('active');
			$(this).toggleClass('active');
			$('.content.exp').toggleClass('active');
		} else if ($(this).hasClass('bio')){
			$('.tabs li.active').toggleClass('active');
			$('.content-wrp .active').toggleClass('active');
			$(this).toggleClass('active');
			$('.content.bio').toggleClass('active');
		}
	})

	$('button.menu-btn').on('click', function(e){
		event.preventDefault();
		$('button.menu-btn').toggleClass('active');
		$('body').toggleClass('sidebar-active');
	})


	$('button.expander-trigger').on('click', function(e){
		event.preventDefault();
		if ($(this).hasClass('shown')) {
			$(this).toggleClass('shown');
			$($(this).data('target')).toggleClass('active');
			$(this).find('.material-icons').html('keyboard_arrow_down');	
		
		} else {
			$(this).toggleClass('shown');
			$($(this).data('target')).toggleClass('active');
			$(this).find('.material-icons').html('keyboard_arrow_up');	
		}
	});
});
