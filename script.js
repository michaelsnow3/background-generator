var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("#random");

function changeBackground(){
	//webpage background
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
	//button background
	button.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
	//display rgb values
	css.textContent = body.style.background + ";";
}


//random color generator function
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomBackground(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	changeBackground();
}


color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

button.addEventListener("click", randomBackground);

changeBackground();

