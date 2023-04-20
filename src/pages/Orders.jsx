import { OrderItem } from "../components/OrderItem";
import "../styles/Orders.scss";

function Orders() {
  return (
    <div className="Orders">
      <div className="Orders__container">
        <h1 className="title">My orders</h1>
        <div className="Orders__content">
          <OrderItem />
        </div>
      </div>
    </div>
  );
}

export { Orders };
