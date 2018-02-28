var Done = true;
var key_pressed = ""


wordList = ["discipline","rally","nerve","supply","end","substitute","graphic","interest","voyage","bridge","reason","slam","grind","record",
"spirit","pastel","stool","dilute","captivate","new","settlement","beam","instrument","cord","worth","border","crude","professor","storm",
"manner","convenience","immune","visible","medal","ash","automatic","smash","right","graze","exception","instinct","pause","suspicion","court",
"syndrome","fraction","receipt","fastidious","password","slap","transport","service","poll","ignorance","take","sector","deteriorate",
"computing","cut","mirror","carry","approve","stride","teenager","butterfly","suit","behavior","abundant","leak","fuss","borrow","cultural","stain",
"scene","restrain","kidnap","justice","bean","length","commission","hotdog","theater","fever","limited","flexible","highlight","arrangement",
"response","cold","agenda","insist","attention","conservative","latest","carbon","swop","dead","bird"]

function CountDown() {
for (var i = 0;i < 10;i++) {
	setTimeout(function() {Score.innerHTML = parseInt(Score.innerHTML) - (parseInt(Score.value)/4)	},i*100)
}
}

function CountUp() {
for (var i = 0;i < 10;i++) {
	setTimeout(function() {Score.innerHTML = parseInt(Score.innerHTML) + (parseInt(Score.value)/4)},i*100)
}
}


function splitString() {
	if (key_pressed == Text.innerHTML[0].toUpperCase()) {
		Text.innerHTML = Text.innerHTML.slice(1)
		Letter.style.color = "#00FF00"
		CountUp();
		}
	else if (event.keyCode == 8) {}
	else {
		Letter.style.color = "#FF0000"
		CountDown();
}
	console.log()
}

function mainFunction() {
var wordIndex = Math.floor(Math.random() * wordList.length)
Text.innerHTML = wordList[wordIndex]
}

document.onkeydown = function(event) {
	key_pressed = String.fromCharCode(event.keyCode);
	if (event.keyCode >= 65 && event.keyCode <= 90) {
	Letter.innerHTML = key_pressed
	console.log("Hey")
	}

	splitString()
	if (Text.innerHTML.length == 0) {mainFunction();}

}
console.log(Score.value)
var Text = document.getElementById("CurrentWord")
var Letter = document.getElementById("Letter")
var Score = document.getElementById("Score")
mainFunction();
