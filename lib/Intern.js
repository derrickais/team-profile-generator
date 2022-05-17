const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole() { 
        return "Intern";
    }

    internCard() {
        let cardHTML = this.cardHTML() 
        const internInfo = `
                <h3 class="school">School: ${this.getSchool()}</h3>
            </div>
        </div>
        `
        return cardHTML += internInfo
    }
}

module.exports = Intern;