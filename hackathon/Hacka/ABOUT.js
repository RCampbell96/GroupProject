const url = 'http://localhost:3013/'

// let rec = document.createElement('rectangle');
let rect = document.getElementById('rectangle')
let rect1 = document.getElementById('rectangle1')

fetch(url + 'hack_profiles/')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for(i=0;i<data.length;i++)  {
            rect.innerHTML += ' ' + data[i].hack_id + ") " + data[i].hack_description + '</br></br>';
            // rect.append('  ' + data[i].hack_id + ") " + data[i].hack_description )
            rect1.innerHTML += '   ' + data[i].hack_id + ") " + data[i].hack_location + " / " + data[i].hack_address + '</br></br>'; }
            // document.body.appendChild(rect).innerHTML = JSON.stringify(data[i].hack_description) + '<br>' + JSON.stringify(data[i].hack_location)
           /* window.document.getElementById('rectangle').innerHTML = JSON.stringify(data[i].hack_description) + '<br>' + JSON.stringify(data[i].hack_location) */
    })
    .catch(err => {
        console.log(err)
    })

// function getConnected() {
//     return mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'YourRootPassword',
//         database: 'Profiles'
//     })
// }

// app.get('/hack_profiles/:hack_location', (req, res) => {

//     const queryString = "SELECT * FROM hack_profiles WHERE hack_location = ?"
//     const hid = req.params.hack_location
//     console.log("Fetching user with id: " + req.params.hack_location)

//     const connection = getConnected();

//     connection.query(queryString, [hid], (err, rows, fields) => {
//         console.log("I think it fetched")
//         res.json(rows)
//     });
// })