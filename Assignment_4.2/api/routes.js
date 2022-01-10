//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Sports DB Initialization'
    });
});

//Import sports Controller
var sportsController = require('./sportsController');

// sports routes
router.route('/sports')
    .get(sportsController.index)
    .post(sportsController.add);

router.route('/sports/mostSacks')
    .get(sportsController.mostSacks);

router.route('/sports/fieldGoalsAscending')
    .get(sportsController.fieldGoalsAscending);

router.route('/sports/mostRushingYards')
    .get(sportsController.mostRushingYards);

router.route('/sports/leastRushingYards')
    .get(sportsController.leastRushingYards);

router.route('/sports/mostTouchdowns')
    .get(sportsController.mostTouchdowns);

router.route('/sports/:sports_id')
    .get(sportsController.view)
    .patch(sportsController.update)
    .put(sportsController.update)
    .delete(sportsController.delete);

//Export API routes
module.exports = router;