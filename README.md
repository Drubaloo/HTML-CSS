# HTML-CSS
A testing ground for designing projects


https://leetcode.com/problems/string-to-integer-atoi/#:~:text=String%20to%20Integer%20(atoi)%20%2D%20LeetCode&text=Implement%20atoi%20which%20converts%20a,non%2Dwhitespace%20character%20is%20found.

https://leetcode.com/problems/two-sum/
XMA Header Image
Two Sum - LeetCode
leetcode.com
one where you have to sort by last name in an array of strings that have the first and last name seperated by a space.
Use the sort function
multiply an array of numbers except for the current index, return an array of those products.

# this is determine an anagram. I forgot to mention cases where you have spaces and capitols and whatnot. Make sure to mention that in the future.
 racecar -> true
 bat -> false
 lool -> true
 const isPalindrome = (input) => {
   let start =0;
   let end = input.length -1;
   while(start <= end){
     if(input[start] == input[end]){
         start++;
         end--;
     }
     else{
       return false
     }
   }
   return true;
 }
 console.log(isPalindrome('racecar'));

 https://leetcode.com/problems/is-subsequence/
XMA Header Image
Is Subsequence - LeetCode
leetcode.com
7204, 0 -> 4
 7204, 2 -> 2
 7204, 20 -> 0
const getNthDigit = (number, index) => {
  let tempNumber = number;
  let currentDigit = '';
  for(let i = -1; i< index; i++){
    currentDigit = Math.floor(tempNumber%10);
    tempNumber /= 10;
  }
  return currentDigit;
}
console.log(getNthDigit(7204, 20));