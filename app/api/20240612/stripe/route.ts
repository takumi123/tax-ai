import { prisma } from '../../../lib/prisma';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error('Stripe secret key is not defined');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-04-10',
});

// 課金処理を行う関数
async function createCharge(amount: number, source: string, description: string) {
  try {
    const charge = await stripe.charges.create({
      amount: amount, // 金額（単位は最小通貨単位、例：円なら「円」）
      currency: 'jpy',
      source: source,
      description: description,
    });
    return charge;
  } catch (error) {
    console.error('Stripe charge error:', error);
    throw error;
  }
}

// 課金処理をエクスポート
export { createCharge };
