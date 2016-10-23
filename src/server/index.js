
import Server from './webserver';
import Routes from './routes';
import './db';

var server = new Server();
server.setStaticServe('src');
server.use('/api', new Routes());
server.set('port', process.env.PORT || 8080);
server.start();




// import express from 'express';
// import bodyParser from 'body-parser';
// import routes from './routes';
// import mongoose from 'mongoose';

// var dbName='movieDB';
// var connectionString='mongodb://localhost:27017/'+dbName;
// mongoose.connect(connectionString);


// var app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(__dirname));
// app.use('/api', routes);
// app.listen(8080);




// var quotes = [
//     { who: 'Trump', what: 'I know words. I have the best words.' },
//     { who: 'Bender', what: 'Bite my shiny metal ass' },
//     { who: 'Teal\'c', what: 'Indeed.' },
//     { who: 'Tyler', what: 'Can I take your picture before I beat you up?' }
// ];








// var express = require('express');
// var bodyParser = require('body-parser');

// var app = express();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// var quotes = [
//     { who: 'Trump', what: 'I know words. I have the best words.' },
//     { who: 'Bender', what: 'Bite my shiny metal ass' },
//     { who: 'Teal\'c', what: 'Indeed.' },
//     { who: 'Tyler', what: 'Can I take your picture before I beat you up?' }
// ];

// app.use(express.static(__dirname));

// app.get('/quote/all', function (req, res) {
//     res.json(quotes);
// });

// app.get('/quote/random', function (req, res) {
//     var id = Math.floor(Math.random() * quotes.length);
//     var q = quotes[id];
//     res.json(q);
// });

// app.get('/quote/:id', function (req, res) {
//     if (quotes.length <= req.params.id || req.params.id < 0) {
//         res.statusCode = 404;
//         return res.send('Error 404: index not found');
//     }
//     var q = quotes[req.params.id];
//     res.json(q);
// });

// app.post('/quote', urlencodedParser, function (req, res) {
//     if (Object.hasOwnProperty.call(req.body, "who") === false || Object.hasOwnProperty.call(req.body, "what") === false) {
//         res.statusCode = 400;
//         return res.send('Error 400: Post syntax incorrect.');
//     }

//     var newQuote = {
//         who: req.body.who,
//         text: req.body.what
//     };

//     quotes.push(newQuote);
//     res.json(newQuote);
// });

// app.delete('/quote/:id', function (req, res) {
//     if (quotes.length <= req.params.id) {
//         res.statusCode = 404;
//         return res.send('Error 404: Index not found');
//     }
//     quotes.splice(req.params.id, 1);
//     res.json(true);
// });




// app.listen(8080);



