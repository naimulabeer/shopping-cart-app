import { Link, Outlet } from "react-router-dom";
import "./navigations.styles.scss";
import CartIcon from "../../Components/CartIcon/CartIcon";

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src="../../public/icons.png" alt="icon" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <CartIcon />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
