
$(function(){
	$("head")
	.append('<meta charset="utf-8"/>')
	.append('<title>school</title>')
	.append('<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">')
	.append('<link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon.png">');
	$("body")
	.append('<script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>')
	.append('<script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>')
	.append('<script src="assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js"></script>')
	.append('<script src="assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>')
	.append('<script src="assets/vendor/chartist/js/chartist.min.js"></script>')
	.append('<script src="assets/scripts/klorofil-common.js"></script>');
	
	$("#head").load("head.html"); 
	$("#left").load("left.html");
});
