const BIRTHDAYS = [
	"21.01.1986",
	"02.05.1995",
	"03.04.2000",
	"01.11.1999",
	"31.12.1960",
	"10.08.1998",
];

document.getElementById("students").addEventListener("change", function() {
	
	var item = document.getElementById("students");
	location.href = "pupil.html?id=" + item.value + "&birthday=" + BIRTHDAYS[item.value*1 - 1];
	
});