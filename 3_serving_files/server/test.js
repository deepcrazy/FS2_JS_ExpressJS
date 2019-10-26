try {
    const express = require('express');
    const appServer = express();
    const port = 1080;
    const url = require('url');

    // appServer.use(express.logger());
    // appServer.set("view options", {layout: false});
    // appServer.use(express.static(__dirname + '/public'));

    // appServer.set('view engine', 'jade');    //  worked

    appServer.engine('html', require('ejs').renderFile);
    appServer.set('view engine', 'html');

    appServer.get('/', (req, res) => {
        res.sendFile(__dirname + "/index.html");
    });

    appServer.get('/:id', (req,res) => {
        // console.log("coming home..!!");
        // console.log(__dirname);
        if (req.params.id == 'home'){
            res.sendFile(__dirname + "/public/home.html");
        }
        if (req.params.id == "login"){
            res.sendFile(__dirname + "/public/login.html");
        }
        if (req.params.id == 'contact'){
            res.sendFile(__dirname + "/public/contactUs.html");
        }
        

        // res.render(__dirname + '/public/index');     //worked
        // res.render(__dirname + '/views/home.html');
    });

    appServer.get('/login/:loginDetails', (req, res) => {
        console.log("User login details: " + req.params.loginDetails);
        // res.send("Reached node server file..!!");
        res.send(req.params.loginDetails);
    })

    appServer.listen(port, () => {
        console.log("App started  on port: " + port);
    })
} catch (error) {
    console.log("Error occured: " + error);
}