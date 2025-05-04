const users = [
    { name: "John", age: 17 },
    { name: "Emily", age: 22 },
    { name: "Michael", age: 18 },
    { name: "Sophia", age: 15 },
    { name: "David", age: 30 }
  ];
  
  const adults = users.filter(user => user.age >= 18);
  
  console.log("👥 All users:", users);
  console.log("🧑‍🔧 Adults (age ≥ 18):", adults);