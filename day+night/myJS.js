$(document).ready(function() {
	$('#orb').click(function() {
		if($('#sky').hasClass('day')) {
			$('#sky').removeClass('day').addClass('night');
		}
		else {
			$('#sky').removeClass('night').addClass('day');
		}

		if($(this).hasClass('sun')) {
			$(this).removeClass('sun').addClass('moon');
		}
		else {
			$(this).removeClass('moon').addClass('sun');
		}
		//Moonspot One
		if ($('#moonspot1').hasClass('visible')) {
			$('#moonspot1').removeClass('visible');
		} else {
			$('#moonspot1').addClass('visible');
		}
		//Moonspot Two
		if ($('#moonspot2').hasClass('visible')) {
			$('#moonspot2').removeClass('visible');
		} else {
			$('#moonspot2').addClass('visible');
		}
		//Moonspot Three
		if ($('#moonspot3').hasClass('visible')) {
			$('#moonspot3').removeClass('visible');
		} else {
			$('#moonspot3').addClass('visible');
		}
	});
});