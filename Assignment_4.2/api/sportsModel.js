var mongoose = require('mongoose');

//schema
var sportsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rushingYards: {
        type: Number,
        required: true
    },
    touchdownsThrown: {
        type: Number,
        required: true
    },
    sacks: {
        type: Number,
        required: true
    },
    madeFieldGoals: {
        type: Number,
        required: true
    },
    missedFieldGoals: {
        type: Number,
        required: true
    },
    catchesMade: {
        type: Number,
        required: true
    }
});

// Export Sports Model
var Sports = module.exports = mongoose.model('FakeFootball', sportsSchema, 'FakeFootball');

module.exports.get = function (callback, limit) {
   Sports.find(callback).limit(limit);
}