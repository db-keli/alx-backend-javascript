const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
    res.set("Content-Type", "application/json");
    const payMethods = {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    };
    res.send(payMethods);
});

app.post('/login', (req, res) => {
    const { userName } = req.body;
    if (userName) {
        res.send(`Welcome ${userName}`);
    } else {
        res.sendStatus(404);
    }
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;
