var express = require('express');
var router = express.Router();

const usersList = [
  {
    id: 1,
    name: 'admin',
    login: 'admin',
    password: 'admin'
  },
  {
    id: 2,
    name: 'guest',
    login: 'guest',
    password: 'guest'
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(usersList);
});

module.exports = router;
