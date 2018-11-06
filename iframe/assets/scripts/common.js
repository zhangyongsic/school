$(function(){
	$("body")
	.append('<script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>')
	.append('<script src="assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js"></script>')
	.append('<script src="assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>')
	.append('<script src="assets/vendor/chartist/js/chartist.min.js"></script>')
	.append('<script src="assets/vendor/vue/vue.min.js"></script>')
	.append('<script src="assets/vendor/toastr/toastr.min.js"></script>')
	.append('<script src="assets/vendor/vue/router.js"></script>')
	.append('<script src="assets/scripts/klorofil-common.js"></script>');
});

var baseURL = "";

var httpUrl = "http://127.0.0.1:8080/school/"


/*//登录token
var token = localStorage.getItem("token");
if(token == 'null'){
    parent.location.href = baseURL + 'login.html';
}

//jquery全局配置
$.ajaxSetup({
	dataType: "json",
	cache: false,
    headers: {
        "token": token
    },
    complete: function(xhr) {
        //token过期，则跳转到登录页面
        console.log("111111111111"+xhr.responseJSON)
        if(xhr.responseJSON.code == 401){
            parent.location.href = baseURL + 'login.html';
        }
    }
});*/
