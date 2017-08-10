$(document).ready(function() {

	// Global Variables
	//-------------------------------------------------------------

	// Sets up crystals as variables
	var blue, green, pink, orange; 

	// Game counter.
  	var userTotal= 0; 
  	var wins= 0;
  	var losses = 0;

  	// Appending wins and losses to html.
  	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);
 	

	// Functions
	//--------------------------------------------------------------

 	// Sets up random numbers between 1 and 12 for each crystal. 
 	function pickNumber(){
 		blue = Math.floor(Math.random()* 12 + 1)
  		green = Math.floor(Math.random()* 12 + 1)
  		pink = Math.floor(Math.random()* 12 + 1)
  		orange = Math.floor(Math.random()* 12 + 1)
  	}


	// Reset the game.
	function reset(){
		// Sets target number and appends to html.
     	Target = Math.floor(Math.random()* 101 + 19);
      	$('#target').text(Target);

      	// Sets crystal values.
     	pickNumber();

     	// Sets 'Your total Score' to 0.
     	userTotal = 0;
      	$('#userTotal').text(userTotal);

      	// testing
      	console.log(Target)
    } 

    // Appends userTotal to html and sets win/lose conditions.
    function addTotal(){
		$('#userTotal').text(userTotal); 
			if (userTotal === Target){
				winner();
			}
			else if (userTotal > Target){
				loser();
			}

		//testing
		console.log("New userTotal= " + userTotal);
	}

    // Adds to Scoreboard if player wins.
	function winner(){
		$('#status').text('You won!');
  		wins++; 
  		$('#numberWins').text(wins);
  		$('.col-md-4').removeClass("brightRed").addClass("brightBlue");

  		// Resets the target number and user total after a player wins.
  		reset();
	}

	// Adds to Scoreboard if player loses.
	function loser(){
		$('#status').text('You lost!');
		losses++;
		$('#numberLosses').text(losses);
		$('.col-md-4').addClass("brightRed");

		// Resets the target number and user total after a player loses.
		reset();
	}


	//Main Process - call on functions
	//-----------------------------------------------------------

	// Sets up click events for crystals
	$('#blue').on ("click", function(){
		userTotal = userTotal + blue;

		addTotal()
	})

	$('#green').on ("click", function(){
		userTotal = userTotal + green;

		addTotal()
	})

	$('#pink').on ("click", function(){
		userTotal = userTotal + pink;

		addTotal()
	})

	$('#orange').on ("click", function(){
		userTotal = userTotal + orange;

		addTotal()
	})

	reset();
});