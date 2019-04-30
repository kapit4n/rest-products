var express = require('express');
var router = express.Router();

const customersList = [
  {
    id: 1,
    name: 'Luis Arce',
    address: 'Cochabamba Bolvia.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Luis_Su%C3%A1rez_2018.jpg/220px-Luis_Su%C3%A1rez_2018.jpg'
  },
  {
    id: 2,
    name: 'Hansel Arce',
    address: 'Santa Cruz Bolivia.',
    photo: 'https://www.filmofilia.com/wp-content/uploads/2013/01/Hansel-And-Gretel-Witch-Hunters-Jeremy-Renner.jpg'
  }
];

/* GET customers listing. */
router.get('/', function(req, res, next) {
  res.send(customersList);
});

module.exports = router;
