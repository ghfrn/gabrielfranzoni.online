if($.cookie("colour-choice")) {
	$("link.colour-switcher").attr("href",$.cookie("colour-choice"));
}
$(document).ready(function() {
	$("a.switch").click(function() {
		$("link.colour-switcher").attr("href",$(this).attr('rel'));
		$.cookie("colour-choice",$(this).attr('rel'), {expires: 365, path: '/'});
		return false;
	});
});