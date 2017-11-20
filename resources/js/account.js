
var NameValidate = function( user ){
	if(user.length == 0){
		document.getElementById('ErrorName').style.display = "none";
		document.getElementById('SuccessName').style.display = 'inline-block';
		document.getElementById('Register').disabled = false;
	}
	else{
		var UserName = getCookie("ValidateUser");
		for(var i in user){
			if(user[i].name == UserName || UserName ==''){
				document.getElementById('SuccessName').style.display = "none";
				document.getElementById('ErrorName').style.display = 'inline-block';
				document.getElementById('UserName').focus();
				document.getElementById('Register').disabled = true;
			}
			else{
				if(i == user.length -1){
					document.getElementById('ErrorName').style.display = "none";
					document.getElementById('SuccessName').style.display = 'inline-block';
					document.getElementById('Register').disabled = false;
				}
			}
		}
		
	}
}
function validateName(){
	debugger;
	var name = document.getElementById('UserName').value;
	read("/users?name_like="+name,NameValidate);
	setCookie("ValidateUser",name,1);
}

function validatePassword(){
	if(document.getElementById('UserPass').value.length >= 8){
		document.getElementById('ErrorPass').style.display = "none";
		document.getElementById('SuccessPass').style.display = 'inline-block';
		return true;
	}
	else{
		document.getElementById('ErrorPass').style.display ='inline-block';
		document.getElementById('ErrorPass').innerText= 'La passwword debe contener al menos 8 digitos';
		document.getElementById('SuccessPass').style.display =  "none";
		return false;
	}
}
function validateRePassword(){
	var pass = document.getElementById("UserPass").value;
	var rePass = document.getElementById("UserRePass").value;
	if(pass === rePass && pass.length >= 8 && rePass >= 8){
		document.getElementById('ErrorRePass').style.display = "none";
		document.getElementById('SuccessRePass').style.display = 'inline-block';
		return true;
	}
	else{
		if( !(pass.length >= 8 && rePass >= 8)){

			document.getElementById('ErrorRePass').innerText = 'Las contraseñas deben contener al menos 8 digitos';
		}
		else{
			document.getElementById('ErrorRePass').innerText = 'Las contraseñas no coinciden';
		
		}
		document.getElementById('ErrorRePass').style.display ='inline-block';
		document.getElementById('SuccessRePass').style.display =  "none";
		return false;
		
	}
}

	

function register(){
	if(validatePassword() && validateRePassword()){
		var data = new Object();
		data.cart = [];
		data.name = document.getElementById("UserName").value;
		data.password = document.getElementById("UserPass").value;
		console.log(data);
		var Userdata = JSON.stringify(data);
		create("/users/",Userdata);
		swal({
			title: "Exito",
			text: "El usuario se creo con éxito!",
			icon: "success",
		});
		switchContent('templates/deals/dealList.html');
		
	}
	else{
		swal({
			title: "Error",
			text: "Verifique los campos",
			icon: "error",
		  });
	}
}



var loginUser = function(users){
	var user = getCookie('UserName');
	var pass = getCookie('UserPass');
	deleteCookie('UserName');
	deleteCookie('UserPass');
	if(users.length != 0){
		for(var i in users){
			if(users[i].name == user){
				if(users[i].password == pass){
					setCookie('isLogged','true',1);
					loadUserData(users[i]);
					switchContent('templates/deals/dealList.html');
					loadNavbar(true);
					break;
					
				}
				else{
					swal({
						title: "Error",
						text: "Contraseña Incorrecta",
						icon: "error",
					});
					break;
				}
				
			}
			if(users.length-1 == i){
				swal({
					title: "Error",
					text: "No existe el Usuario con el nombre especificado",
					icon: "error",
				});
				break;
			}
		}
	}else{
		swal({
			title: "Error",
			text: "No existe el Usuario con el nombre especificado",
			icon: "error",
		});
	}
}

function login(){
	var user = document.getElementById('UserName').value;
	var pass = document.getElementById('UserPass').value;
	setCookie("UserName",user,1);
	setCookie("UserPass",pass,1);
	read("/users?name_like="+user,loginUser);
	var loged = getCookie('isLogged');
	loadNavbar(loged);
}
function loadUserData(user){
	setCookie("UserData",user.id,1);
	document.getElementById("cart").innerText = '   '+user.cart.length;
}

function logout(){
	deleteCookie('isLogged');
	deleteCookie('UserData');
	location.reload();
}