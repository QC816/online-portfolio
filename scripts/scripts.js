$(document).ready(function(){
	$(".hamburger").click(function(event){
		event.preventDefault();
		$(".hamburger").toggleClass("is-active");
		$("#navigation").fadeToggle();
		$("body").toggleClass("black_background");
		$("header").toggleClass("black_background");
		$("section").toggleClass("disappear");
		$("main").toggleClass("disappear");
		$("footer").toggleClass("disappear");
		// $(".animation").remove();
	});

	var qclogo = 0;  
	$(".hamburger").click(function(){
	    if(qclogo === 0) {
	      $("#quinnyLogoStatic").attr("src","assets/quinny_c_black.svg");
	      qclogo = 1;
	    }
	    else if(qclogo === 1) {
	      $("#quinnyLogoStatic").attr("src","assets/quinny_c_final.svg");
	      qclogo = 0;
	    }
	});
});


