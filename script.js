var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("body");
var h2=document.querySelector("h2");

function setGradient(){
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
	//var answer=document.createTextNode(body.style.background.value);
	h2.innerHTML="background:"+body.style.background+";";
	
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

