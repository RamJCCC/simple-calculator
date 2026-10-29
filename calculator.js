// Ramith Weerasinghe Kulatunga, October 29, 2026

"use strict";

let choice;
let num1;
let num2;

choice = prompt(`Simple Calculator
Enter your choice:

1. Add two numbers
2. Subtract two numbers
3. Multiply two numbers
4. Divide two numbers
5. Exit`);

// Cancel gives null, Number(null) is 0 so it lands in default
choice = Number(choice);

switch (choice) {

	case 1:
		num1 = Number(prompt("Enter the first number"));
		num2 = Number(prompt("Enter the second number"));
		alert(`Sum: ${num1 + num2}`);
		break;

	case 2:
		num1 = Number(prompt("Enter the first number"));
		num2 = Number(prompt("Enter the second number"));
		alert(`Difference: ${num1 - num2}`);
		break;

	case 3:
		num1 = Number(prompt("Enter the first number"));
		num2 = Number(prompt("Enter the second number"));
		alert(`Product: ${num1 * num2}`);
		break;

	case 4:
		num1 = Number(prompt("Enter the number to divide"));
		num2 = Number(prompt("Enter the number to divide by (not zero)"));
		if (num2 === 0) {
			alert("You can't divide by zero");
		} else {
			alert(`Quotient: ${num1 / num2}`);
		}
		break;

	case 5:
		alert("Exiting the program.");
		break;

	default:
		alert("Invalid choice, enter a number from 1 to 5");
}
