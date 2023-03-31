interface Animal {
    name: string;
    runningSpeed: number
}

interface Bird {
    name: string;
    flyingSpeed: number
}

type Creature = Animal | Bird;

function log(creature: Creature) {
    if ("runningSpeed" in creature) { //type guards
        console.log(creature.runningSpeed);
    }

}