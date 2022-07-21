const router = require('express').Router();
let Vote = require('../models/votes.model');

router.route('/').get((req, res) => {
  Vote.find()
    .then(vote => res.json(vote))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/add').post((req, res) => {
  const countryName = req.body.countryName;
  const votes = req.body.votes;

  const newVote = new Vote({countryName, votes,});

  newVote.save()
    .then(() => res.json('Vote added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
