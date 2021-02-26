const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();
const stripe = require("stripe")
("sk_test_51IOuwHHvRnygUna7pOpT72giyvZDE7Q7Tto9JSpG86TAihwvdQKF27M1RHFzAdLCc0N42PwI4gCz6rJVtIkYjjs800ZBSqiPBl");


app.use(cors({}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

//app.get('/', (request, response) => response.status(200).send("hello world"));
app.get('/', async(req,res) => {
    const intent = paymentIntent;
    res.json({client_secret: intent.client_secret});
});

app.post('/payment', async (req, res) => {
    const paymentIntent = await stripe.paymentIntent.create({
        amount: 5000,
        currency: 'usd',
        metadata: {integration_check: 'accept_a_payment'}
    });
    res.json({'client_secret': paymentIntent('client_secret')})
})

//app.post("/payment/create", async (request, response) => {
    //const total = request.query.total;

    //console.log('Payment Request Recieved', total);
    
    //const paymentIntent = await stripe.paymentIntent.create({
       // amount: total,
       // currency: "usd",
       // metadata: {integration_check: 'accept_a_payment'}
   // });

    //response.status(201).send({
        //clientSecret: paymentIntent.client_secret,
    //});
//});

app.listen(port, () => console.log(`$port`))
//exports.api = functions.http.onRequest(app);
