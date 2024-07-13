#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let program = () => {
    return new Promise((res) => { setTimeout(res, 2000); });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('\n\t\t\t\ WELCOME TO OOP (Object Oriented Program).\n');
    await program();
    rainbowTitle.stop();
}
await welcome();
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const person = new Person();
const programmStart = async (person) => {
    do {
        console.log(chalk.bold.yellow(`\nWELCOME!\n`));
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "To whom would would you like to speak???\n",
            choices: ["Myself", "student", "exit"],
        });
        if (ans.select == "Myself") {
            console.log("\nHello I'm talking Myself. I'm GOOD....");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "\nwhich student would you like to talk?🤔\nPlease Enter Student Name:",
                name: "student"
            });
            const student = person.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                person.addStudent(name);
                console.log(`\nHello  I'm ${name.name}, and I'm fine. Nice to talk to you.🙂`);
                console.log("Current student list:📃");
                console.log(person.students);
            }
            else {
                console.log(`Hello I am ${student.name}, Nice to talk to you again`);
                console.log("Existing student list");
                console.log(person.students);
            }
        }
        else if (ans.select == "exit") {
            console.log(chalk.bold.magentaBright `Existing the Program`);
            console.log(chalk.bold.greenBright `\t\t\tThankyou for using my OOP🫠 🫠`);
            process.exit();
        }
    } while (true);
};
programmStart(person);
