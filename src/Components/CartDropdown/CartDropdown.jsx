import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";

import { CartContext } from "../../Contexts/cart-context";
import "./cart-dropdown.styles.scss";

function CartDropdown() {
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <span className="total">Total: {cartTotal} Tk.</span>
      </div>

      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
