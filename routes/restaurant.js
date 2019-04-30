var express = require('express');
var router = express.Router();

const dishessList = [
  {
    id: 1, name: 'Spicy Honey-Brushed Chicken Thighs',
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fspicy-honey-brushed-chicken-thighs-ck.jpg%3Fitok%3Dx1uxdRw3&w=950&h=713&c=sc&poi=face&q=85",
    description: `...`
  }, {
    id: 2, name: 'Easy Baked Fish Fillets',
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F03142008%2Ffish-fillets-ck-222658-x.jpg%3Fitok%3DyrlNbKJ0&w=950&h=713&c=sc&poi=face&q=85",
    description: `...`
  }
];


/* feature description. */
router.get('/', function(req, res, next) {
  res.send('Main Dishes And Entrées');
});

/* GET dishes listing. */
router.get('/dishes', function(req, res, next) {
  res.send(dishesList);
});

module.exports = router;
