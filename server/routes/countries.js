const router = require('express').Router();
let Country = require('../models/countries.model');

router.route('/').get((req, res) => {
  Country.find()
    .then(countries => res.json(countries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const countryName = req.body.countryName;
  const visited = Boolean(req.body.visited);
  const visitDateStart = Date.parse(req.body.visitDateStart);
  const visitDateEnd = Date.parse(req.body.visitDateEnd);
  const lived = Boolean(req.body.lived);
  const liveDateStart = Date.parse(req.body.liveDateStart);
  const liveDateEnd = Date.parse(req.body.liveDateEnd);

  const newCountry = new Country({
    countryName,
    visited,
    visitDateStart,
    visitDateEnd,
    lived,
    liveDateStart,
    liveDateEnd,
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
        country.visited = Boolean(req.body.visited);
        country.visitDateStart = Date.parse(req.body.visitDateStart);
        country.visitDateEnd = Date.parse(req.body.visitDateEnd);
        country.lived = Boolean(req.body.lived);
        country.liveDateStart = Date.parse(req.body.liveDateStart);
        country.liveDateEnd = Date.parse(req.body.liveDateEnd);

      country.save()
        .then(() => res.json('Country updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
