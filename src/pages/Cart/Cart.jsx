import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    addToCart,
    minusToCart,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <div className="cart-items-btns">
                    <button onClick={() => addToCart(item._id)}>
                      <img src={assets.add_icon_green} alt="" />
                    </button>

                    <p>{cartItems[item._id]}</p>
                    <button onClick={() => minusToCart(item._id)}>
                      <img src={assets.remove_icon_red} alt="" />
                    </button>
                  </div>
                  <p>${item.price * cartItems[item._id]}</p>
                  <button
                    className="cross"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </button>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          {getTotalCartAmount() === 0 ? (
            ""
          ) : (
            <button onClick={() => navigate("/order")}>
              Proceed To Checkout
            </button>
          )}
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
