var express = require('express');
var router = express.Router();
var axios = require('axios');
var fs = require('fs')
/* GET home page. */
router.post('/oggihook', async function (req, res, next) {

  var origin = req.body.archivo
  
  writer(req);

  

  if(origin){
    var id = JSON.parse(origin)
    if (id) {
      let ids = id.OrderId
      var config = {
        method: 'get',
        url: `http://54.227.217.31:3000/cartaporteById?id=${ids}`,
        headers: {}
      };
      
      let r = await axios(config)
        .then(function (response) {
          return response
        })
        .catch(function (error) {
          return error
        });
    }
  }
  
  
  res.json({ "message": "Hello" })
});

router.get('/', function (req, res, next) {
  read(res)
});

const read = (res) => {
  fs.readFile('2pac.txt', 'utf-8', (err, data) => {
    if (err) {
      res.json({ Error: err })
    } else {
      res.json({data: data})
    }
  });
}

const writer = (req) => {



  fs.writeFile('2pac.txt', JSON.stringify(req.body), (err) => {
    if (err) throw err;
    // success case, the file was saved
    console.log('Lyric saved!');
  });
}

router.get('/j', (req, res) => {
  let xx = { "archivo": "{\"Domain\":\"Fulfillment\",\"OrderId\":\"1179162701790-01\",\"State\":\"handling\",\"LastState\":\"start-handling\",\"LastChange\":\"2021-11-26T19:47:45.6288233Z\",\"CurrentChange\":\"2021-11-26T19:47:46.2720515Z\",\"Origin\":{\"Account\":\"oggimexicoqa\",\"Key\":\"vtexappkey-oggimexicoqa-VMAZLZ\"}}" }
  console.log(JSON.parse(xx.archivo).OrderId)
})
module.exports = router
