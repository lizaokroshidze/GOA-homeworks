const randomResult = () => Math.random() > 0.5;

const getProduct = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (randomResult()) {
      resolve({ id: 1, name: "Laptop" });
    } else {
      reject("Product data failed to load.");
    }
  }, 1000);
});

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (randomResult()) {
      resolve({ id: 101, username: "giorgi_ge" });
    } else {
      reject("User data failed to load.");
    }
  }, 2000);
});

const getPayment = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (randomResult()) {
      resolve({ transactionId: "TX12345", amount: 2500 });
    } else {
      reject("Payment data failed to load.");
    }
  }, 3000);
});

Promise.all([getProduct, getUser, getPayment])
  .then((results) => {
    console.log("All data loaded successfully:", results);
  })
  .catch((error) => {
    console.error("შეკვეთის დამუშავება ჩაიშალა:", error);
  });
