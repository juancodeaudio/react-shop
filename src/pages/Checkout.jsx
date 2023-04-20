import { OrderItem } from "../components/OrderItem";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/Checkout.scss";

function Checkout() {
  const { state } = useContext(AppContext);

  return (
    <div class="Checkout">
      <div class="Checkout__container">
        <h1 class="Checkout__title">My order</h1>
        <div class="Checkout__content">
          <div class="order">
            <p>
              <span>03.25.21</span>
              <span>{state.cart.length} articles</span>
            </p>
            <p>${state.total}</p>
          </div>
          {state.cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Checkout };
