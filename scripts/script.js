// $(document).ready(function () {
//     var $horizontal = $('#horizontal');
//
//     $(window).scroll(function () {
//         var s = $(this).scrollTop(),
//             d = $(document).height(),
//             c = $(this).height();
//
//         scrollPercent = (s / (d + c)*10);
//
//         var position = (scrollPercent * ($(document).width() - $horizontal.width()));
//
//         $horizontal.css({
//             'left': position
//         });
//     });
// });
var window_width = $(window).width();

$(window).scroll(function () {
	var scroll_position = $(window).scrollTop();
	var object_position_left = scroll_position*(scroll_position/window_width);
	$('#horizontal').css({'left':-object_position_left});
});
