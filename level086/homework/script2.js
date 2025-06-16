function simpleCalculator() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let resultDiv = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = "Please enter valid numbers!";
        return;
    }

    let result;

    switch (operation) {
        case "1":
            result = num1 + num2;
            resultDiv.innerHTML = `Result: ${num1} + ${num2} = ${result}`;
            break;
        case "2":
            result = num1 - num2;
            resultDiv.innerHTML = `Result: ${num1} - ${num2} = ${result}`;
            break;
        case "3":
            result = num1 * num2;
            resultDiv.innerHTML = `Result: ${num1} * ${num2} = ${result}`;
            break;
        case "4":
            if (num2 === 0) {
                resultDiv.innerHTML = "Error: Cannot divide by zero!";
            } else {
                result = num1 / num2;
                resultDiv.innerHTML = `Result: ${num1} / ${num2} = ${result}`;
            }
            break;
        default:
            resultDiv.innerHTML = "Invalid operation!";
    }
}

function resetCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operation").value = "";
    document.getElementById("result").innerHTML = "";
}