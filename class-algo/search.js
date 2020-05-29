var stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514];
var random_value = stuff[Math.floor(Math.random() * 14)];


function search() {
    for (let i = 0; i < stuff.length; i++) {
        if (random_value === stuff[i]) {
            return console.log(random_value)
        } continue
    }
}

search()



function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return console.log(mid);
        }
        if (arr[mid] < target) {
            //widen search parameter to the left
            left = mid + 1;
        } else {
            //widen search parameter to the right
            right = mid - 1;
        }
    } return false
}

binarySearch(stuff, random_value)