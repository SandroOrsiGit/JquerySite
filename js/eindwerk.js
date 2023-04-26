$(document).ready(function () {
	// Ece start
	$(".site-header").shyheader({
		classname: "is-watching",
	});
	// Ece end

	//sandro start
	let buttonWidthArray = [];
	let buttonHeightArray = [];
	$indexButtons = $(".home-button");

	$indexButtons.each(function () {
		buttonWidthArray.push($(this).outerWidth());
		buttonHeightArray.push($(this).outerHeight());
	});

	$("#multiscroll").multiscroll({});

	$indexButtons.on("click", function () {
		let index = $indexButtons.index(this);
		switch (index) {
			case 0:
				window.location.href = "";
				break;
			case 1:
				window.location.href = "curriculum.html";
				break;
		}
	});

	$indexButtons.hover(
		function () {
			let index = $indexButtons.index(this);
			$(this)
				.stop()
				.animate({
					height: buttonHeightArray[index] + 20,
					width: buttonWidthArray[index] + 20,
				});
		},
		function () {
			let index = $indexButtons.index(this);
			$(this).stop().animate({
				height: buttonHeightArray[index],
				width: buttonWidthArray[index],
			});
		}
	);
});

//sandro end
