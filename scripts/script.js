
var window_width = $(window).width();

$(window).scroll(function () {
	var scroll_position = $(window).scrollTop();
	var object_position_left = scroll_position*(scroll_position/window_width);
	$('#scroll-horizontal').css({'marginLeft':-object_position_left});
});
