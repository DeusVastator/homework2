//console.log(guessResponse);

/*var computer = Math.floor(Math.random()*100);
var user = document.getElementById("guessResponse");
*/
var computer = Math.floor(Math.random()*100);
console.log(computer);
function game() {
    
var user = document.querySelector(".guess").value;
/*var max = 100;
var min = 1;
function getRandom(min,max) {
    return Math.random() * (max-min) + min;
}*/

console.log(user);


if (user > computer) {
    document.getElementById("guessResponse").innerHTML = "<br> You're too high!";
} else if (user < computer) {
     document.getElementById("guessResponse").innerHTML = "<br> You're too low!";
} else if (user == computer) {
     document.getElementById("guessResponse").innerHTML = "<br> You guessed it right!";
} else { 
     document.getElementById("guessResponse").innerHTML = "<br> Guess a Number.";
}
}