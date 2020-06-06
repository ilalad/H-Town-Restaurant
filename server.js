const bodyParser = require('body-parser')
const express = require('express')
const path = require('path');
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('')
})



app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


require('./app/routing/html-routes.js')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
