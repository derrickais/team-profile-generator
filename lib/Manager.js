const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.officeNum = officeNum
    }

    getRole() {
        return "Manager";
    }

    managerCard() {
        let cardHTML = this.cardHTML() 
        const managerInfo = `
                <h3 class="office">Office Number: ${this.officeNum}></h3>
            </div>
        </div>
        `
        return cardHTML += managerInfo
    }
}

module.exports = Manager;