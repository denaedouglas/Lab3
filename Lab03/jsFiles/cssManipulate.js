function changeBackground(){
	var background = document.getElementById("id2").value;
	var body = document.getElementById("body");
	body.style.backgroundColor = background;

}

function changeBorder(){
	var border = document.getElementById("id1").value;
	var body = document.getElementById("body");
	body.style.border = border;
}