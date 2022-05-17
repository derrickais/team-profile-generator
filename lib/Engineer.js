const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGitHub(){
        return `https://github.com/${this.github}`
    }

    getRole() { 
        return "Engineer";
    }

    engineerCard() {
        let cardHTML = this.cardHTML() 
        const engineerInfo = `
                <h3 class="github">GitHub: <a href="${this.getGitHub()}">${this.getGitHub()}</a></h3>
            </div>
        </div>
        `
        return cardHTML += engineerInfo
    }
    

}

module.exports = Engineer;