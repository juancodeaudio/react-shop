import { ProductInfo } from "../components/ProductInfo";

function ProductDetail() {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail__close">
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
}

export { ProductDetail };
