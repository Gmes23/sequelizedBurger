var express = require('express');
var router = express.Router();
var burger = require('../models');
var migration = require('../migrations');

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
    res.render('index', {burgers: res});
});

router.post('/burgers/create', function (req, res) {
  models.burger.create({burgers_name: req.body.newBurgers});
  res.redirect('/burgers');
});

router.put('/burgers/update/:id', function (req, res) {
   burger({devoured: req.body.eatBurger});
  res.render('/burger');

});

module.exports = router;
