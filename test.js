
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


function descendingOrder(n) {
    let list = n.toString().split("")
    let final = list.sort().reverse().join("")
    return parseFloat(final)
}

// console.log(descendingOrder(123456789))

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

function tripleX(str) {
    console.log(str)
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "x" && str[i + 1] == "x".toLowerCase()) {
            return true
        } else if (str[i] == "x" && str[i + 1] != "x".toLowerCase()) {
            return false
        }
    } return false
}

// tripleX("abraxxxas")

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
    return console.log(statues[statues.Length - 1] - statues[0] - statues.Length + 1)
}
// makeArrayConsecutive2([6, 2, 3, 8])

function highAndLow(numbers) {
    let high = 0;
    let low = 0;
    let num = numbers.split(" ")

    console.log(num)
    for (let i = 0; i <= num.length; i++) {
        if ((num[i] * 1) > high) {
            high = num[i]
        } else if ((num[i] * 1) < low) {
            low = num[i]
        } continue
    }
    return console.log(`${high},${low}`)
}

// highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")

function findOdd(A) {
    let count = -1
    let number;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[i] == A[j]) {
                count++
                number = A[i]
            }
        }
        if (count % 2 == 0) {
            console.log(count)
            return console.log(number)
        } else count = -1
    }

}

//findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])

function disemvowel(str) {
    let myArray = str.split("")
    let newStr = myArray.map(str => str.replace(/[aeiouAEIOU]/, "")).join("");

    return console.log(newStr)
};


//disemvowel("You suck chicken wings")


function findShort(s) {
    let arr = s.split(" ")
    let longer = 100
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length < longer) {
            longer = arr[i].length
        }

    } return longer
}

//findShort("turns out random test cases are easier than writing out basic ones")

const getNthDigit = (number, index) => {
    let tempNumber = number;
    let currentDigit = '';
    for (let i = -1; i < index; i++) {
        currentDigit = Math.floor(tempNumber % 10);
        tempNumber /= 10;
    }
    return currentDigit;
}
//console.log(getNthDigit(7204, 20));
var isSquare = function (n) {
    if (Math.sqrt(n) % 1 == 0) {
        return console.log(true)
    }
    return console.log(false); // fix me
}

//isSquare(25)


function isIsogram(str) {
    if (str.length == 0) {
        return true
    }
    let arr = str.toLowerCase().split("")

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return false
            }
        }

    } return true
}

//isIsogram("moOse")

function XO(str) {
    str = str.toLowerCase()
    let x = 0
    let o = 0
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "x":
                x++
                break;
            case "o":
                o++
                break;
        }
    }

    if (x == o) {
        return true
    } return false
}
//XO("xxOo")
function DNAStrand(dna) {
    let str = []
    dna = dna.split("")
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case "A":
                str.push("T")
                break;
            case "T":
                str.push("A")
                break;
            case "C":
                str.push("G")
                break;
            case "G":
                str.push("C")
                break;
        }

    } str = str.join("")
    return console.log(str)
}

//DNAStrand("AAAA")

function toJadenCase(str) {
    str = str.split(" ")
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ")
}

//console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))

function getSum(a, b) {
    let list = []
    if (a == b) {
        return a
    } else if (a < b) {
        for (let i = a; i < b; i++) {
            list.push(b - (b - i))
        }
        let total = list[0]
        for (let j = 1; j < list.length; j++) {
            total = list[j] + total
        } return total + b
    }
    else if (a > b) {
        for (let i = b; i < a; i++) {
            list.push(a - (a - i))
        }
        let total = list[0]
        for (let j = 1; j < list.length; j++) {
            total = list[j] + total
        } return total + a
    }
}

//more efficient way >:(
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}


// console.log(getSum(-445, 175))
// //-83835

function zero(a, b) { return function (x) { return (a(b(0))) } }
function one(a, b) { return function (x) { return (a(b(1))) } }

function plus(c) { return + c }

// console.log(zero(plus(one())))

var paintLetterboxes = function (start, end) {
    // a final count to be returned
    let finalArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // combine intigers into a string
    let tempArr = ""
    // push each integer to tempArray
    for (let i = start; i < end + 1; i++) {
        tempArr = tempArr + (i)
    }
    //loop through each count of finalArray
    for (let i = 0; i < finalArray.length; i++) {
        //second loop to compare values of TempArr
        for (let j = 0; j < tempArr.length; j++) {
            // console.log(finalArray[i])

            // compare current temp array to current count, 
            if (tempArr[j] == i) {
                //increment final array count 
                finalArray[i] = finalArray[i] + 1
            }

        }

    }
    console.log(finalArray)
    // Your code here
    return finalArray
}

function accum(s) {
    //set variables to split the initial string and store future words
    var letters = s.split(''), words = [];

    //loop through the string
    for (var i = 0; i < letters.length; i++) {
        // capitalize the first letter in the string, and then add an array equal to the length of i + 1, then join each item in the array with a lowercase letter at i
        words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
    //join on -
    return words.join('-');
}

function solution(number) {
    // create a variable to hold current sum
    var sum = 0;

    //iterate through each integer less than total
    for (var i = 1; i < number; i++) {
        //if number is divisible by 3 or 5 increase sum by that number
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    // return sum total
    return sum;
}

function digital_root(n) {

    //result will start at 0, converting n into a string and splitting it, then mapping through and converting each item in the arrat into a number, at the same time adding the number to the result

    let result = 0; String(n).split('').map(num => {
        result += Number(num);
    }); return result >= 10 ? digital_root(result) : result;
}

var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num) { return num !== 0; });
    var zeroList = arr.filter(function (num) { return num === 0; });
    return filtedList.concat(zeroList);
}

//reverse any word in a string that is more than 5 characters long
function spinWords(string) {
    let temp = []
    string.split(" ").forEach(index => {
        if (index.length > 4) {
            temp.push(index.split("").reverse().join(""))
        } else temp.push(index)
    })

    return temp.join(" ")
}

function arrayDiff(a, b) {
    //create empty arry - redundant
    let result = []
    //manually filter everything from a && push to result - repetetive
    a.forEach(index => {
        if (!b.includes(index)) {
            result.push(index)
        }
    })
    return (result)
}
//super better way -- even readable
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}

function likes(names) {
    names = names || []
    switch (names.length) {
      case 0:
        return 'no one likes this'
      case 1:
        return `${names[0]} likes this`
      case 2:
        return `${names[0]} and ${names[1]} like this`
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
      default:
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))