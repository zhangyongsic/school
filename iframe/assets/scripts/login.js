

var vm = new Vue({
	el:'#wrapper',
	data:{
		user:{
			username: '',
			password: ''
		},
		errorMsg:''
		
	},
	methods: {
		login: function () {
			    	
			$.ajax({
				type: "post",
			    url: httpUrl + "sys/login",
			    data: JSON.stringify(vm.user),
			    contentType: "application/json",
			    success: function(r){
					if(r.code == 0){//登录成功
                        localStorage.setItem("token", r.token);
                        parent.location.href =baseURL+'index.html';
					}else{
						vm.errorMsg = r.msg;
					}
				}
			});
			    
		}
	},
	created: function(){

	},
    updated: function(){

    }
});

