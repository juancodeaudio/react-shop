import "@styles/Header.scss";

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";

function Header() {
  return (
    <nav className="Header">
      <img src={menu} alt="menu" className="Header__icon" />

      <div className="Header__navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="Header__navbar-right">
        <ul>
          <li className="Header__navbar-email">platzi@example.com</li>
          <li className="Header__navbar-shopping-cart">
            <img src={shoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
