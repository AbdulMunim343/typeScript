//decoratos use in classes
function Logger(messege: string) { //decorator fectory
    return function (constructor: Function) {//Decorator
        console.log("...Logging");
        console.log(messege)
    }
}

function FillHtml(template: string, elemId: string) { //decorator fectory
    return function (constructor: any) {//Decorator
        const elem = document.getElementById(elemId);
        const p = new constructor();
        if (elem) {
            elem.innerHTML = template;
            elem.querySelector("h1")!.innerText = p.name;
        }
    }
}

@FillHtml("<h1>Hello</h1>", "app")
@Logger("Calling Form Person")
class Person {
    name = "Ishaq";
    constructor() { }
}