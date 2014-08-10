	var i;
	console.log('toto');
	i = 1;
	while (i < 100) {
		$(".tv").prepend('<div class="pix' + i + '"></div>');
		i++;
	}
