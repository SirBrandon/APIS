//Import Sports Model
Sports = require('./sportsModel');

//For index
exports.index = function (req, res) {
    Sports.get(function (err, FakeFootball) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        return res.json({
            status: "success",
            message: "Got Players Successfully!",
            data: FakeFootball       
        });
    });
};

//For creating new sports
exports.add = function (req, res) {
    var sports = new Sports();
    sports.name = req.body.name? req.body.name: sports.name;
    sports.rushingYards = req.body.rushingYards;
    sports.touchdownsThrown = req.body.touchdownsThrown;
    sports.sacks = req.body.sacks;
    sports.madeFieldGoals = req.body.madeFieldGoals;
    sports.missedFieldGoals = req.body.missedFieldGoals;
    sports.catchesMade = req.body.catchesMade;

    //Save and check error
    sports.save(function (err) {
        if (err)
            res.json(err);

        return res.json({
            message: "New Player Added!",
            data: sports
        });
    });
};

//View Sports
exports.view = function (req, res) {
    Sports.findById(req.params.sports_id, function (err, sports) {
        if (err)
            res.send(err);
        return res.json({
            message: 'Player Details',
            data: sports
        });
    });
};

// Update Sports
exports.update = function (req, res) {
    Sports.findById(req.params.sports_id, function (err, sports) {
        if (err)
            res.send(err);
        sports.name = req.body.name? req.body.name: sports.name;
        sports.rushingYards = req.body.rushingYards;
        sports.touchdownsThrown = req.body.touchdownsThrown;
        sports.sacks = req.body.sacks;
        sports.madeFieldGoals = req.body.madeFieldGoals;
        sports.missedFieldGoals = req.body.missedFieldGoals;
        sports.catchesMade = req.body.catchesMade;

        //save and check errors
        sports.save(function (err) {
            if (err)
                res.json(err)
            return res.json({
                message: "Player Updated Successfully",
                data: sports
            });
        });
    });
};

// Delete Sports
exports.delete = function (req, res) {
    Sports.deleteOne({
        _id: req.params.sports_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        return res.json({
            status: "success",
            message: 'Player Deleted'
        });
    });
};

// Query Sports
exports.mostSacks = function (req, res) {
    Sports.get(function (err, FakeFootball) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        let most = 0;
        let player = 'none';
        FakeFootball.forEach(element => {
            if(element.sacks > most) {
                most = element.sacks;
                player = element.name;
            }
        });
        return res.json({
            status: "success",
            message: "Got Player with the most sacks!",
            Player: player
        });
    });
};

exports.fieldGoalsAscending = function (req, res) {
    Sports.get(function (err, FakeFootball) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        FakeFootball.sort((a, b) => b.madeFieldGoals - a.madeFieldGoals);
        return res.json({
            status: "success",
            message: "Sorted list of players by descending field goals!",
            Player: FakeFootball
        });
    });
}

exports.mostRushingYards = function (req, res) {
    Sports.get(function (err, FakeFootball) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        let most = 0;
        let player = 'none';
        FakeFootball.forEach(element => {
            if(element.rushingYards > most) {
                most = element.rushingYards;
                player = element.name;
            }
        });
        return res.json({
            status: "success",
            message: "Got Player with the most rushing yards!",
            Player: player
        });
    });
}

exports.leastRushingYards = function (req, res) {
    Sports.get(function (err, FakeFootball) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        let least = 1000000;
        let player = 'none';
        FakeFootball.forEach(element => {
            if(element.rushingYards < least) {
                least = element.rushingYards;
                player = element.name;
            }
        });
        return res.json({
            status: "success",
            message: "Got Player with the least rushing yards!",
            Player: player
        });
    });
}

exports.mostTouchdowns = function (req, res) {
    Sports.get(function (err, FakeFootball) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        let most = 0;
        let player = 'none';
        FakeFootball.forEach(element => {
            if(element.touchdownsThrown > most) {
                most = element.touchdownsThrown;
                player = element.name;
            }
        });
        return res.json({
            status: "success",
            message: "Got Player with the touchdowns thrown!",
            Player: player
        });
    });
}