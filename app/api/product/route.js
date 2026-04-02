import Stripe from 'stripe';
import '../../../envConfig.js';

const API_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(API_KEY);

export async function GET(request) {
    try {
        //fetch active products from stripe
        const products = await stripe.products.list({ active: true, });
        //fetch prices for each product
        const prices = await stripe.prices.list({ active: true, });
        //combine products and their prices
        const combinedData = products.data.map(product => {
            const proDuctPrices = prices.data.filter((price) => { return price.product === product.id });
            return {
                ...product,
                prices: proDuctPrices.map(price => {
                    return {
                        id: price.id,
                        unit_amount: price.unit_amount,
                        currency: price.currency,
                        recurring: price.recurring,
                    }
                })
            }
        })

        return Response.json(combinedData);
    } catch (error) {
        console.error('Error fetching data stripe:', error);
        return Response.json(
            { error: 'Failed to fetch data from stripe' },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, description, price } = body;

        const product = await stripe.products.create({
            name,
            description,
        });

        const priceObj = await stripe.prices.create({
            product: product.id,
            unit_amount: price,
            currency: 'usd',
        });

        return Response.json({ product, price: priceObj });
    } catch (error) {
        return Response.json(
            { error: error.message },
            { status: 400 }
        );
    }
}