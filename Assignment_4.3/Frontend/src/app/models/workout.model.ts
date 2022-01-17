export class Workout {
    _id: string = "";
    workout: {
        name: string,
        date: Date,
        workoutType: {
            workoutName: string,
            weight: Number,
            reps: Number
        }
    } | any;
    profileId: string = "";
}