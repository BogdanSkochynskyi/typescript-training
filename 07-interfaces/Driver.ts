import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let myCoaches: Coach[] = [];

myCoaches.push(myCricketCoach);
myCoaches.push(myGolfCoach);

for (let coach of myCoaches) {
    console.log(coach.getDailyWorkout());
}