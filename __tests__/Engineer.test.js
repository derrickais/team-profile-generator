const Engineer = require("../lib/Engineer");

test("creates updated Engineer object", () => {
    const engineer = new Engineer("Melinda Beth", "3", "melindabeth1984@yahoo.com", "melindagitsit")

    expect(engineer.getName()).toBe("Melinda Beth");
    expect(engineer.getId()).toBe("3");
    expect(engineer.getEmail()).toBe("melindabeth1984@yahoo.com");
    expect(engineer.getRole()).toBe("Engineer");
    expect(engineer.getGitHub()).toBe("https://github.com/melindagitsit");    
});