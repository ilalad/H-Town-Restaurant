const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('')
})



app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
