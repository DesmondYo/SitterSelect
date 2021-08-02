const functions = require('firebase-functions');
const stripe = require('stripe');

exports.createPaymentIntent = functions.https.onRequest(
  async (request, response) => {
    // Use an existing Customer ID if this is a returning customer.
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: customer.id},
      {apiVersion: '2020-08-27'},
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: 'usd',
      customer: customer.id,
    });
    response.send({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
    });
  },
);
