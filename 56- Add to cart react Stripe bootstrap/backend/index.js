import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL
}));

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post('/api/makepayment', async (req, res) => {
  try {
    const { cartAllProduct } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cartAllProduct.map(item => ({
        price_data: {
          currency: "pkr",
          product_data: {
            name: item.model,
            images: [item.img],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.count,
      })),
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ id: session.id });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});