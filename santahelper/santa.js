const fs = require('fs')

const file = fs.readFileSync('./data.txt', err => {
    if (err) {
        console.log(err)
    }
}).toString();

let floor = 0;
let basement = 0;
let set = false;

// Iterate over the returned string
[...file].forEach((character, i) => {
    if (character === '(') {
        floor++;
    } else { // thing is ')'
        floor--;
    }
    if (!set && (floor === -1)) { // only set once
        set = true;
        basement = i + 1; // since answer is 1 indexed
    }
})

console.log('The instructions lead him to floor: ' + floor)
console.log('The instruction that first makes him hit the -1st floor is: ' + basement)

/*
The instructions lead him to floor: 232
The instruction that first makes him hit the -1st floor is: 1783
*/