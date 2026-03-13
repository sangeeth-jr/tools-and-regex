const express = require("express");
const path = require("path");

const app = express();
const port = 3001;

// to read form data
app.use(express.urlencoded({ extended: true }));

// serve files from public folder
app.use(express.static(path.join(__dirname, "public")));

app.post("/submit", (req, res) => {
    const name = req.body.username;
    res.redirect(`/greet.html?name=${name}`);
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});