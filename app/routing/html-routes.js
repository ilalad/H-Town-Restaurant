const path = require('path');

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });

    app.post("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/tables.html"));
    });

    app.post("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/reserve.html"));
    });

}



