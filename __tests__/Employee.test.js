const Employee = require("../lib/Employee")

test("creates an employee object", () => {
    const employee = new Employee("John", "1", "email@email.com");

    expect(employee.name).toBe("John");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("email@email.com");
    expect(employee.role).toBe("Employee");
    
});
