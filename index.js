#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subraction", "multiplication", "division"],
    },
]);
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
    console.log(answer);
}
else if (answer.operator === "subraction") {
    console.log(answer.firstnumber - answer.secondnumber);
    console.log(answer);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
    console.log(answer);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
    console.log(answer);
} // else {
// console.log("please select the valid operator");
//}
