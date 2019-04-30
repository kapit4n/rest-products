var express = require('express');
var router = express.Router();

/* GET categories listing. */
router.get('/', function(req, res, next) {
  res.send(['Cat 1', 'Cat 2']);
});

module.exports = router;
