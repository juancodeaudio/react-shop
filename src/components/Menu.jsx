import "@styles/Menu.scss";

function Menu() {
  return (
    <div className="Menu">
      <ul>
        <li className="Menu__item">
          <a href="/orders" className="Menu__title">
            My orders
          </a>
        </li>
        <li className="Menu__item">
          <a href="/account">My account</a>
        </li>
        <li className="Menu__item">
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export { Menu };
