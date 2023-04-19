import { ProductItem } from "../components/ProductItem";
import "../styles/ProductList.scss";

function ProductList() {
  return (
    <section className="main-container">
      <div className="ProductList">
        <ProductItem />
      </div>
    </section>
  );
}

export { ProductList };
