
function getInfo() {

// retrieving the data from the input
var muscleName = document.getElementById("muscleName").value
// the wrong msg to show incase the user enters wrong text
var wrongMsg = "Please make sure the muscle you wrote is in the picture, Refresh and try again"

//switch 
switch (muscleName) {
	case "biceps":
	document.getElementById("musImage").src = "img/biceps.jpg"
	document.getElementById("text").innerHTML = "<h2>"+ "muscle: " + muscleName + "</h2>" +"<h3>" + "STATIC DUMBBELL CURL" + "</h3>"
	break

	case "forearms":
	document.getElementById("musImage").src = "img/forearms.jpg"
	document.getElementById("text").innerHTML = "<h2>"+ "muscle: " + muscleName + "</h2>" + "<h3>" + "WRIST FLEXION/EXTENSION STRETCH" + "</h3>"
	break

	case "abs":
	document.getElementById("musImage").src = "img/abs.jpg"
	document.getElementById("text").innerHTML = "<h2>"+ "muscle: " + muscleName + "</h2>" + "<h3>" + "Side Crunch" + "</h3>"
	break

	case "calves":
	document.getElementById("musImage").src = "img/calves.jpg"
	document.getElementById("text").innerHTML = "<h2>"+ "muscle: " + muscleName + "</h2>" + "<h3>" + "BARBELL SEATED CALF RAISE" + "</h3>"
	break

	case "neck":
	document.getElementById("musImage").src = "img/neck.jpg"
	document.getElementById("text").innerHTML = "<h2>"+ "muscle: " + muscleName + "</h2>" + "<h3>" + "LYING FACE DOWN PLATE NECK RESISTANCE" + "</h3>"
	break

	case "traps":
	document.getElementById("musImage").src = "img/traps.jpg"
	document.getElementById("text").innerHTML = "<h2>"+ "muscle: " + muscleName + "</h2>" + "<h3>" + "Modified Bent-Over Duel Cable Low Pulley Shoulder Flye" + "</h3>"
	break

	case "shoulders":
	document.getElementById("musImage").src = "img/shoulders.png"
	document.getElementById("text").innerHTML = "<h2>"+ "muscle: " + muscleName + "</h2>" + "<h3>" + "Seated barbell military press" + "</h3>"
	break

	case "chest":
	document.getElementById("musImage").src = "img/chest.jpg"
	document.getElementById("text").innerHTML = "<h2>"+ "muscle: " + muscleName + "</h2>" + "<h3>" + "Barbell Bench Press" + "</h3>"
	break

	default:
	document.getElementById("text").innerHTML = '<p class= "wrong">'+ wrongMsg + "</p>"

}
}