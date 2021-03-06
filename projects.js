
var express = require('express');
var router = express.Router();

const projectsList = [
  {
    "id": 1,
    "name": "Project 1",
    "description": "A building, or edifice, is a structure with a roof and walls standing more or less permanently in one place, such as a house or factory. Wikipedia",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Forsyth_Barr_Building%2C_Christchurch_02.JPG/240px-Forsyth_Barr_Building%2C_Christchurch_02.JPG" 
  },
  {
    "id": 2,
    "name": "Project 2",
    "description": "Project 2 description",
    "img": "https://5.imimg.com/data5/CJ/YE/MY-37298931/building-construction-500x500.jpg" 
  }
];

/* GET customers listing. */
router.get('/', function(req, res, next) {
  res.send(projectsList);
});

module.exports = router;
