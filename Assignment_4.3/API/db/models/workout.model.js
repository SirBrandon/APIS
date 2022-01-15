const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    workout: {
        type: Object,
        required: true,
        profileId: { type: String, required: true, unique: true },
        name: String,
        date: Date.now,
        workoutType: {
            type: Object,
            required: true,
            workoutName: { type: String, required: true, minlength: 1, trim: true },
            weight: { type: Number, required: true },
            reps: { type: Number, required: true }
        }
    }
});

const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = { Workout };