var express = require('express');

var app = express();

//set up handlebars view engine
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views/');
app.set('port', process.env.PORT || 8081);


//setup static middleware
app.use(express.static(__dirname + '/public'));

// Random JSON Data
var fortunes = [
	"Fear is the mind killer!",
	"Worry is unproductive!",
	"Whenever possible, keep it simple!",
	"Do not fear what you do not know!",
	"First try to understand, before you are understood!"];


//Additional Routing
app.get('/', function(req, res) {
	res.render('home');
});

//About routing
app.get('/about', function(res, res) {
        var randomFortune = fortunes[Math.floor(Math.random() *fortunes.length)];

	res.render('about', {fortune : randomFortune});
});

//404 catch-all handler (middleware)
app.use(function(req, res) {
	res.status(404);
	res.render('404');
});

//500 error handler (middleware)
app.use(function(err, req, res, next) {
	console.error(err, stack);
	res.status(500);
	res.render('500');

});


app.listen(app.get('port'), function(){
	console.log('Express started on http://192.168.10.168:' + app.get('port') + '; press Ctrl-C to terminate.');
}
);
