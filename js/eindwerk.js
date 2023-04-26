// Ece start
let scrollPosition = window.pageYOffset;
window.onscroll = function () {
	let currentScrollPos = window.pageYOffset;
	if (scrollPosition > currentScrollPos) {
		document.querySelector(".site-header").classList.add("visible");
	} else {
		document.querySelector(".site-header").classList.remove("visible");
	}
	scrollPosition = currentScrollPos;
};

// $(window).on("scroll", function () {
// 	let scrollPosition = $(window).scrollTop();
// 	let currentScrollPos = $(this).scrollTop();
// 	if (scrollPosition > currentScrollPos) {
// 	  $(".site-header").addClass("visible");
// 	} else {
// 	  $(".site-header").removeClass("visible");
// 	}
// 	scrollPosition = currentScrollPos;
//   }); 

// Ece end

$(document).ready(function () {
	//sandro start
	$("#multiscroll").multiscroll();
	//sandro end
});
