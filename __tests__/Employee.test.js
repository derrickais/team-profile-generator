const Employee = require("../lib/Employee")

test("creates an employee object", () => {
    const employee = new Employee("John", "1", "email@email.com");

    expect(employee.getName()).toBe("John");
    expect(employee.getId()).toBe("1");
    expect(employee.getEmail()).toBe("email@email.com");
    expect(employee.getRole()).toBe("Employee");
    
});
