const fastTask = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Fast task finished");
  }, 500);
});

const mediumTask = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Medium task finished");
  }, 1000);
});

const slowTask = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Slow task finished");
  }, 1500);
});

Promise.race([fastTask, mediumTask, slowTask])
  .then((result) => {
    console.log("პირველი დასრულებული შედეგი:", result);
  })
  .catch((error) => {
    console.error("შეცდომა:", error);
  });
