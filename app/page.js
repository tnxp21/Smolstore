import ImageBanner from "@/component/ImageBanner";
import Products from "@/component/Products";

export async function getProduct() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  console.log(baseURL);
  const response = await fetch(baseURL + '/api/product');
  const products = await response.json();
  return products;
}

export default async function Home() {

  const products = await getProduct();

  let planner = null;
  let stickers = [];

  for (let product of products) {
    if (product.name === 'Medieval Dragon Month Planner') {
      planner = product;
      continue;
    }
    stickers.push(product);
  }

  return (
    <div className="page-container">
      <ImageBanner />
      <section>
        <Products planner={planner} stickers={stickers} />
      </section>
    </div>
  );
}
