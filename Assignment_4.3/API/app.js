const express = require('express');
const app = express();
const {mongoose} = require('./db/mongoose');
const bodyParser = require('body-parser');

// Load in the mongoose models
const { Profile, Workout, Health } = require('./db/models');

// MIDDLEWARE
// Load middleware
app.use(bodyParser.json());

// CORS HEADERS MIDDLEWARE
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");
    res.header("Access-Control-Expose-Headers","x-access-token, x-refresh-token");
    next();
});

// ROUTE HANDLERS

// PROFILE ROUTES
app.get('/profiles', (req, res) => {
    Profile.find({}).then((profiles) => {
        res.send(profiles);
    }).catch((e) => {
        res.send(e);
    });
});

app.post('/profiles', (req, res) => {
    let newProfile = new Profile({
        profile: req.body.profile
    });
    newProfile.save().then((profileDoc) => {
        res.send(profileDoc);
    });
});

// WORKOUT ROUTES
/**
 * GET /workouts
 * Purpose: Get all workout information
 */
app.get('/workouts', (req, res) => {
    Workout.find({}).then((workouts) => {
        res.send(workouts);
    }).catch((e) => {
        res.send(e);
    });
});

/**
 * POST /workouts
 * Purpose: Create a workout
 */
app.post('/workouts', (req, res) => {
    let newWorkout = new Workout({
        workout: {
            name: req.body.workout.name,
            workoutType: {
                workoutName: req.body.workout.workoutType.workoutName,
                weight: req.body.workout.workoutType.weight,
                reps: req.body.workout.workoutType.reps
            }
        }
    });
    newWorkout.save().then((workoutDoc) => {
        res.send(workoutDoc);
    });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});