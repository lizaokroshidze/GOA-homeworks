new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  if (randomNum > 5) {
    resolve(randomNum);
  } else {
    reject(`Low number: ${randomNum}`);
  }
})
  .then((num) => console.log(`High number: ${num}`))
  .catch((err) => console.error(err));
