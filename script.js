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
		scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, mainH);

	$(window).on("scroll resize", function() {
		mainH = main.innerHeight(),
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, mainH);
	});

	function checkScroll(scrollPos, mainH) {
		if( scrollPos > mainH - 100 ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}; 
	};

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll'),
			elementOffset = $(elementId).offset().top;

			$("html, body").animate({
				scrollTop: elementOffset - 90
			}, 700);
	});

});
