class Employee {
    constructor (name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

    cardHTML() {
        return `
        <div class="card"> 
        <div class="heading">
            <h1 class="name"> ${this.getName()} </h1>
            <h1 class="role"> ${this.getRole()} </h1>
        </div>
    
        <div class="content">
            <h3 class="id"> ID: ${this.getId()} </h3>
            <h3 class="email"> Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></h3> 
        `
    }
}

module.exports = Employee;