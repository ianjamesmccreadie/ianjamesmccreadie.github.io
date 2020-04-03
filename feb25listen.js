console.log("Feb 25 Warmup")

//BING IDEA: LISTS - LINKS TO OTHER LANGUAGES
var countries = ["Canada","India","China","Bahamas","Syria","Madagascar","Sierra Leone","Zimbabwe","Suriname","Nigeria","Swaziland","Burundi","Tanzania","Guinea-Bissau","Liberia"]
var population = [9.4, 29.8, 6.1,9.3,82.5,75.3,70,70.2,69,70,69,68,67.9,67]

//BIG IDEA: USING DOM TO ACCESS ELEMENTS
document.getElementById("clickMe").onclick = clicked;
document.getElementById("atag").onclick = afnc;


//BIG IDEA: FUNCTIONS - LINKS TO OTHER LANGUAGES
function clicked() {
	

	//BIG IDEA VARIABLES - LINKS TO OTHER LANGUAGES
	var value = document.getElementById("fname").value
	
	//BIG IDEA LOOPS - LINKS TO OTHER LANGUAGES
	for (i = 0; i < countries.length; i = i + 1) {

		//BIG IDEA CONDITIONAL STATEMENTS - LINKS TO OTHER LANGUAGES
		if (value === countries[i]) {
			//print out the population
			console.log(value+" has a population of "+population[i]);
			document.getElementById("results").innerHTML = "In " + value + population[i] + " percent of the population lives below the poverty line";
		}
	}



}

function afnc() {
	console.log("Clicked A");
}