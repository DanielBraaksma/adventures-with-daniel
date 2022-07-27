const router = require('express').Router();
let Country = require('../models/countries.model');

router.route('/').get((req, res) => {
  Country.find()
    .then(countries => res.json(countries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const countryName = req.body.countryName;
  const yearVisited = req.body.yearVisited;
  const lived = req.body.lived;
  const stayLength = req.body.stayLength;


  const newCountry = new Country({
    countryName,
    yearVisited,
    lived,
    stayLength,
  });

  newCountry.save()
  .then(() => res.json('Country added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Country.findById(req.params.id)
    .then(country => res.json(country))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Country.findByIdAndDelete(req.params.id)
    .then(() => res.json('Country deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Country.findById(req.params.id)
    .then(country => {
        country.countryName = req.body.countryName;
        country.yearVisited = req.body.yearVisited;
        country.lived = req.body.lived;
        country.stayLength = req.body.stayLength;

      country.save()
        .then(() => res.json('Country updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
