$(document).ready(function(){
	//Ryu is in still position and at hover it will get on ready position
	$('.ryu').mouseenter(function(){
		//alert('mouse entered .ryu div')
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		//alert('mouse left');
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	//Ryu will be in still position and at click it will get on throwing position and display the hadouken
	.mousedown(function(){
		console.log('mousedown');
		// play hadouken sound
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		// show hadouken and animate it to the right of the screen
		$('.hadouken').finish().show().animate(
				{'left': '1020px'},
				500,
				function(){
					$(this).hide();
					$(this).css('left', '520px');
				}
			);
	})
	.mouseup(function(){
		console.log('mouseup');
		// ryu goes back to his ready position
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//$('.hadouken').hide();
	});
/*
	$(".ryu-ready").keydown(function(){
		// Create a new jQuery.Event object with specified event properties.
		var e = jQuery.Event( "keydown", { keyCode: 88 } );
 
		// trigger an artificial keydown event with keyCode 88
		jQuery( "body" ).trigger( e );
	});
*/

	$('body').on('keydown', function(e){
		if(e.which == 88){
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})
	.on('keyup', function(e){
		if(e.which == 88){
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});

});

function playHadouken() {
	//This function plays the sound of hadouken
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}