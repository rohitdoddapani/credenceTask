const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model('Movies',MovieSchema);