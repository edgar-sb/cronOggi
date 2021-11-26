var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/hookogg', function (req, res, next) {
  let order = req.headers['order_id'];
  var config = {
    method: 'get',
    url: 'http://${ip}:3000/cartaporteById?id=1175302482041-01',
    headers: {}
  };

  res.json({ "message": "Hello" })
  

  // axios(config)
  //   .then(function (response) {
  //     res.json({ "message": "Hello" })
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

 
});

router.get('/', function (req, res, next) {
  res.json({ "message": "Hello" })
});
module.exports = router;
