
function register(){
	var data = new Object();

	data.cart = [];
	data.name = document.getElementById("UserName").value;
	data.password = document.getElementById("UserPass").value;
	console.log(data);
	var Userdata = JSON.stringify(data);
	create("/users/",Userdata,);

	
}