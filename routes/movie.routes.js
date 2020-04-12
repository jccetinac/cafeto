const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// save

router.post( '/', async (req, res) => {   
    const {rating, idmovie, email} = req.body;
    console.log(req.body);
    const movie = new Movie({rating, idmovie, email});
    await movie.save();
    res.json({status: 'Movie was created'});
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
    const { id, rating, idmovie, email } = req.body;
    const newMovie= { id, rating, idmovie, email};
    await Movie.findByIdAndUpdate( id, newMovie);
    res.json({status: 'Movie Rating Updated'});
  });

// GET
router.get( '/',async (req, res) => {
  const movie= await Movie.find();
  console.log(movie);
  res.json(movie);
});

module.exports = router; 