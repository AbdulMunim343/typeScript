class Student {
    // name: string;
    // rollNo: number;

    // short hand
    private skill: string[] = [];
    constructor(public name: string, public readonly rollNo: number) { }

    addSkills(skills: string) {
        this.skill.push(skills);
    }
}

const student1 = new Student("Yasir", 321);
student1.addSkills("JavaScript")
console.log(student1)