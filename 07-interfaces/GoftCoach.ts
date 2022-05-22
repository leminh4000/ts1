import {Coach} from "./Coach";

export class GoftCoach implements Coach{
    getDailyWorkout(): string {
        return "Hit 100 balls at the goft range.";
    }
}