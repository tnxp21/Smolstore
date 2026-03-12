import ImageBanner from "@/component/ImageBanner";
import Products from "@/component/Products";

export default function Home() {
  return (
    <div className="page-container">
      <ImageBanner />
      <section>
        <Products />
      </section>
    </div>
  );
}
