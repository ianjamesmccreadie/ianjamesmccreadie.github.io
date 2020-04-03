console.log("rona")

//BING IDEA: LISTS - LINKS TO OTHER LANGUAGES
var countries = ["Canada","China","Brazil","US"]
var population = [250, 80995, 151,2726]

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
			console.log(value+" has "+population[i]);
			document.getElementById("results").innerHTML = value+" has  "+population[i] +" cases"+

			" are you fucked?" + " yes"

			;
		}
	}



}

function afnc() {
	console.log("Clicked A");
}