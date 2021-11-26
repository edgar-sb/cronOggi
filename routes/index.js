var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.post('/hookogg', function (req, res, next) {
  let order = req.headers['order_id'];
  var config = {
    method: 'get',
    url: 'http://54.227.217.31:3000/cartaporteById?id=1175302482041-01',
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
  res.json({ "message": "Hello" })
});
module.exports = router;
