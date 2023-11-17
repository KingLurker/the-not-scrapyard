const express = require('express');
const serverless = require('serverless-http');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.get('/products', async (req, res) => {
  try {
    const products = await stripe.products.list();
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports.handler = serverless(app);
