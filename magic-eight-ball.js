var userName = "";

// ternary expression - decides what to do if the user enters a name or not
//if user enters a name like 'Jane', use string interpolation to log "Hello Jane" to the console
//otherwise simply log hello!

if (userName) {
  console.log(`Hello ${userName}!`);
} else {
  console.log("Hello!");
}

var userQuestion =
  "Will I pick the millionair maker crypto stock in the next year?";

console.log (`${userName} asked, "${userQuestion}`);

var randomNumber = Math.floor(Math.random() * 8); //random number 0 to 7

let eightBall = "";

if (randomNumber === 0) {
  eightBall("Never know til you try");
} else if (randomNumber === 1) {
  eightBall("Probably dude");
} else if (randomNumber === 2) {
  eightBall("Nah fam that aint happenin");
} else if (randomNumber === 3) {
  eightBall("For sure homie");
} else if (randomNumber === 4) {
  eightBall("Ummm sorry not sure");
} else if (randomNumber === 5) {
  eightBall("Not in a million years");
} else if (randomNumber === 6) {
  eightBall("looks likely!");
} else if (randomNumber === 7) {
  eightBall("Yes dudeee");
}

console.log($(eightBall));
