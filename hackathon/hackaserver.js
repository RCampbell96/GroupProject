const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3013;
var morgan = require('morgan')
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'Hacka')));
app.listen(PORT, () => console.log(`Server started on ${PORT}.`));

app.use(morgan('short'))

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/hack_profiles_create', (req, res) => {
    console.log("Creating a new user...")
    const firstName = req.body.create_first_name
    const lastName = req.body.create_last_name
    const emailAddress = req.body.create_email_address
    console.log("First name: " + firstName)

    const queryString1 = "INSERT INTO hack_profiles (hack_first_name, hack_last_name, hack_email_address) VALUES (?, ?, ?)"
    getConnected().query(queryString1, [firstName, lastName, emailAddress], (err, results, fields) => {
        if (err) {
            console.log("Failed to insert a new user: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Inserted a new user with id: ", results.insertedId)
        res.end()
    })
});

function getConnected() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'YourRootPassword',
        database: 'Profiles'
    })
}

app.get('/hack_profiles/:hack_id', (req, res) => {

    const queryString = "SELECT * FROM hack_profiles WHERE hack_id = ?"
    const hid = req.params.hack_id
    console.log("Fetching user with id: " + req.params.hack_id)

    const connection = getConnected();




    connection.query(queryString, [hid], (err, rows, fields) => {
        console.log("I think it fetched")
        res.json(rows)
    });



})