import Stripe from 'stripe'

const getProducts = async() =>{
const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
  apiVersion: "2022-11-15",
});
const products = await stripe.products.list
console.log('====================================');
console.log(products);
console.log('====================================');
} 
export default async function Home() {
  return (
    <main >
     
    </main>
  )
}
