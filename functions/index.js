const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
const stripe = require("stripe")
('sk_test_51IOuwHHvRnygUna7pOpT72giyvZDE7Q7Tto9JSpG86TAihwvdQKF27M1RHFzAdLCc0N42PwI4gCz6rJVtIkYjjs800ZBSqiPBl');


const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved', total);
    
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});


exports.api = functions.https.onRequest(app);
