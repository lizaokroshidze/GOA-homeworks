let user = {
    name: "John Doe",
    age: 25,
    email: "johndoe@example.com",
    country: "USA"
}

for (let key in user) {
    console.log(`${key}: ${user[key]}`)
}

