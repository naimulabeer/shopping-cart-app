import { Link, Outlet } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import "./navigations.styles.scss";
import CartIcon from "../../Components/CartIcon/CartIcon";
import CartDropdown from "../../Components/CartDropdown/CartDropdown";
import { useContext, useEffect } from "react";
import { CartContext } from "../../Contexts/cart-context";

function Navigation() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  useEffect(() => {
    const closeCartOnOutsideClick = (event) => {
      if (isCartOpen && !event.target.closest(".cart-dropdown-container")) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", closeCartOnOutsideClick);
    } else {
      document.removeEventListener("mousedown", closeCartOnOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", closeCartOnOutsideClick);
    };
  }, [isCartOpen, setIsCartOpen]);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <FaShopify className="logo" />
          Simple Shop
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
