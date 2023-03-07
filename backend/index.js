const express = require('express');
const mongoose = require("mongoose");
const multer = require("multer");
const route = require("./route")
const cors=require("cors")

const app = express();
app.use(express.json())
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
    res.header(
        'Access-Control-Allow-headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
     res.header('Access-Control-Allow-Credentials', true);

    next();
});

mongoose.set('strictQuery', true)

app.use(multer().any())

mongoose.connect("mongodb+srv://madhusmita_123:5fiVrKsOKBIGJsKe@cluster0.cpbhduk.mongodb.net/postblog", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);


app.use("/*", function (req, res) {
    return res.status(400).send({ status: false, msg: "Path not found" })
})

app.listen(3000, function () {

    console.log('port is running on 3000' )

});