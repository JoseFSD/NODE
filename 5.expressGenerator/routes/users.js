var express = require('express');
var router = express.Router();

//localhost:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//localhost:3000/ejemplo
router.get('/ejemplo',(req,res) => {
  res.send('texto de ejemplo')
})

module.exports = router;
