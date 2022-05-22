import {CricketCoach} from "./CricketCoach";
import {GoftCoach} from "./GoftCoach";
import {Coach} from "./Coach";

let myCricketCoach = new CricketCoach();
let myGoftCoach = new GoftCoach();

let theCoaches: Coach[]=[];
theCoaches.push(myGoftCoach);
theCoaches.push(myCricketCoach);

for (let theCoach of theCoaches) {
    console.log(theCoach.getDailyWorkout());
}

