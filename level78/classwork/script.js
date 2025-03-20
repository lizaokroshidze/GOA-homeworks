
document.body.innerHTML += `
  <p class="text">Hello, world!</p>
  <p class="text">Hello, world!</p>
  <p class="text">Hello, world!</p>
`;

document.querySelector(".text").style.color = "blue";

document.querySelectorAll(".text").forEach((element) => {
  element.style.fontSize = "20px";
  element.style.fontWeight = "bold";
});

const parentDiv = document.createElement("div");
parentDiv.style.display = "flex";
parentDiv.style.flexDirection = "column";
parentDiv.style.gap = "20px";
parentDiv.style.alignItems = "center";
parentDiv.style.marginTop = "20px";

const redDiv = document.createElement("div");
redDiv.style.width = "100px";
redDiv.style.height = "100px";
redDiv.style.backgroundColor = "red";

const greenDiv = document.createElement("div");
greenDiv.style.width = "100px";
greenDiv.style.height = "100px";
greenDiv.style.backgroundColor = "green";

parentDiv.appendChild(redDiv);
parentDiv.appendChild(greenDiv);
document.body.appendChild(parentDiv);