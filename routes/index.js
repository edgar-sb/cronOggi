var express = require('express');
var router = express.Router();
var axios = require('axios');
var fs = require('fs')
/* GET home page. */
router.post('/oggihook', function (req, res, next) {
  let order = req

  let order_id = '1179120508091-01'

  if(req.body.archivo){
    order_id = req.body.archivo.OrderId
  }
  writer(order);

  var config = {
    method: 'get',
    url: `http://54.227.217.31:3000/cartaporteById?id=${order_id}`,
    headers: {}
  };

  axios(config)
    .then(function (response) {
      res.json({ "message": "Hello" })
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get('/', function (req, res, next) {
  read(res)
});

const read = (res) => {
  fs.readFile('2pac.txt', 'utf-8', (err, data) => {
    if (err) {
      res.json({ Error: err })
    } else {
      res.json({ archivo: data })
    }
  });
}

const writer = (h) => {
  fs.writeFile('2pac.txt', `${JSON.stringify(h.body)},  ----------------------- ${JSON.stringify(h.headers)}` , (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
  });
}
module.exports = router
