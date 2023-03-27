//type Ristricted object 
type Employee = {
    name: string;
    salary: number;
    workingLang: string[];
    email?: string
}

//created object 
let employee: Employee = {
    name: "abdul munim",
    salary: 90000,
    workingLang: ["HTML", "JS"]
}

employee.email = "test@gmail.com";

//created arry of employee object
let employees: Employee[] = [];
employees.push({
    name: "Imran",
    salary: 100000,
    workingLang: ["php", "python"]
})

//function type
// let add = function (val1:number,val2:number,cb:((x:string)=>void)):number {
//     cb("Hello");
//     return val1 + val2;
// }

// let func : (x:number,y:number,cb:((x:string)=>void))=>number;
// func = add;

//type littrels
type Calc = "add" | "subtract";
const add = (val1: number, val2: number, calc: Calc) => {
    if (calc === "add") {
        return val1 + val2;
    } else if (calc === "subtract") {
        return val1 - val2;
    }
}
