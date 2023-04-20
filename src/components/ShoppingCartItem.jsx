import "../styles/ShoppingCartItem.scss";

function ShoppingCartItem({ product }) {
  return (
    <div className="ShoppingCartItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
    </div>
  );
}

export { ShoppingCartItem };
