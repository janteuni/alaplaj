function changeColor(color) {
	console.log(color);
	var green = [
		"#26a69a",
		"#0097a7",
		"#80cbc4"
	];
	var blue = [
		"#5677fc",
		"#03a9f4",
		"#0097a7"
	];

	if (color == 'green') {
		color = green;
	} else if (color == 'blue') {
		color = blue;
	}
	document.getElementById("w1").setAttribute("fill", color[0]);
	document.getElementById("w2").setAttribute("fill", color[1]);
	document.getElementById("w3").setAttribute("fill", color[2]);
}
