const express = require('express');
const router = express.Router();
const Movie = require('../models/movies');

//get data
router.get('/',async (req,res)=> {
    try{
        const movies = await Movie.find();
        res.json(movies);
    }catch(err){
        res.json({message: err})
    }
});

//post data
router.post('/',(req,res) => {
    const { name,image,summary } = req.body;

    //simple validation
    if( !name || !image || !summary ) {
        return res.status(400).json({msg:'please enter all fields'});
    }
    const newMovie = new Movie({
        name,
        image,
        summary
    });

    
    newMovie.save()
        .then(movie => {
            res.json('movie details created');
        })
        .catch(err => {
            res.json({message: err})
        })
    })
module.exports = router;
