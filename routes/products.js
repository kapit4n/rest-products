var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.send(['Porduct1', 'Product 2']);
});

module.exports = router;
