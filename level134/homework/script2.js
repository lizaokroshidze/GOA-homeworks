const fakeServer = (serverName) => {
  const willResolve = Math.round(Math.random());

  const time = Math.floor(Math.random() * 3900) + 100;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willResolve === 1) {
        resolve(`received data from ${serverName} in ${time}ms`);
      } else {
        reject(new Error(`Error: failed to connect to ${serverName}`));
      }
    }, time);
  });
};

Promise.any([
  fakeServer("Server A"),
  fakeServer("Server B"),
  fakeServer("Server C"),
])
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    if (error instanceof AggregateError) {
      console.log("All promises failed. Reasons:");
      error.errors.forEach((err) => console.error(err.message));
    } else {
      console.error("An unexpected error occurred:", error);
    }
  });
