new Promise((resolve) => resolve(2))
.then((num) => num * 2)
.then((num) => num * 3)
.then((num) => num * 4)
.then((result) => console.log(result));