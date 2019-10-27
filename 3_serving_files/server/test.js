try {
    const express = require('express');
    const appServer = express();
    const port = 1080;
    const url = require('url');

    // appServer.use(express.static(__dirname + '/public'));
    // appServer.set('view engine', 'jade');    //  worked

    appServer.engine('html', require('ejs').renderFile);
    appServer.set('view engine', 'html');

    appServer.get('/', (req, res) => {
        res.sendFile(__dirname + "/index.html");
    });

    appServer.get('/:id', (req,res) => {
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
        //  Validation: The  length of name entered should be greater than 4
        if (req.params.loginDetails.split("=")[1].length > 4) {
            console.log("User login details: " + req.params.loginDetails.split("=")[1]);
            res.send("You have entered name: " + req.params.loginDetails.split("=")[1]);
        }
        else {
            console.log("Entered name length is less than 4")
            res.send("Please enter name of length more than 4..!!");
        }
    })

    appServer.listen(port, () => {
        console.log("App started  on port: " + port);
    })
} catch (error) {
    console.log("Error occurred: " + error);        //  Error Handling
}