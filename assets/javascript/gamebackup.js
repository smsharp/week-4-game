$(document).ready(function() {

	// Selects a random number between 19 and 120 to be shown at the start of the game.
	var Random = Math.floor(Math.random()*101+19)
	
  	// Appending random number to the randomNumber id in the html doc.
 	$('#randomNumber').text(Random);

 	// Setting up random numbers between 1 and 12 for each jewel.
 	var num1 = Math.floor(Math.random()*11+1)
  	var num2 = Math.floor(Math.random()*11+1)
  	var num3 = Math.floor(Math.random()*11+1)
  	var num4 = Math.floor(Math.random()*11+1)

  	// Setting up variables for each scorecard attribute.
  	var userTotal= 0; 
  	var wins= 0;
  	var losses = 0;

  	// Appending totals to total ids in html doc.
  	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);

	// Reset the game.
	function reset(){
     	Random = Math.floor(Math.random()*101+19);
      	console.log(Random)
      	$('#randomNumber').text(Random);
     	num1 = Math.floor(Math.random()*11+1);
      	num2 = Math.floor(Math.random()*11+1);
      	num3 = Math.floor(Math.random()*11+1);
      	num4 = Math.floor(Math.random()*11+1);
     	userTotal = 0;
      	$('#finalTotal').text(userTotal);
    } 

    // Alerts player when they win and adds win to total.
	function winner(){
		$('#status').text('You won!!!!');
  		wins++; 
  		$('#numberWins').text(wins);
  		reset();
	}

	// Alerts player when they lose and adds loss to total.
	function loser(){
		$('#status').text('You lost!');
		losses++;
		$('#numberLosses').text(losses);
		reset();
	}

	// Sets up click for jewels
	$('#one').on ('click', function(){
		userTotal = userTotal + num1;
		console.log("New userTotal= " + userTotal);
		$('#finalTotal').text(userTotal); 
		//sets win/lose conditions
			if (userTotal === Random){
				winner();
			}
			else if (userTotal > Random){
				loser();
			}
	})

	$('#two').on ('click', function(){
		userTotal = userTotal + num2;
		console.log("New userTotal= " + userTotal);
		$('#finalTotal').text(userTotal); 
		//sets win/lose conditions
			if (userTotal === Random){
				winner();
			}
			else if (userTotal > Random){
				loser();
			}
	})

	$('#three').on ('click', function(){
		userTotal = userTotal + num3;
		console.log("New userTotal= " + userTotal);
		$('#finalTotal').text(userTotal); 
		//sets win/lose conditions
			if (userTotal === Random){
				winner();
			}
			else if (userTotal > Random){
				loser();
			}
	})

	$('#four').on ('click', function(){
		userTotal = userTotal + num4;
		console.log("New userTotal= " + userTotal);
		$('#finalTotal').text(userTotal); 
		//sets win/lose conditions
			if (userTotal === Random){
				winner();
			}
			else if (userTotal > Random){
				loser();
			}
	})
});