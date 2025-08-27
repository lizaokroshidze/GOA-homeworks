new Promise((resolve, reject) => {
  const userIsFound = Math.round(Math.random());
  const timeToFindUser = Math.floor(Math.random() * 10) * 1000; 

  const user = {
    name: "Liza",
    surname: "Okroshidze",
    age: 20,
    gender: "Female",
  };

  setTimeout(() => {
    if (userIsFound === 1) {
      resolve(user);
    } else {
      reject(" User not found!");
    }
  }, timeToFindUser);
}).then(
  (user) => console.log(" User found:", user),
  (error) => console.error(error)
);
