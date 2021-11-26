var express = require('express');
var router = express.Router();
var axios = require('axios');
var fs = require('fs')
/* GET home page. */
router.post('/oggihook', async function (req, res, next) {

  let order_id = req.body.archivo ? req.body.archivo.OrderId || req.body.archivo.hookConfig : '1179132331084-01'

  writer(req, order_id, req.body.archivo || { 'n/a': 'n/a' });

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

const writer = (h, order_id, mess) => {
  fs.writeFile('2pac.txt', `${JSON.stringify(h.body)},  ----------------------- ${JSON.stringify(h.headers)} ${String(order_id)} ${JSON.stringify(mess)}`, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
  });
}
module.exports = router
