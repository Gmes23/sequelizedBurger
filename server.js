//dependecies
var Sequelize = require('sequelize');
var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = 3000;
var connection = new Sequelize('burgers_db', 'root', 'nothing');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

//
// app.get('/burgers/:id', function(req, res) {
//     connection.query('SELECT * FROM burgers WHERE id = ?', [req.params.id], function(err, data) {
//       if (err) throw err;
//       console.log(data);
//       res.render('index', {burgers:data[0]});
//     });
// });
// app.get('/', function(req,res) {
//     connection.query('SELECT * FROM burgers;', function(err, data) {
//       if (err) throw err;
//       console.log(data);
//       res.render('index', {burgers:data});
//     });
// });
// app.post('/create', function(req,res){
//     connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [req.body.newBurgers], function(err, result) {
//       if (err) throw err;
//       res.redirect('/');
//     });
// });
//
// app.put('/burgers/update/:id', function(req, res) {
//     connection.query('UPDATE burgers SET devoured = ? WHERE id = ? ', [req.body.eatBurger, req.params.id], function(err, result) { //what does param do, why is mine 1 = true
//
//       if (err) throw err;
//       res.redirect('/');
//     });
// });
//


app.listen(PORT);
