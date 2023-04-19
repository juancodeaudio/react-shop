import { OrderItem } from "../components/OrderItem";
import "../styles/Checkout.scss";

function Checkout() {
  return (
    <div class="Checkout">
      <div class="Checkout__container">
        <h1 class="Checkout__title">My order</h1>
        <div class="Checkout__content">
          <div class="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
          <OrderItem />
        </div>
      </div>
    </div>
  );
}

export { Checkout };
