const express = require('express'),
    bodyParser = require('body-parser'),
    path = require("path"),
    app = express(),
    cors = require('cors'),
    PORT = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + "/public")));

app.use(cors({
    origin: "*",
}));

app.get("/", (req, res) => {
    res.render("pages/index");
});

app.listen(PORT);
