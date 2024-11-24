var userName = '';

// ternary expression - decides what to do if the user enters a name or not
//if user enters a name like 'Jane', use string interpolation to log "Hello Jane" to the console
//otherwise simply log hello!

if (userName !== '') {
  console.log(`Hello ${userName}!`);
} else {
  console.log("Hello!");
}

var userQuestion = '';

if (userQuestion = '') {
    console.log(`Magic 8-ball, ${userQuestion}?`);
}

var randomNumber = Math.floor(Math.random() * 8);

var eightBall = '';

if (randomNumber === 0) {
    console.log('Never know til you try');
} else if (randomNumber === 1) {
    console.log('Probably dude');
} else if (randomNumber === 2) {
    console.log('Nah fam that aint happenin');
} else if (randomNumber === 3) {
    console.log('For sure homie');
} else if (randomNumber === 4) {
    console.log('Ummm sorry not sure');
} else if (randomNumber === 5) {
    console.log('Not in a million years');
} else if (randomNumber === 6) {
    console.log('looks likely!');
} else if (randomNumber === 7) {
    console.log('Yes dudeee');
}

