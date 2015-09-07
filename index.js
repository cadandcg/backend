var 
    colors = require('colors/safe'),
    express = require('express'),
    search = require('./lib/search'),
    app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/search', function (request, response, next) {
    search(request.query.q, function (err, tweets) {
    if (err) return next(err);
        response.render('search', { results: tweets, search: request.query.q });
    });
});

app.listen(app.get('port'), function() {
  console.log(colors.rainbow('Node app is running on port'), app.get('port'));
});

