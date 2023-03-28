// class Student {
//     // name: string;
//     // rollNo: number;

//     // short hand
//     private skill: string[] = [];
//     constructor(public name: string, public readonly rollNo: number) { }

//     addSkills(skills: string) {
//         this.skill.push(skills);
//     }
// }

// const student1 = new Student("Yasir", 321);
// student1.addSkills("JavaScript")
// console.log(student1)


//inheritance class and abstrac methods
// abstract class Product {
//     constructor(
//         private _id: number,
//         private _name: string,
//         private _price: number) { }


//     get id() {
//         return this._id;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(newName: string) {
//         if (!newName) {
//             throw new Error("Name cannot be empty");
//         }

//         this._name = newName;
//     }

//     get price() {
//         return this._price;
//     }

//     abstract getDiscount():number
// }

// class Clothing extends Product{
//     constructor(
//         id:number,
//         name:string,
//         price:number,
//         private color:string,
//         private size:"M" | "L" |"XL"
//         ){
//             super(id,name,price)
//         }

//         getDiscount(){
//            return this.price *0.9;
//         }
// }

// const tShirt = new Clothing(1,"T-Shirt",1000,"Blue","M");
// console.log(tShirt)

class Util {
    private static Instance: Util;
    private constructor() { }

    static getInstance() {
        if (this.Instance) {
            this.Instance = new Util();
        }

        return this.Instance;
    }
}

const utlInc = Util.getInstance();