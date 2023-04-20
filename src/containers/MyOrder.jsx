import { OrderItem } from "../components/OrderItem";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/MyOrder.scss";

import arrow from "@icons/flechita.svg";

function MyOrder() {
  const { state } = useContext(AppContext);

  return (
    <aside className="MyOrder">
      <div className="MyOrder__title-container">
        <img src={arrow} alt="arrow" />
        <p className="MyOrder__title">My order</p>
      </div>
      <div className="myOrder__content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${state.total}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
}

export { MyOrder };
