import { Link, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          Shopping Cart
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {/* <CartIcon /> */}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
