
var express = require('express');
var router = express.Router();

const championshipsList = [
  {
    id: 1,
    order: 4,
    name: "Champions league",
    description: "Championship description",
    img: "assets/champions_league_banner.jpg",
    banner: "assets/champions_league_banner.jpg",
    groups: true,
    newsletters: [
      {
        id: 1,
        title: "Messi, with 80 million euros, tops the Forbes list of best-paid Latinos",
        description: "Of the ten best-paid Latinos in the entertainment industry in 2017, Argentinian Lionel Messi, Barcelona's star player, tops the list. Messi had earned 80 million dollars until last June, making him the highest paid footballer in the world.",
        date: "12/01/2018",
        img: "http://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/12/28/15144398998516.jpg"
      },
      {
        id: 1,
        title: "Messi: Real Madrid's bogeyman",
        description: "After a magnificent year, Lionel Messi put the icing on the cake with a superb display at the Estadio Santiago Bernabeu to give his side victory in Saturday's Clasico.The Argentine has a special motivation when he plays against Real Madrid, and even more so when its on the turf of the Bernabeu.In fact, he has won more Clasicos in Madrid than he has at the Camp Nou.",
        date: "12/01/2018",
        img: "http://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/12/24/15141207556649.jpg"
      }
    ]
  },
  {
    id: 2,
    order: 2,
    name: "La Liga",
    description: "La liga is a championship from Spain",
    img: "http://files.laliga.es/seccion_logos/laliga-h-16-9.jpg",
    banner: "https://img.planetafobal.com/2016/07/camisetas-de-laliga-de-espana-2016-2017-ds.jpg",
    groups: false
  },
  {
    id: 3,
    order: 3,
    name: "Copa Libertadores",
    description: "The CONMEBOL Libertadores, named as Copa Libertadores de América, is an annual international club football competition organized by CONMEBOL since 1960. It is one of the most prestigious tournaments in the world and the most prestigious club competition in South American football.",
    img: "https://sportzwiki.com/wp-content/uploads/2016/07/Copa-Libertadores.jpg",
    banner: "https://sportzwiki.com/wp-content/uploads/2016/07/Copa-Libertadores.jpg",
    groups: false
  },
  {
    id: 4,
    order: 1,
    name: "Copa Sudamericana",
    description: "The CONMEBOL Sudamericana, named as Copa Sudamericana is an annual international club football competition organized by the CONMEBOL since 2002. It is the second-most prestigious club competition in South American football. CONCACAF clubs were invited between 2004 and 2008.",
    img: "https://d1z84dbvyxsz7j.cloudfront.net/article/2018/06/04/p7VepKmIUXzq.jpg",
    banner: "https://d1z84dbvyxsz7j.cloudfront.net/article/2018/06/04/p7VepKmIUXzq.jpg",
    groups: false,
    newsletters: [
      {
        id: 1,
        title: "Fechas confirmadas para la Recopa Sudamericana entre River y Paranaense",
        description: "La Conmebol hizo oficial la programación, que será en mayo: el miércoles 22 la ida en Brasil y el miércoles 29 la revancha en Buenos Aires. De esta manera, River ya habrá cumplido las dos fechas de sanción en las que debe jugar sin público, y el partido definitorio se jugará con la gente del Millonario en el Monumental.",
        date: "01/24/2019",
        img: "https://media.tycsports.com/files/2019/01/24/39689/recopa-sudamericana_862x485.jpg?v=2"
      },
      {
        id: 1,
        title: "Binacional: este es plantel que enfrentará a Independiente de Argentina en la Copa Sudamericana",
        description: "Binacional: este es plantel que enfrentará a Independiente de Argentina en la Copa Sudamericana ",
        date: "01/22/2019",
        img: "http://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/12/24/15141207556649.jpg"
      }
    ]
  }
];

/* GET customers listing. */
router.get('/', function(req, res, next) {
  res.send(championshipsList);
});

module.exports = router;
