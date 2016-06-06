




/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random1 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

/*
1. grab a number between 1 -6
2. display that number
*/


/*
var random1 = Math.ceil(Math.random() * 6);




if (random1 === 1) {

		console.log("It's one");

	} else if (random1 === 2) {

		console.log("It's two");
	} else if (random1 === 3) {

		console.log("It's three");
	} else if (random1 === 4){

		console.log("It's four");
	} else if (random1 === 5){

		console.log("it's five");
	} else {
		console.log("It's six!");
	}

var random2 = Math.ceil(Math.random() * 6);

if (random2 === 1) {

		console.log("It's one");

	} else if (random2 === 2) {

		console.log("It's two");
	} else if (random2 === 3) {

		console.log("It's three");
	} else if (random2 === 4){

		console.log("It's four");
	} else if (random2 === 5){

		console.log("it's five");
	} else {
		console.log("It's six!");
	}
*/







document.getElementById("roll-dice").onclick = function(){


	var random1 = Math.ceil(Math.random() * 6);

	document.getElementById("first-die").className = "dice-" + random1;




/*
	if (random1 === 1) {



		document.getElementById("first-die").className = "dice-1";


		} else if (random1 === 2) {

			document.getElementById("first-die").className = "dice-2";

		} else if (random1 === 3) {

			document.getElementById("first-die").className = "dice-3";

		} else if (random1 === 4){

			document.getElementById("first-die").className = "dice-4";

		} else if (random1 === 5){

			document.getElementById("first-die").className = "dice-5";

		} else {

			document.getElementById("first-die").className = "dice-6";
		}
*/






	var random2 = Math.ceil(Math.random() * 6);

	document.getElementById("second-die").className = "dice-" + random2;

/*
	if (random2 === 1) {

				document.getElementById("second-die").className = "dice-1";

			} else if (random2 === 2) {

				document.getElementById("second-die").className = "dice-2";

			} else if (random2 === 3) {

				document.getElementById("second-die").className = "dice-3";

			} else if (random2 === 4){

				document.getElementById("second-die").className = "dice-4";

			} else if (random2 === 5){

				document.getElementById("second-die").className = "dice-5";

			} else {

				document.getElementById("second-die").className = "dice-6";
			}
*/


	if (random1 === 1) {

			document.getElementById("whole").style.background = "#30466F";


		} else if (random1 === 2) {

			document.getElementById("whole").style.background = "#77BED2";

		} else if (random1 === 3) {

			document.getElementById("whole").style.background = "#FC6D25";

		} else if (random1 === 4){

			document.getElementById("whole").style.background = "#fff";

		} else if (random1 === 5){

			document.getElementById("whole").style.background = "#F2583E";

		} else {

			document.getElementById("whole").style.background = "#eee";
		}




	if (random1 === 1 || random1 === 5 || random1 === 3 || random1 === 2) {

		document.getElementById("title").style.color = "#ffffff";



	} else {
		document.getElementById("title").style.color = "#000";

	}




	if (random2 === 1) {

			document.getElementById("letter").innerHTML = "R";


		} else if (random2 === 2) {

			document.getElementById("letter").innerHTML = "N";

		} else if (random2 === 3) {

			document.getElementById("letter").innerHTML = "M";

		} else if (random2 === 4){

			document.getElementById("letter").innerHTML = "V";

		} else if (random2 === 5){

			document.getElementById("letter").innerHTML = "L";

		} else {

			document.getElementById("letter").innerHTML = " ";
		}



	var total = random1 + random2

	document.getElementById('total').innerHTML = total;

	if (total === 2) {

			document.getElementById("container-2").style.background = "#2B3E42";


		} else if (total === 3) {

			document.getElementById("container-2").style.background = "#747E80";

		} else if (total === 4) {

			document.getElementById("container-2").style.background = "#FC6D25";

		} else if (total === 5){

			document.getElementById("container-2").style.background = "#C7BBC9";

		} else if (total === 6){

			document.getElementById("container-2").style.background = "#D5E1DD";

		} else if (total === 7) {

			document.getElementById("container-2").style.background = "#aaa";
		}  else if (total === 8) {

			document.getElementById("container-2").style.background = "#747E80";

		} else if (total === 9) {

			document.getElementById("container-2").style.background = "#FC6D25";

		} else if (total === 10){

			document.getElementById("container-2").style.background = "#5E3C58";

		} else {

			document.getElementById("container-2").style.background = "#D5E1DD";

		}





	}

/*
var total = random1 + random2

console.log(total;)
*/




