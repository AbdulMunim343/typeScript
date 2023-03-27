"use strict";
class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        // name: string;
        // rollNo: number;
        // short hand
        this.skill = [];
    }
    addSkills(skills) {
        this.skill.push(skills);
    }
}
const student1 = new Student("Yasir", 321);
student1.addSkills("JavaScript");
console.log(student1);
//# sourceMappingURL=class.js.map