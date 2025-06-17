document.addEventListener("DOMContentLoaded", () => {
    const addNameBtn = document.getElementById("add-name-btn");
    const nameList = document.getElementById("name-list");
  
    const loadNames = () => {
      const savedNames = JSON.parse(localStorage.getItem("names")) || [];
      nameList.innerHTML = "";
      savedNames.forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        nameList.appendChild(li);
      });
      console.log("LocalStorage names:", savedNames);
    };
  
    addNameBtn.addEventListener("click", () => {
      const name = prompt("შეიყვანე შენი სახელი:");
      if (name && name.trim() !== "") {
        const savedNames = JSON.parse(localStorage.getItem("names")) || [];
        savedNames.push(name.trim());
        localStorage.setItem("names", JSON.stringify(savedNames));
        loadNames();
      }
    });
  
    loadNames();
  });