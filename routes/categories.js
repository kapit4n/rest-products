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
            price: 10,
            quantity: 10,
            img: "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg",
            description: "A banana is a curved, yellow fruit with a thick skin and soft sweet flesh. ... It grows in bunches on a banana tree. To 'go bananas' is a slangy way of saying 'go crazy' or act ridiculous, and if someone refers to the 'top banana,' they mean the most important person in a particular group."
          },
          {
            id: 2,
            name: "PineApple",
            price: 20,
            quantity: 50,
            img: "https://www.organicfacts.net/wp-content/uploads/pineapplecalories.jpg",
            description: "Pineapple, Ananas comosus, is an herbaceous biennial or perennial plant in the family Bromeliaceae grown for its edible fruit. The pineapple plant has a short stout stem and a rosette of sword-shaped leaves with needle-like tips. ... Pineapple originates from the tropical regions of the Americas."
          },
          {
            id: 3,
            name: "Orange",
            price: 15,
            quantity: 100,
            img: "http://soappotions.com/wp-content/uploads/2017/10/orange.jpg",
            description: "The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae. ... Orange trees are widely grown in tropical and subtropical climates for their sweet fruit. The fruit of the orange tree can be eaten fresh, or processed for its juice or fragrant peel."
          },

        ]
      },
      {
        id: 2,
        name: "Vegetables",
        img: "https://cyfsa.blob.core.windows.net/live/Newsletters/Jazz-up-your-veg.jpg",
        products: [
          {
            id: 1,
            name: "Aubergine",
            price: 25,
            quantity: 80,
            img: "https://www.zoomsearchengine.com/zoom/demos/fruitshop/images/aubergine_-_eggplant.jpg",
            description: "Eggplant (US), aubergine (UK), or brinjal (South Asia and South Africa) is a plant species in the nightshade family Solanaceae, Solanum melongena, grown for its often purple edible fruit. ... As a member of the genus Solanum, it is related to the tomato and the potato."
          },
          {
            id: 2,
            name: "Broccoflower",
            price: 30,
            quantity: 38,
            img: "https://veggiesinfo.com/wp-content/uploads/2016/09/Broccoflower-600x372.jpg",
            description: "Broccoflower refers to either of two edible plants of the species Brassica oleracea with light green heads. ... Broccoli and cauliflower are different cultivars of the same species, and as such are fully cross compatible by hand pollination or natural pollinators."
          }
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
