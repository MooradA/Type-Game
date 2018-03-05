// Variables
var Done = true;
var key_pressed = "";
var multiplier = 1;

//HTML elements variables
var Text = document.getElementById("CurrentWord");
var Letter = document.getElementById("Letter");
var Score = document.getElementById("Score");
var multiplier_value = document.getElementById("Multiplier");

//The Array With All The Words
var wordList = ["discipline", "rally", "nerve", "supply", "end", "substitute", "graphic", "interest", "voyage", "bridge", "reason", "slam", "grind", "record",
    "spirit", "pastel", "stool", "dilute", "captivate", "new", "settlement", "beam", "instrument", "cord", "worth", "border", "crude", "professor", "storm",
    "manner", "convenience", "immune", "visible", "medal", "ash", "automatic", "smash", "right", "graze", "exception", "instinct", "pause", "suspicion", "court",
    "fraction", "receipt", "fastidious", "password", "slap", "transport", "service", "poll", "ignorance", "take", "sector", "deteriorate",
    "computing", "cut", "mirror", "carry", "approve", "stride", "teenager", "butterfly", "suit", "behavior", "abundant", "leak", "fuss", "borrow", "cultural", "stain",
    "scene", "restrain", "kidnap", "justice", "bean", "length", "commission", "hotdog", "theater", "fever", "limited", "flexible", "highlight", "arrangement",
    "response", "cold", "agenda", "insist", "attention", "conservative", "latest", "carbon", "swop", "dead", "bird"
];

// mainFunction chooses the word and this get called in the document.onkeydown

function mainFunction() {
    var wordIndex = Math.floor(Math.random() * wordList.length);
    Text.innerHTML = wordList[wordIndex];
}

//This function split the string which then can be used to check if the user typed the first letter of the word right.
//splitString function also checks the users input from the key_pressed variable that document.onkeydown is modifing

function splitString() {
    if (key_pressed == Text.innerHTML[0].toUpperCase()) {
        Text.innerHTML = Text.innerHTML.slice(1);
        Letter.style.color = "#00FF00";
        CountUp();
    } else if (event.keyCode == 20) {} else {
        Letter.style.color = "#FF0000";
        CountDown();
    }
}

/*
A function that gives points, This also gives the CountUp effect
Here the for loop calls the setTimeout which makes JS wait, In each iteration 100 milliseconds
are add to the time of the number to go up with the add time the effect will not be visible because it is too fast.
the points are counted by the multiplier, 1 is multiplied by the multiplier.
*/

function CountUp() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function() {
            Score.innerHTML = parseInt(Score.innerHTML) + 1 * multiplier;
        }, i * 100);
    }
}

//CountDown Functions are the same thing as CountUp function but do the opposite, It take points off and gives the count down effect

function CountDown() {
    var half = Math.ceil(parseInt(Score.innerHTML) / 2);
    for (var i = 0; i < 10; i++) {
        setTimeout(function() {
            Score.innerHTML -= Math.ceil(half / 10);
            if (parseInt(Score.innerHTML) < 0) {
                Score.innerHTML = 0;
            }
        }, i * 100);
    }

    multiplier = 1;
}



//document.onkeydown = a function that modifys key_pressed varibale and changes the letter that is displyed in the h1 "letter" element
//This also calls the splitString fucntion, mainFunction function and adds and resets the multiplier.

document.onkeydown = function(event) {
    key_pressed = String.fromCharCode(event.keyCode);
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        Letter.innerHTML = key_pressed;
    }
    splitString();
    if (Text.innerHTML.length == 0) {
        multiplier++;
        mainFunction();
    }
    multiplier_value.innerHTML = multiplier + "x";

};

//mainFunction is called to display the word to start the game
mainFunction();