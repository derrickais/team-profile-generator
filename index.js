const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")


class TeamGenerator{
    constructor() {
        this.idCount = 1
        this.employees = []
    }

    runApp() {
        this.getInfo()
    }

    getInfo() {
        return inquirer
            .prompt([{
                type: "text" ,
                name: "name",
                message: "What is their name?"
            },
            {
                type: "text" ,
                name: "email",
                message: "What is their email?"
            },
            {
                type: "list" ,
                name: "position",
                message: "What is their position?",
                choices: ["Manager","Engineer","Intern"]
            }
        ])
        .then(answers => {
            if (answers.position === "Manager"){
                return this.getManagerInfo(answers)
            } else if (answers.position === "Engineer") {
                return this.getEngineerInfo(answers)
            } else {
                return this.getInternInfo(answers)
            }
        })
    }

    checkDone() {
        return inquirer
            .prompt({
                type: "confirm" ,
                name: "newEmployee",
                message: "Would you like to add another employee?"
            })
            .then(answer => {
                console.log(answer);
                if(answer.newEmployee === true) {
                    this.idCount++
                    this.getInfo()
                } else {
                    this.generateHTML();
                    return this.employees;
                }
            })
    }

    getManagerInfo(answers) {
        return inquirer
            .prompt({
                type: "text" ,
                name: "officeNum",
                message: "What is their office number?"
            })
            .then(answer => {
                const manager = new Manager(answers.name, this.idCount, answers.email, answer.officeNum);
                this.employees.push(manager);
            })
            .then(() => {
                this.checkDone()
            })
    }

    getEngineerInfo(answers) {
        return inquirer
            .prompt({
                type: "text" ,
                name: "github",
                message: "What is github?"
            })
            .then(answer => {
                const engineer = new Engineer(answers.name, this.idCount, answers.email, answer.github);
                this.employees.push(engineer);

            })
            .then(() => {
                this.checkDone()
            })
    }

    getInternInfo(answers) {
        return inquirer
            .prompt({
                type: "text" ,
                name: "school",
                message: "Where did they go to school?"
            })
            .then(answer => {
                const intern = new Intern(answers.name, this.idCount, answers.email, answer.school);
                this.employees.push(intern);
            })
            .then(() => {
                this.checkDone()
            })
    }

    generateHTML() {
        let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="styles.css">
            <title>My Team</title>
        </head>
        <body>
            <header>
                <h1 class="title">My Team</h1>
            </header>
        `

        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].getRole() === "Engineer") {
                html += this.employees[i].engineerCard();
            } else if (this.employees[i].getRole() === "Manager"){
                html += this.employees[i].managerCard();
            } else {
                html += this.employees[i].internCard();
            }
        }

        html += `
        </body>
        </html>        
        `

        this.writeToFile("./dist/team.html", html);
        this.copyFile("./style.css", "./dist/style.css");
    }

    writeToFile(fileName, data) {
        fs.writeFile(fileName,data, err => {
            if(err) throw new Error(err);
    
            console.log("File Created!")
        });
    }

    copyFile(file, fileName){
        fs.copyFile(file, fileName, err => {
            if(err) throw new Error(err);
    
            console.log("CSS Copied")
        });
    }
}

const teamGenerator = new TeamGenerator();
teamGenerator.runApp();