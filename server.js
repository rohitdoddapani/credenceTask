const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const db = require('./config/db').database;


//Database connection
mongoose.connect( process.env.MONGO_URI || db,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => {
        console.log("Database connected successfully")
    })
    .catch((err) => {
        console.log("unable to connect to database ")
    });

//Defining the PORT
const port = process.env.PORT || 5000;


// Initialize bodyparser middleware
app.use(bodyParser.json())

// app.use((req,res,next) => {
//     res.status(200).json({
//         message: 'It works'
//     });
// })

//using Routes
app.use('/api',require('./routes/routes'))

//listening to server
app.listen(port,() => {
    console.log("server started on port ",port);
});
