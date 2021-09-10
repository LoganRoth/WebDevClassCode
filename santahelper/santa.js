const fs = require('fs')

function santaChallenege() {
    const file = fs.readFileSync('./data.txt', err => {
        if (err) {
            console.log(err)
        }
    }); // Could do .toString() if wanted, but this is faster
    console.time('Advent of Code 2015, Day 1');

    let floor = 0;
    let basement = 0;
    let set = false;

    // Iterate over the file
    // Could do [...file] if file was a string
    file.forEach((character, i) => {
        if (character === 40) { // code for '('
            floor++;
        } else { // thing is ')'
            floor--;
        }
        if (!set && (floor === -1)) { // only set once
            set = true;
            basement = i + 1; // since answer is 1 indexed
        }
    })

    console.timeEnd('Advent of Code 2015, Day 1')
    console.log('The instructions lead him to floor: ' + floor)
    console.log('The instruction that first makes him hit the -1st floor is: ' + basement)
}

santaChallenege();
/*
Advent of Code 2015, Day 1: 0.438ms
The instructions lead him to floor: 232
The instruction that first makes him hit the -1st floor is: 1783
*/