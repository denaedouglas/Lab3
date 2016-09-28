function validate(){

	var pass = document.getElementById("id1").value; 
	
	var conf = document.getElementById("id2").value;

	if(pass != conf){
		alert("the passwords entered don't match");
	}
	if(pass.length != 8 || conf.length != 8){
		alert("the passwords are not at least 8 characters long");
	}


} 
