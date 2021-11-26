var express = require('express');
var router = express.Router();
var axios = require('axios');
var fs = require('fs')
/* GET home page. */
router.post('/oggihook', async function (req, res, next) {

  let order_id = JSON.stringify(req.body.archivo) ? JSON.stringify(req.body.archivo).OrderId : '1179132331084-01'

  writer(req);

  var config = {
    method: 'get',
    url: `http://54.227.217.31:3000/cartaporteById?id=${order_id}`,
    headers: {}
  };

  let r = await axios(config)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });

  console.log(r)
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
      res.json({ archivo: data })
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
  var x = {
    "Domain": "Fulfillment",
    "OrderId": "1179152377076-01",
    "State": "handling",
    "LastState": "start-handling",
    "LastChange": "2021-11-26T19:19:30.674381Z",
    "CurrentChange": "2021-11-26T19:19:31.3800443Z",
    "Origin": {
      "Account": "oggimexicoqa",
      "Key": "vtexappkey-oggimexicoqa-VMAZLZ"
    }
  }
  console.log(JSON.parse(x))
})
module.exports = router
