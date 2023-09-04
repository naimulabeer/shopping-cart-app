import { useContext } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { CartContext } from "../../contexts/cart-context";
import "./cart-icon.styles.scss";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <BiShoppingBag className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
