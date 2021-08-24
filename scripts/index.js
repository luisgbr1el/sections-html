var sec1 = document.getElementById("sec1");
var sec2 = document.getElementById("sec2");
var sec3 = document.getElementById("sec3");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");


sec2.classList.add("hidden");
sec3.classList.add("hidden");

btn1.classList.add("selected");

function sec1hide() {
	sec1.classList.add("show");
	sec2.classList.add("hidden");
	sec3.classList.add("hidden");
	sec2.classList.remove("show");
	sec3.classList.remove("show");

	btn1.classList.add("selected");
	btn2.classList.remove("selected");
	btn3.classList.remove("selected");
}

function sec2hide() {
	sec2.classList.add("show");
	sec1.classList.add("hidden");
	sec3.classList.add("hidden");
	sec1.classList.remove("show");
	sec3.classList.remove("show");

	btn1.classList.remove("selected");
	btn2.classList.add("selected");
	btn3.classList.remove("selected");
}

function sec3hide() {
	sec3.classList.add("show");
	sec2.classList.add("hidden");
	sec2.classList.remove("show");
	sec1.classList.add("hidden");
	sec1.classList.remove("show");

	btn1.classList.remove("selected");
	btn2.classList.remove("selected");
	btn3.classList.add("selected");
}