// An endpoint that calculates the order total and creates a
// PaymentIntent on Stripe

require('dotenv').config()
const axios = require('axios')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY),
  headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
