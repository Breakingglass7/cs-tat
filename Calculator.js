const assert = require('assert');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function addi(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}



function calc(equation) {
    var res; 
    var input = equation.split(" ");
    var x = parseFloat(input[0]);
    var op = input[1];
    var y = parseFloat(input[2]);

    if (op === "*") {
       res = multiply(x, y); 
    }

    else if (op === "/") {
        res = divide(x, y);
    }

    else if (op === "+") {
        res = addi(x, y);
    }

    else if (op === "-") {
        res = substract(x, y);
    }

    console.log(x + " " + op + " " + y + " = " + res);
    return res;
}   

function main() {
    console.log("Hello and welcome to my calculator");
    var loop = true;
    var input = "1";

    // while (loop) {
    //     // `(input) =>` means `function(input)`, and is a callback function
        rl.question("Please enter your equation here:", (input) => { 
            calc(input);
            rl.close();
        });

    // }
} 

main();

/*
 *
 *  TESTS
 *
 */

function tests() {
    assert.equal(multiply(4, 0), 0);
    assert.equal(multiply(5, 9), 45);
    assert.equal(multiply(5, 10), 50);

    assert.equal(calc(5, "*", 5), 25);
    assert.equal(calc(10, "*", 9), 90);
    assert.equal(calc(5, "*", 9), 45);
}

//tests();