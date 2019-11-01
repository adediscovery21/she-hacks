const express = require("express"); //import express
const bodyParser = require("body-parser");
const app = express(); //create an express app
const cors = require("cors");

const store = [{
    itemName: "T-shirt",
    price: 6000,
    quantity: 0
},
{
    itemName: "Dress",
    price: 8000,
    quantity: 0
},
{
    itemName: "Shorts",
    price: 4000,
    quantity: 0
},
{
    itemName: "Jean",
    price: 7000,
    quantity: 0
}];

app.use(cors());

app.get('/store', (req, res) => {
    res.send({result: store, message: "result is seccessful" });
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    res.send("Hello World");
});//create a route

app.get("/colors", (req, res) => {
    res.send(["blue", "red", "green", "pink", "black"])
})

// app.post("/login", (req, res) => {
//     console.log(req.body);
//     res.send(`Login successful`);
// });

app.post('/login', (req, res) =>
{
    if (req.body.username === user.username &&
        req.body.password === user.password) {
        res.send('login successful')
    } else {
        res.send('Username or password is incorrect')
    }
})
const user = {
    username:'admin',
    password:'west'
}

app.listen(3000, () => console.log("server running at port 3000")); //expose the app on port 3000
