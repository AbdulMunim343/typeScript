"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decoratos use in classes
function Logger(messege) {
    return function (constructor) {
        console.log("...Logging");
        console.log(messege);
    };
}
function FillHtml(template, elemId) {
    return function (constructor) {
        const elem = document.getElementById(elemId);
        const p = new constructor();
        if (elem) {
            elem.innerHTML = template;
            elem.querySelector("h1").innerText = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Ishaq";
    }
};
Person = __decorate([
    FillHtml("<h1>Hello</h1>", "app"),
    Logger("Calling Form Person")
], Person);
//# sourceMappingURL=decorators.js.map