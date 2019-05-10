var express = require('express');
var router = express.Router();

let categories = [
      {
        id: 1,
        name: "Fruits",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg",
        products: [
          {
            id: 1,
            name: "Banana",
            img: "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg"
          },
          {
            id: 2,
            name: "PineApple",
            img: "https://www.organicfacts.net/wp-content/uploads/pineapplecalories.jpg"
          },
          {
            id: 3,
            name: "Orange",
            img: "http://soappotions.com/wp-content/uploads/2017/10/orange.jpg"
          },

        ]
      }
    ];

/* GET categories listing. */
router.get('/', function(req, res, next) {
  res.send(categories);
});

router.get('/:catId', function(req, res, next) {
  let cat = categories.find(p => p.id == req.params['catId']);
  res.send(cat)
})

router.get('/:catId/products/:prodId', function(req, res, next) {
  let cat = categories.find(p => p.id == req.params['catId']);
  let prod = cat.products.find(p => p.id == req.params['prodId']);
  res.send(prod)
})

module.exports = router;
