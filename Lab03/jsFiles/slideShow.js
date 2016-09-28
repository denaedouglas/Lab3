var index = 1;
var Images = [
	"pic1.jpg",
	"pic2.jpg",
	"pic3.jpg",
	"pic4.jpg",
	"pic5.jpg"
];


function next(){
	if(index == 4){
		document.getElementById("show").src = Images[index];
		index = 0;
	}
	else{
		document.getElementById("show").src = Images[index];
		index++;
	}
}


function previous(){
	if(index == 0){
		index = 4;
		document.getElementById("show").src = Images[index];
	}
	else{
		index--;
		document.getElementById("show").src = Images[index];
	}
}