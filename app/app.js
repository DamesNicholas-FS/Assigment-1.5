const express = require('express');
const app = express();
const cors = require('cors');
const router = require('../router/router');
const { application } = require('express');

//middleware
app.use(cors());

//middleware to parse JSON
app.use(express.json());
app.use("/exercise", router);

// handle errors
app.use((req,res,next)=>{
    const error = new Error("Not Found!!!");
    error.status = 404;
    next(error);

})

//next Middleware
app.use((error, req,res,next)=>{
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
        }
    })
})

module.exports = app;