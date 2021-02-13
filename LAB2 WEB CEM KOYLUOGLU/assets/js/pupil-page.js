var urlParams = new URLSearchParams(window.location.search);

var id = urlParams.get("id");
var birthday = urlParams.get("birthday");

document.getElementById("pupil-image").src = "assets/images/pupil" + id + ".png";
document.getElementById("pupil-image").setAttribute("title", birthday);

document.getElementById("pupil-image").addEventListener("mouseover", function() {
	console.log(birthday);
	document.getElementById("pupil-birthday").innerHTML = birthday;
});

document.getElementById("pupil-image").addEventListener("mouseout", function() {
	document.getElementById("pupil-birthday").innerHTML = "";
});