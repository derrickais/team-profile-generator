const Intern = require("../lib/Intern");

test("creates updated Intern object", () => {
    const intern = new Intern("Jack", "4", "jack@jones.com", "University of Arkansas")

    expect(intern.getName()).toBe("Jack");
    expect(intern.getId()).toBe("4");
    expect(intern.getEmail()).toBe("jack@jones.com");
    expect(intern.getRole()).toBe("Intern");
    expect(intern.getSchool()).toBe("University of Arkansas");    
});