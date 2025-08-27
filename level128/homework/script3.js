new Promise((resolve) => {
    setTimeout(() => resolve("Liza"),2000);
})
.then((name) => `Hello,${name}!`)
.then((greeting) => console.log(greeting));