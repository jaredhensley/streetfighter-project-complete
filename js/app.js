//mouse hovers ryu div and ryu takes ready state.

$(document).ready(function() {
	playThemeSong();
	doIntro();
		$(".ryu").mouseenter(function () {
		$(".ryu-ready").hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$(".ryu-ready").show();
	});

	// Mouse leaves Ryu div and ryu rests

	$('.ryu').mouseleave(function () {
		$(".ryu-ready").hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
		$(".ryu-still").show();
	});

	//Mouse down, ryu throws and hadouken appears

	$('.ryu').mousedown(function() {
		playHadouken();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
  			{'left': '1020px'},
  			400,
  			function() {
    	  $(this).hide();
    		$(this).css('left', '520px');
  			});
	});

	//Mouse up, ryu returns to ready state

	$(document).mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
	});

	//hold down key, ryu takes cool state and cool music

	 $(document).on('keydown', function(){
	 		if (event.which == 88) {
	 			$('.ryu-still').hide();
	 			$('.ryu-ready').hide();
	 			$('.ryu-throwing').hide();
	 			$('#theme-song')[0].pause();
	 			$('#cool-song')[0].play();
	 			$('.ryu-cool').show();
	 		}
	 	});

	 //key up, cool music stops and ryu returns to still state

	  $(document).on('keyup', function(){
	 		if (event.which == 88) {
	 			$('.ryu-ready').hide();
	 			$('.ryu-throwing').hide();
	 			$('.ryu-cool').hide();
	 			$('.ryu-still').show();
	 			$('#theme-song')[0].play();
	 			$('#cool-song')[0].pause();
	 		}
	 	});	

}); //end $(document)

// audio functions

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playThemeSong() {
	$('#theme-song')[0].volume = 0.5;
  $('#theme-song')[0].load();
  $('#theme-song')[0].play();
}

function playCoolSong() {
	$('#cool-song')[0].volume = 0.5;
  $('#cool-song')[0].load();
  $('#cool-song')[0].play();
}

// banners fade in/out

function doIntro() {
  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.jquery-logo').fadeIn(1500, function() {
        $(this).fadeOut(1500, function() {
          $('.how-to').fadeIn(1000);
          });
        })
    	})
  	})
}	
