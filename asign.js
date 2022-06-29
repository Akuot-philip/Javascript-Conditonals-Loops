// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function product(){
    for(i=0;i<=100;i++){
        if (i%3===0 && i%5===0){
            console.log("FizzBuzz")
        }
        else if(i%3===0){
            console.log("Fizz")

        }
        else if (i%5===0){
            console.log("Buzz")
        }
        else{
            console.log(i)
        }
    }
}
product()
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for (let a = 0; a < 1000; a++) {
  if ([a] % 3 === 0 && [a] % 5 === 0) {
    sum += a;
  }
}
console.log(sum);


// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

function evenOrodd(){
    for(i=0;i<=20;i++){
        if (i%2===0){
            console.log(i+ "even")
        }
        else if(i%2===1){
            console.log(i+ "odd")

        }
    }
}
evenOrodd()
// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
numbers = [-2,4,-5,6,0];
let largest = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
       largest = numbers[i];
    }
}
console.log(largest);

// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40

let x = 40;
let y = 10;
function greater(){
    if(x>y){
        console.log(x)
    }
    else{
        console.log(y)
    }
}
greater()

// Write a JavaScript program to find leap years from 2000 to 2022

for (let year = 2000; year <= 2022; year++) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(year);
    }
    else{
        console.log(year +" Is not a leap year")
    }
}