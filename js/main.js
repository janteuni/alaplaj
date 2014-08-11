function changeColor(color) {
	console.log(color);
	var green = [
		"#26a69a",
		"#42bd41",
		"#0097a7"
	];
	var blue = [
		"#5677fc",
		"#03a9f4",
		"#0097a7"
	];
	
	var red = [
		"#5e35b1",
		"#7986cb",
		"#ad1457"
	];

	var violet = [
		"#B50100",
		"#0451DE",
		"#B50100"
	];
	if (color == 'green') {
		color = green;
	} else if (color == 'blue') {
		color = blue;
	} else if (color == 'red') {
		color = red;
	} else {
		color = violet;
	}
	document.getElementById("w1").setAttribute("fill", color[0]);
	document.getElementById("w2").setAttribute("fill", color[1]);
	document.getElementById("w3").setAttribute("fill", color[2]);
}
