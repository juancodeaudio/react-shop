import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/ProductItem.scss";

import addToCartIcon from "@icons/bt_add_to_cart.svg";

function ProductItem({ product }) {
  const { addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="ProductItem__info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartIcon} alt="" />
        </figure>
      </div>
    </div>
  );
}

export { ProductItem };
