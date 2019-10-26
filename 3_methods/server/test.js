try {
    const express = require('express');
    // const cors = require('cors');
    const bodyParser = require('body-parser');
    const appServer = express();
    const path = require('path');
    const port = 8000;
    // const url = require('url');
    // const fs = require('fs');

    // console.log(__dirname + "/public");
    // appServer.use(express.static(path.join(__dirname, '/../client/')));

    appServer.use(express.static("./public"));
    appServer.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE");
        res.header("Access-control-Allow-Headers", 'Content-Type, Authorization, Access-control-Allow-Headers');
        next();
      });

    appServer.get('/', function (req, res) {
        res.sendFile(__dirname + "/index.html");
    });

    appServer.post('/postReq', (req, res) => {
        res.send("This is a 'POST' Request..!!");
    });

    appServer.put('/putReq', (req, res) => {
        res.send("This is a 'PUT' Request..!!");
    });

    appServer.delete('/deleteReq', (req, res) => {
        res.send("This is a 'DELETE' Request..!!");
    });

    appServer.listen(port, () => {
        console.log("OK on port: " + port);
    });
} catch (error) {
    console.log("Error occured: " + error);
}