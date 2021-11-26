var express = require('express');
var router = express.Router();
var axios = require('axios');
var fs = require('fs')
/* GET home page. */
router.post('/', function (req, res, next) {
  let order = req.headers;
  writer({ "headers": JSON.stringify(order), "reqs": JSON.stringify(req), "res": JSON.stringify(res) });

  var config = {
    method: 'get',
    url: 'http://54.227.217.31:3000/cartaporteById?id=1179130486445-01',
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

const writer = (data) => {
  fs.writeFile('2pac.txt', JSON.stringify(data), (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
  });
}
module.exports = router
