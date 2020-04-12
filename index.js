const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/comments',require('./routes/comment.routes'));
app.use('/api/movie',require('./routes/movie.routes'))


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);