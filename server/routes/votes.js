const router = require('express').Router();
let Vote = require('../models/votes.model');

router.route('/').get((req, res) => {
  Vote.find()
    .then(votes => res.json(votes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const countryName = req.body.countryName;
  const votes = Number(req.body.votes);

  const newVote = new Vote({
    countryName,
    votes,

  });

  newVote.save()
  .then(() => res.json('Vote added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Vote.findById(req.params.id)
    .then(Vote => res.json(Vote))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Vote.findByIdAndDelete(req.params.id)
    .then(() => res.json('Vote deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Vote.findById(req.params.id)
    .then(Vote => {
        Vote.countryName = req.body.countryName;
        Vote.votes = Number(req.body.votes);

      Vote.save()
        .then(() => res.json('Vote updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
