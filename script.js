var Pokemon = (function(){
	var choseHomePlayer = function() {
		var choice = $('.choice');
		choice.on('click', function() {
			var homePokeIsChosen = $('#home').has('.choice').length > 0;
			if(homePokeIsChosen) {
				var awayPokeIsChosen = $('#away').has('.choice').length === 1;
				if(awayPokeIsChosen) {
					$.growlUI('Growl Notification', 'Have a nice day!'); 
					return;
				}
				$(this).prependTo('#away').animate({top: 900, left: 200},300);
				return;
			}

            //test change
			$(this).prependTo('#home');
		});
	}
	
	return {
		choseHomePlayer: choseHomePlayer
	}
})();