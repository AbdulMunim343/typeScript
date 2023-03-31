type Combined = string | number;

function comb(x:number, y: number):number;
function comb(x:string, y: string):string;
function comb(x:Combined, y: Combined) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    } else if (typeof x === "string" && typeof y === "string") {
        return x + y;
    } else {
        throw new Error("Types did not match")
    }
}

const value = comb("hello","world");
const value1 = comb(5,3) 
console.log(value1.toFixed())
console.log(value.split(" "));