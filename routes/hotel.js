var express = require('express');
var router = express.Router();

const roomsList = [
  {
    id: 1, name: 'Single Room',
    img: "https://www.thonhotels.com/siteassets/hoteller/norge/oslo/thon-hotel-terminus/romtyper/small-single-room/thon-hotel-terminus-small-single-room-1.jpg?width=1100&height=550&mode=crop&quality=80",
    description: `The room comes with Dreamax bed (manufactured and 
    designed exclusively by Flex for Meliá Hotels International), a modern, 
    fully equipped bathroom finished ...`
  }, {
    id: 2, name: 'Double Room',
    img: "https://media-cdn.tripadvisor.com/media/photo-s/05/6f/52/8c/doubletree-by-hilton.jpg",
    description: `The room comes with Dreamax bed (manufactured and designed 
    exclusively by Flex for Meliá Hotels International), a modern, fully equipped bathroom finished ...`
  }, {
    id: 3, name: 'Tiple Room',
    img: "https://fishh.nnhotels.com/files/img/small/triple-room-hotel-u232-2-524.jpg",
    description: `The room comes with Dreamax bed (manufactured and designed 
    exclusively by Flex for Meliá Hotels International), a modern, fully equipped bathroom finished ...`
  }, {
    id: 4, name: 'Quad Room',
    img: "https://www.viewhotels.co.jp/asakusa/english/accommondations/images/fourth_img01.jpg",
    description: `The room comes with Dreamax bed (manufactured and designed 
    exclusively by Flex for Meliá Hotels International), a modern, fully equipped bathroom finished ...`
  }, {
    id: 5, name: 'Queen Room',
    img: "https://www.schloesslehotel.com/wp-content/uploads/2016/07/Superior-Garden-Queen-2.jpg",
    description: `The room comes with Dreamax bed (manufactured and designed 
    exclusively by Flex for Meliá Hotels International), a modern, fully equipped bathroom finished ...`
  }, {
    id: 6, name: 'King Room',
    img: "https://www.mgmresorts.com/content/dam/MGM/bellagio/hotel/resort-room-king-sapphire/architecture/bellagio-hotel-resort-room-king-sapphire.tif",
    description: `The room comes with Dreamax bed (manufactured and designed 
    exclusively by Flex for Meliá Hotels International), a modern, fully equipped bathroom finished ...`
  }
];



/* GET products listing. */
router.get('/', function(req, res, next) {
  res.send(['Porduct1', 'Product 2']);
});

/* GET cars listing. */
router.get('/rooms', function(req, res, next) {
  res.send(roomsList);
});

module.exports = router;
