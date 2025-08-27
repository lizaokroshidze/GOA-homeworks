// ვქმნით ფუნქციას, რომელიც კითხულობს ორი ინფუთის მნიშვნელობას
export function getInputs() {
  const val1 = document.getElementById("inp1").value;
  const val2 = document.getElementById("inp2").value;
  return { val1, val2 };
}
