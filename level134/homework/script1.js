const getWeather = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("☀️");
  } else {
    reject("No info");
  }
});

const getCurrency = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve(2.7);
  } else {
    reject("No info");
  }
});

const getNews = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("ახალი ამბები: განათლების რეფორმა იგეგმება");
  } else {
    reject("No info");
  }
});

Promise.allSettled([getWeather, getCurrency, getNews]).then((results) => {
  results.forEach((result) => {
    console.log(result);
  });
});
