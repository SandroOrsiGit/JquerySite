$(document).ready(function () {
	//sandro start
	setTimeout(() => {
		$("#loading p").removeClass("hidden");
	}, 100);
	setTimeout(() => {
		$("#loading").hide();
	}, 800);
	//sandro end
	// Ece start

	// SHY HEADER PLUGIN
	$(".site-header").shyheader({
		classname: "is-watching",
	});
	// FOR ACTIVE CLASS
	let url = window.location.href;

	$("nav ul li a").each(function () {
		if (this.href === url) {
			$(this).closest("li").addClass("active");
		}
	});

	$("nav ul li").click(function () {
		$("nav ul li").removeClass("active");
		$(this).addClass("active");
	});
	// Ece end

	//sandro start
	let pathlength = $(location).attr("href").length;
	if (
		$(location)
			.attr("href")
			.substring(pathlength - 10, pathlength) == "index.html"
	) {
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
	}

	//sandro end
});
