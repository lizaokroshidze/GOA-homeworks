new Promise((resolve) => {
  setTimeout(() => resolve("step 1"), 1000);
})
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve("step 2"), 1000);
    });
  })
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve("step 3"), 1000);
    });
  })
  .then((result) => {
    console.log(result);
  });
