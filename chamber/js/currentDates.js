//declare variables and get date information
const d = new Date();
const year = d.getFullYear();

// using getElementById
document.querySelector("#currentyear").textContent = year;
document.getElementById("lastupdated").textContent = `Last Updated: ${document.lastModified}`;

// element to output to
const datefieldUK = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"}).format(now);
// long, medium, short options ... try them

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
console.log(d.getDay());
if(d.getDay() === 2 || d.getDay() === 1) {
	const banner = document.querySelector("#banner");
	banner.style.display = "block";
}









/*
// JavaScript to place last update information in the footer
document.getElementById('updated').innerHTML = document.lastModified;

// JavaScript to maintain the current year information of copyright in footer
var currentYear = new Date();
document.getElementById('currentYear').innerHTML = currentYear.getFullYear();
*/