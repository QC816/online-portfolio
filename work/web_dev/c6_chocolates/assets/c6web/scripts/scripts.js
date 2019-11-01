$(document).ready(function(){
	$("nav a").smoothScroll({
		offset: 0,
		speed: 1000
	});

	$("header").vegas({
	    slides: [
	        { src: "assets/header_regular_bonbons.jpg" },
	        { src: "assets/header_orange_meltaway.jpg" },
	        { src: "assets/header_truffle_spoon.jpg" },
	    ]
	});

	$(".signUpButton").click(function(event){
		event.preventDefault();
		$(".signUpForm").fadeIn();
	});

	$(".closeButton").click(function(event){
		event.preventDefault();
		$(".signUpForm").hide();
	});

	$(".ourChocolates").hover(function(){
		$(".quality").fadeIn();
		$(".source").delay(1000).fadeIn();
	});

	$(".magnifyingGlass").click(function(event){
		event.preventDefault();
		$(".searchInput").toggleClass("searchInputSpace");
	});
	
});
