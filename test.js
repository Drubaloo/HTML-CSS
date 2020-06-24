
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


