import { getInputs } from "./script.js";

document.getElementById("btn").addEventListener("click", () => {
  const { val1, val2 } = getInputs();
  document.getElementById(
    "output"
  ).textContent = `Inp1: ${val1} | Inp2: ${val2}`;
  console.log("Inp1:", val1, "Inp2:", val2);
});
