const inquirer = require("inquirer");

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")


class TeamGenerator{
    constructor() {
        this.idCount = 0
        this.employees = []
    }

    runApp() {
        this.getInfo();
    }

    getInfo() {
        inquirer
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
                this.getManagerInfo(answers);
            } else if (answers.position === "Engineer") {
                this.getEngineerInfo(answers)
            } else {
                this.getInternInfo(answers);
            }
        })
        .then()
    }

    getManagerInfo(answers) {
        inquirer
            .prompt({
                type: "text" ,
                name: "officeNum",
                message: "What is their office number?"
            })
            .then(answer => {
                const manager = new Manager(answers.name, this.idCount, answers.email, answer.officeNum);
            })
    }

    getEngineerInfo() {
        inquirer
            .prompt({
                type: "text" ,
                name: "github",
                message: "What is github?"
            })
            .then(answer => {
                const engineer = new Engineer(answers.name, this.idCount, answers.email, answer.github);
            })
    }

    getInternInfo() {
        inquirer
            .prompt({
                type: "text" ,
                name: "school",
                message: "Where did they go to school?"
            })
            .then(answer => {
                const intern = new Intern(answers.name, this.idCount, answers.email, answer.school);
            })
    }
}

const teamGenerator = new TeamGenerator();
teamGenerator.runApp();