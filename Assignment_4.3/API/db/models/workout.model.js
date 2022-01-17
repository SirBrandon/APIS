const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    workout: {
        type: Object,
        required: true,
        name: String,
        date: { type: Date, required: true},
        workoutType: {
            type: Object,
            required: true,
            workoutName: { type: String, required: true, minlength: 1, trim: true },
            weight: { type: Number, required: true },
            reps: { type: Number, required: true }
        }
    },
    profileId: { type: String, required: true },
});

const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = { Workout };