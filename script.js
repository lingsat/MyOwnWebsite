$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	let main = $("#main"),
		mainH = main.innerHeight(),
		header = $("#header"),
		scrollPos = $(window).scrollTop(),
		burgerMenuBtn = $("#burgerMenuBtn"),
		headerMenu = $("#headerMenu");

	checkScroll(scrollPos, mainH);

	$(window).on("scroll resize", function() {
		mainH = main.innerHeight(),
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, mainH);
	});

	function checkScroll(scrollPos, mainH) {
		if( scrollPos > mainH - 50 ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}; 
	};

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll'),
			elementOffset = $(elementId).offset().top;

			headerMenu.removeClass("show");

			$("html, body").animate({
				scrollTop: elementOffset - 48
			}, 700);
	});

	burgerMenuBtn.on("click", function(event) {
		event.preventDefault();
		headerMenu.toggleClass("show");
	});

});
