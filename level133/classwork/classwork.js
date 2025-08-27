// async , await
// / https:jsonplaceholder.typicode.com/todos

function helloWorld() {
    
}

console.log(helloWorld(), "სინქრონული ფუნქცია");

async function asyncHelloWorld() {}

console.log(asyncHelloWorld(), "ასინქრონული ფუნქცია");

async function fetchTodos() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
}

// fetchTodos();