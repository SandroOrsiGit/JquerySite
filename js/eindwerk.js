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

	$('nav ul li a').each(function() {
		if (this.href === url) {
			$(this).closest('li').addClass('active');
		}
	});

	$('nav ul li').click(function() {
		$('nav ul li').removeClass('active');
		$(this).addClass('active');
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

	if ($("#multiscroll").length == 0) { $("#multiscroll").multiscroll({}) }

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
	//sandro end

	//Ana start 
	$('.arrow-tabs a').click(function (e) {
		e.preventDefault()
		var selectedTab = $(this).parent();
		var ul = selectedTab.parent();
		ul.find("li").removeClass("ui-tabs-active ui-state-active ui-state-hover").attr("aria-selected", false);
		selectedTab.addClass("ui-tabs-active ui-state-active").attr("aria-selected", true);
		var content = ul.parent().find(".contents .ui-tabs-panel");
		content.hide();
		ul.parent().find($(this).attr("href")).fadeIn(1000);
	})
	$('a i').hover(function () {
		$(this).css('color', '#db0080');
		$(this).stop().animate({ deg: 360 }, {
			duration: 500,
			step: function (now) {
				$(this).css({
					transform: 'rotate(' + now + 'deg)'
				});
			}
		});
	}, function () {
		$(this).css('color', '#2c96b0');
		$(this).stop().animate({ deg: 0 }, {
			duration: 500,
			step: function (now) {
				$(this).css({
					transform: 'rotate(' + now + 'deg)'
				});
			}
		});
	});
	$('#vschool-button').click(function () {
		window.open('https://www.vschool.be', '_blank');
	}).css({
		'background-color': '#23221d',
		'border': 'none',
		'color': '#eddbc7',
		'padding': '15px 32px',
		'text-align': 'center',
		'text-decoration': 'none',
		'display': 'inline-block',
		'font-size': '16px',
		'margin': '4px 2px',
		'border-radius': '5px',
		'cursor': 'pointer'
	}).hover(
		function () {
			$(this).css('color', '#db0080');
			$(this).css('box-shadow', '3px 3px #db0080');
		},
		function () {
			$(this).css('color', '#eddbc7');
			$(this).css('box-shadow', '3px 3px #eddbc7');
		}
	);
	$('#cvo-button').click(function () {
		window.open('https://www.cvodeverdieping.be/opleidingen/full-stack-webdeveloper', '_blank');
	}).css({
		'background-color': '#23221d',
		'border': 'none',
		'color': '#eddbc7',
		'padding': '15px 32px',
		'text-align': 'center',
		'text-decoration': 'none',
		'display': 'inline-block',
		'font-size': '16px',
		'margin': '4px 2px',
		'border-radius': '5px',
		'cursor': 'pointer'
	}).hover(
		function () {
			$(this).css('color', '#db0080');
			$(this).css('box-shadow', '3px 3px #db0080');
		},
		function () {
			$(this).css('color', '#eddbc7');
			$(this).css('box-shadow', '3px 3px #eddbc7');
		}
	);

	//Ana end
});




