

// function sayHello() {
//     return "hello world"
// }

// function multiply(x,y) {
//     return x * y
// };


// let sayHello = () => console.log("hello world");


// let xarisxi = ( x , y ) => x ** y;

// console.log(xarisxi(4, 4));


// let name = (name) => name
// sheidzleba frchxilebis gareshe,roca erti parametria


// const isPositive = num => num > 0;

// console.log(isPositive(343243)); 
// console.log(isPositive(-352342)); 

// const btn = document.querySelector("button");

// btn.addEventListener("click" , ()=> console.log("clicked"));


// Map - სიის მეთოდი რომელსაც შეუძლია სიაშ გადაუაროს თითოელ ელემენტს  და თითოეულ ელემენტზე მოახდინოს ზეგავლენა.

// აბრუნებს ახალ სიას ,ძველ სიას არ ცვლის

// გადავუაროთ სიას და ამოვიღოთ თიტოეული ელემენტი, როგორც for - ციკლით 

// const names = ["liza","ina","niko"];
// const sortNames = (element,index) => {
//     return `${index}:${element}`
// }

// const newArray = names.map(sortNames)

// console.log(newArray)



// 3) შექმენით სია სადაც შეინახავთ რანდომ სახელებეს , map-ის გამოყენებით მიწვდით თითოეულ ელემენტს სიაში და დააბუნეთ ახალი განახლებული სია სადაც იქნება ყველა სახელი დიდი ასოებით დაწეილი



const names = ["liza","luka","ina","niko"];

const upperCase = names.map(name => name.toUpperCase());

console.log(upperCase);


