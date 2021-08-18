$(function(){
	activeButton(".portfolio button:first-of-type");
	$(".portfolio button").click(function(event) {
		/* Act on the event */

		var data = $(this).attr("data");
		activeButton(this);
		if (data == undefined) {
			//show het
			$(".portfolio .row > div").show("slow");
		}
		else {
		
			$(".portfolio [data=" + data + "]").show("slow");
			// $(".portfolio .row > div").not("[data=" + data + "]").hide();
			$(".portfolio .row > div:not([data=" + data + "])").hide("slow");
			// var length = $(".portfolio .row > div").length;
			// alert(length);
		}
	});

	$(window).scroll(function(event) {
		/* Act on the event */
		if ($(this).scrollTop()) {// > 1: true
			//se hien ra nut back to top
			$(".back-to-top").show("slow");
		}
		else {
			//tat no di
			$(".back-to-top").hide("slow");
		}

		if ($(this).scrollTop() >= $("#portfolio").offset().top) {
			//them fixed
			$("header nav").addClass('navbar-fixed-top');
			$("body").addClass('fixed-top');
		}
		else {
			//remove fixed
			$("header nav").removeClass('navbar-fixed-top');
			$("body").removeClass('fixed-top');
		}
	});

	$(".back-to-top").click(function(event) {
		//code here
		$("html").animate(
		{
			scrollTop: 0
		},
		2000
		);

	});

	//Click trên menu, sẽ target đến id tương ứng
	$('header nav ul li a').on('click',function (e) {
	    e.preventDefault();//ngăn chạn chạy đến vùng có id
	    var target = this.hash;//#portfolio
	    if (target) {
		    $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 500, 'swing', function () {
		        window.location.hash = target;
		    });
	    }
	});

});

function activeButton(selector) {
	$(".portfolio button").removeAttr('style');
	$(selector).css("background-color", "yellow");
}