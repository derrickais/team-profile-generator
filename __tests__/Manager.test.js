const Manager = require("../lib/Manager");

test("creates updated Manager object", () => {
    const manager = new Manager("Jimmy", "2", "jimmy@johns.com", "578")

    expect(manager.name).toBe("Jimmy");
    expect(manager.id).toBe("2");
    expect(manager.email).toBe("jimmy@johns.com");
    expect(manager.role).toBe("Manager");
    expect(manager.officeNum).toBe("578");    
});