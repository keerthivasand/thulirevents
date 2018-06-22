$(document).ready(function(){

  /* parallax background */
  $('#header .item-list').parallax();
  $('#values').parallax();
  
  /*Slick Slider */
  $('.banner-slider').slick({
	dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1
  });

  /* nice scroll */
  $( 'html' ).niceScroll({
    cursorcolor: '#434a54', //change with your own color
    cursorwidth: '10px',
    cursorborder: '1px solid #434a54', //change with your own color
    cursoropacitymax: 0.9,                
    scrollspeed: 120,
    autohidemode: false,
    horizrailenabled: false,
    cursorborderradius: 2,
    zindex: 1060
  });

  /* scrolltop */
  $('.navbar-nav li a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
$(window).scroll(function(){
	if( $(window).scrollTop() > 200 ){
    $('.navbar-fixed-top').addClass('navbar-scroll');	
  }else{
    $('.navbar-fixed-top').removeClass('navbar-scroll')
  } 
});
   
  
  /* scrollspy highlighting active navbar menu */
	$('body').scrollspy({
	    target: '.navbar-fixed-top'
	});
	
	$('.work-container').masonry({
  // options
  itemSelector: '.work-item',
	
});

});