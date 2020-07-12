
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

function squareDigits(num) {
    let squared = ``
    let numbers = num.toString()
    for (let i = 0; i < numbers.length; i++) {
        squared += (numbers[i] * numbers[i])
    }
    return parseInt(squared)

}

function centuryFromYear(year) {
    return Math.ceil(year / 100);
}

function checkPalindrome(inputString) {
    var check = inputString.split("").reverse().join("")
    if (inputString.toLowerCase() == check.toLowerCase()) {
        return true
    } return false
}

function adjacentElementsProduct(inputArray) {
    let check = inputArray[0] * inputArray[1]
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] * inputArray[i + 1] >= check) {
            check = inputArray[i] * inputArray[i + 1]
        }
    } return check
}

//a function to determin the shape area of a polygon
function shapeArea(n) {
    //adding the product of n to the power of 2 with n -1 to the power of 2
    return Math.pow(n, 2) + Math.pow(n - 1, 2)
}


function firstDuplicate(a) {

    for (let i = 0; i < a.length; i++) {
        let match = -1;
        for (let j = 0; j < i + 1; i++) {
            if (a[i] == a[j]) {
                console.log(a[i])
            } return
        }

    } return console.log(match)
}
// firstDuplicate([2, 1, 3, 5, 3, 2])

function makeArrayConsecutive2(statues) {
    array.sort(statues);
    return console.log(statues[statues.Length-1]-statues[0]-statues.Length+1)
}
makeArrayConsecutive2([6, 2, 3, 8])

AS