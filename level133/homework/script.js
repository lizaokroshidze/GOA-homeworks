function getUser() {
    return new Promise((resolve, reject) => {
      const num = Math.floor(Math.random() * 15) + 1; 
      fetch(`https://jsonplaceholder.typicode.com/users/${num}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            reject("მომხმარებელი ვერ მოიძებნა!");
          }
        })
        .then(data => resolve(data))
        .catch(() => reject("მომხმარებლის მოთხოვნის შეცდომა"));
    });
  }
  
  function getPost() {
    return new Promise((resolve, reject) => {
      const num = Math.floor(Math.random() * 150) + 1; 
      fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            reject("პოსტი ვერ მოიძებნა!");
          }
        })
        .then(data => resolve(data))
        .catch(() => reject("პოსტის მოთხოვნის შეცდომა"));
    });
  }
  
  Promise.all([getUser(), getPost()])
    .then(([user, post]) => {
      console.log("მომხმარებელი:", user);
      console.log("პოსტი:", post);
    })
    .catch(err => {
      console.error("მონაცემები ვერ მოიძებნა:", err);
    });

.