
var Number1 = Number (prompt( "Enter First Number! "))
var Number2 = Number (prompt("Enter Second Number! "))



console.log("Addition" , Number1 + " + " + Number2 + " = " + (Number1 + Number2))
console.log("Subtraction", Number1 + " - " + Number2 + " = " + (Number1 - Number2))
console.log("Multiplication", Number1 + " * " + Number2 + " = " + (Number1 * Number2))
console.log("Division", Number1 + " / " + Number2 + " = " + (Number1 / Number2))


// 


var Name = prompt("Enter name! ")
var Surname = prompt("Enter Surname! ")

console.log(Name + " " + Surname)


// 

var number1 = prompt("Enter the first number:")
var number2 = prompt("Enter the second number:")

console.log(number1 + " is greater than " + " " + number2 + (number1 > number2))
console.log(number1 + " is less than " + " "  + number2 + (number1 < number2))
console.log(number1 + " is equal to " + " "  + number2 + (number1 == number2))


// 


var One = 6

var Two = 7

console.log( One == Two )


// 

var number = Number(prompt("Enter a number!"))

console.log("The number is less than 50:", number < 50)
console.log("The number is greater than 50:", number > 50)
console.log("The number is exactly 50:", number === 50)


// 


var num1 = Number(prompt("Enter first number:"))
var num2 = Number(prompt("Enter second number:"))

var sum = num1 + num2

console.log("The sum of the two numbers is greater than 100:", sum > 100)
console.log("The sum of the two numbers is less than or equal to 100:", sum <= 100)



// 



var userName = prompt("Enter your name:")
var myName = "Liza"

console.log(userName === myName)

// 


var password = prompt("Enter your password:")
var confirmPassword = prompt("Please confirm your password:")

console.log("Passwords match:", password === confirmPassword)
console.log("Passwords do not match:", password !== confirmPassword)
