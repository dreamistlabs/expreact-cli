var express = require('express');
var router = express.Router();

var sampleUsers = [{
  id: 1,
  username: "KlausMikaelson"
}, {
  id: 2,
  username: "DeanWinchester"
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(sampleUsers);
});

module.exports = router;
