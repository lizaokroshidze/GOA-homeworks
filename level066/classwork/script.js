const myName = "ლიზი";
const userName = prompt("შეიყვანეთ თქვენი სახელი:");

const result = document.getElementById("result");

if (userName === null) {
  result.textContent = "შემოსვლა გაუქმდა";
  console.log('შემოსვლა გაუქმდა');
} else if (userName.trim().toLowerCase() === myName.toLowerCase()) {
  result.textContent = "სეხნიები ხართ!";
  console.log('სეხნიები ხართ!');
} else {
  result.textContent = "სახელი არ ემთხვევა";
  console.log('სახელი არ ემთხვევა');
}