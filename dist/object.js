"use strict";
//created object 
let employee = {
    name: "abdul munim",
    salary: 90000,
    workingLang: ["HTML", "JS"]
};
employee.email = "test@gmail.com";
//created arry of employee object
let employees = [];
employees.push({
    name: "Imran",
    salary: 100000,
    workingLang: ["php", "python"]
});
const add = (val1, val2, calc) => {
    if (calc === "add") {
        return val1 + val2;
    }
    else if (calc === "subtract") {
        return val1 - val2;
    }
};
//# sourceMappingURL=object.js.map