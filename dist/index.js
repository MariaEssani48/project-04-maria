#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//sleep function
const sleep = () => {
    return new Promise((r) => { setTimeout(r, 2000); });
};
console.log(chalk.greenBright("CURRENCY CONVERTER"));
// coversion of currency
async function Conversion(currA, currB, amount) {
    let money = amount;
    let currencies = ["USD", "PKR", "EUR", "JPY", "SAR"];
    let currency_Value = [1, 291.43, 0.91, 145.51, 3.75];
    let i = 0;
    while (i <= 4) {
        if (currA == currencies[i]) {
            let j = 0;
            while (j <= 4) {
                if (currB == currencies[j]) {
                    money = money / currency_Value[i];
                    money = money * currency_Value[j];
                }
                j++;
            }
        }
        i++;
    }
    return money;
}
// taking user response
async function Ask() {
    const answers = await inquirer.
        prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "curr1",
            message: "Which Currency you want coversion from? \n",
            choices: ["USD", "PKR", "EUR", "JPY", "SAR"],
        },
        {
            type: "list",
            name: "curr2",
            message: "Which Currency you want coversion to? \n",
            choices: ["USD", "PKR", "EUR", "JPY", "SAR"],
        },
        {
            type: "number",
            name: "value",
            message: "Enter the amount you want to convert \n"
        },
    ]);
    sleep();
    const yourAmount = await Conversion(answers.curr1, answers.curr2, answers.value);
    console.log(`The value of your ${chalk.blue(answers.value) + (answers.curr1)} in ${chalk.red(answers.curr2)} is ${chalk.green(yourAmount)}`);
}
Ask();
