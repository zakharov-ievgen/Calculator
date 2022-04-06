const num1 = Number(prompt("Enter first number"));
const num2 = Number(prompt("Enter second number"));
const action = prompt("Choose desired action");
if (action === "*") {
    alert(`Correct answer is${num1 * num2}`);
} else if (action === "+") {
    alert(`Correct answer is${num1 + num2}`);
} else if (action === "-") {
    alert(`correct answer is${num1 - num2}`);
} else if (action === "/") {
    alert(`Correct answer is${num1 / num2}`);
} else {
    alert("Impossible to perform");
}
