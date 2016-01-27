$(function(){
	$('.panel-title').click(function(){
		$(this).find('.collapsed-indicator').toggleClass('fa-plus');
		$(this).find('.collapsed-indicator').toggleClass('fa-minus');
	});
  $('[data-toggle="tooltip"]').tooltip();
  
  $('.superTrigger, .navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
		var reduceH = $(window).width() == 700?$('.mainmenu').height():0;
        $('html,body').animate({
          scrollTop: target.offset().top - reduceH
        }, 1000);
        return false;
      }
    }
  });
  $(".dropdown").hover(            
	function() {
		$('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
		$(this).toggleClass('open');
		$('b', this).toggleClass("caret caret-up");                
	},
	function() {
		$('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
		$(this).toggleClass('open');
		$('b', this).toggleClass("caret caret-up");                
	});
	
	$('.testiSwapTrigger').click(function(){
		$('.TesCor').hide();
		var rel = $(this).attr('rel');
		$('.'+rel).slideToggle();
	});
	$('.top-navbar li a').click(function(){
		$('.top-navbar li').removeClass('active');
		$(this).parent('li').addClass('active');
	});
});

$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 200,
    minSlides: 5,
    maxSlides: 8,
    slideMargin: 10
  });
  
    $('.slider2').bxSlider({
    minSlides: 1,
    maxSlides: 1,
	moveSlides: 1,
    slideMargin: 10,
	auto: false
  });
 
  $('.sliders2').bxSlider({
    minSlides: 1,
    maxSlides: 1,
	moveSlides: 1,
    slideMargin: 10,
	auto: false
  });
    $('.slider3').bxSlider({
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 10,
	auto: false
  }); 
   $('.slider4').bxSlider({
    slideWidth: 200,
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 5
  });

  $(".how-it-works .btn-7").click(function(){
$(".set-posi2").removeClass("hw-hide");
        $(".set-posi2").addClass("hw-show");
        $(".set-posi1").addClass("hw-hide");
$(".how-it-works .btn-5").removeClass("active-ihwit");
$(".how-it-works .btn-7").addClass("active-fhwit");
   });
  $(".how-it-works .btn-5").click(function(){
$(".set-posi1").removeClass("hw-hide");
        $(".set-posi2").addClass("hw-hide");
        $(".set-posi1").addClass("hw-show");
$(".how-it-works .btn-5").addClass("active-ihwit");
$(".how-it-works .btn-7").removeClass("active-fhwit");
   });
   
$('.closeall').click(function(){
  $('.panel-collapse.in')
    .collapse('hide');
});
$('.openall').click(function(){
  $('.panel-collapse:not(".in")')
    .collapse('show');
});
  
$(".trail-cali .alls").click(function(){
$(this).addClass("la-active");
$(".trail-cali .trails").removeClass("la-active");
$(".trail-cali .clps").removeClass("la-active");
	
$(".trail-cali .innertc .all-tc").removeClass("t-hide");
$(".trail-cali .innertc .all-tc").addClass("t-show");

$(".trail-cali .innertc .trail").addClass("t-hide");
$(".trail-cali .innertc .clipst").addClass("t-hide");
$(".trail-cali .innertc .trail").removeClass("t-show");
$(".trail-cali .innertc .clipst").removeClass("t-show");

   });
	
$(".trail-cali .trails").click(function(){
$(this).addClass("la-active");
$(".trail-cali .alls").removeClass("la-active");
$(".trail-cali .clps").removeClass("la-active");

$(".trail-cali .innertc .trail").removeClass("t-hide");
$(".trail-cali .innertc .trail").addClass("t-show");

$(".trail-cali .innertc .all-tc").addClass("t-hide");
$(".trail-cali .innertc .clipst").addClass("t-hide");
$(".trail-cali .innertc .clipst").removeClass("t-show");
$(".trail-cali .innertc .all-tc").removeClass("t-show");
    });
	
$(".trail-cali .clps").click(function(){
$(this).addClass("la-active");
$(".trail-cali .alls").removeClass("la-active");
$(".trail-cali .trails").removeClass("la-active");

$(".trail-cali .innertc .clipst").removeClass("t-hide");
$(".trail-cali .innertc .clipst").addClass("t-show");

$(".trail-cali .innertc .all-tc").addClass("t-hide");
$(".trail-cali .innertc .all-tc").removeClass("t-show");
$(".trail-cali .innertc .trail").removeClass("t-show");
$(".trail-cali .innertc .trail").addClass("t-hide");


    });  
  
});