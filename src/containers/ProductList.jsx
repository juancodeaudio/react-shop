import { useGetProducts } from "../hooks/useGetProducts";
import { ProductItem } from "../components/ProductItem";
import "../styles/ProductList.scss";

const API = "http://api.escuelajs.co/api/v1/products";

function ProductList() {
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export { ProductList };
