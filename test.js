
//get the middle value for a string
function getMiddle(s) {
    //setting position and length variables
    let position;
    let length;

    //checking to see if the string is even or odd
    if (s.length % 2 == 1) {
        //setting position equal to halway through the string
        position = s.length / 2
        //setting the length of the return equal to 1 for odd strings
        length = 1
    } else {
        //setting position equal to the letter before the center
        position = s.length / 2 - 1
        //setting the length to return the 2 middle variables
        length = 2
    }

    //returning the middle character(s)
    return console.log(s.substring(position, position + length))
}


function highAndLow(numbers) {
    let high = 0;
    let low = 0;

    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] > high) {
            high = numbers[i]
            console.log(numbers[i])
        } else if (numbers[i] < low) {
            low = numbers[i]
        }
    }
    console.log(`${high},${low}`)
    return `${high},${low}`
}


// highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")

function addTwoDigits(n) {
    let numbers = n.toString().split("")
    let num1 = parseInt(numbers[0])
    let num2 = parseInt(numbers[1])
    let total = num1 += num2
    return console.log(total)
}



var fizzBuzz = function (n) {

    var arr = []

    for (var i = 0; i <= n; i++) {
        if (i == 0) {
            arr.push(i)
        } else if (i % 5 === 0 && i % 3 === 0) {
            console.log("Fizz Buzz");
            arr.push("Fizz Buzz")
        } else if (i % 3 === 0) {
            console.log("Fizz");
            arr.push("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz");
            arr.push("Buzz")
        } else {
            console.log(i);
            arr.push(i)
        }
    } return arr
};

function alphabeticShift(inputString) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let newString = ""

    for (let i = 0; i < inputString.length; i++) {
        if (alphabet.indexOf(inputString[i]) == 25) {
            newString += "a"
        } else {
            console.log(alphabet.indexOf(inputString[i]))
            newString += alphabet[alphabet.indexOf(inputString[i]) + 1]
        }
    } return newString

    
}

alphabeticShift("crazy")

acdef