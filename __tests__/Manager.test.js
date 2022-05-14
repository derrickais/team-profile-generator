const Manager = require("../lib/Manager");

test("creates updated Manager object", () => {
    const manager = new Manager("Jimmy", "2", "jimmy@johns.com", "578")

    expect(manager.getName()).toBe("Jimmy");
    expect(manager.getId()).toBe("2");
    expect(manager.getEmail()).toBe("jimmy@johns.com");
    expect(manager.getRole()).toBe("Manager");
    expect(manager.officeNum).toBe("578");    
});