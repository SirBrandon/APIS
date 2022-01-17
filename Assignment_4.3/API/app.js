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

/**
 * DELETE
 * Purpose: Delete a profile and all associated workouts and health information
 */
app.delete('/profiles/:profileId', (req, res) => {
    Profile.findOneAndRemove({
        _id: req.params.profileId
    }).then((removedProfileDoc) => {
        res.send(removedProfileDoc);
        deleteProfileAssociation(removedProfileDoc._id);
    })
})

// WORKOUT ROUTES
/**
 * GET /profiles/:profileId/workouts
 * Purpose: Get all workout information
 */
app.get('/profiles/:profileId/workouts', (req, res) => {
    Workout.find({
        profileId: req.params.profileId
    }).then((workouts) => {
        res.send(workouts);
    }).catch((e) => {
        res.send(e);
    });
});

/**
 * POST /profiles/:profileId/workouts
 * Purpose: Create a workout
 */
app.post('/profiles/:profileId/workouts', (req, res) => {
    let newWorkout = new Workout({
        workout: {
            name: req.body.workout.name,
            date: req.body.workout.date,
            workoutType: {
                workoutName: req.body.workout.workoutType.workoutName,
                weight: req.body.workout.workoutType.weight,
                reps: req.body.workout.workoutType.reps
            }
        },
        profileId: req.body.profileId
    });
    newWorkout.save().then((workoutDoc) => {
        res.send(workoutDoc);
    });
});

/**
 * PATCH /profiles/:profileId/workouts/:workoutId
 * Purpose: Update a workout
 */
app.patch('/profiles/:profileId/workouts/:workoutId', (req, res) => {
    Workout.findOneAndUpdate({
        profileId: req.params.profileId,
        _id: req.params.workoutId
    }, {
        $set: req.body
    }).then(() => {
        res.send({message: 'Update Successful'});
    }).catch((e) => {
        res.send(e);
    });
});

/**
 * DELETE /profiles/:profileId/workouts/:workoutId
 * Purpose: Delete a workout
 */
app.delete('/profiles/:profileId/workouts/:workoutId', (req, res) => {
    Workout.findOneAndRemove({
        profileId: req.params.profileId,
        _id: req.params.workoutId
    }).then((RemovedWorkoutDoc) => {
        if (RemovedWorkoutDoc) {
            res.send(RemovedWorkoutDoc);
        }
        else {
            res.sendStatus(404);
        }
    });
});

/* HELPER METHODS */
let deleteProfileAssociation = (_profileId) => {
    Workout.deleteMany({
        profileId: _profileId
    }).then(() => {
        console.log("Workouts from " + _profileId + " were deleted");
    })
}

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});