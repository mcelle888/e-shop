import React, { useState } from "react";
import styles from "./Cart.module.scss";
import AddCart from "../AddCart/AddCart";
import { addToCart } from "../../services/flower-service";

const Cart = ({ flower }) => {
  const [size, setSize] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [showAddCart, setShowAddCart] = useState(false);

  const handleOptionChange = (event) => {
    setSize(event.target.value);
  };

  const getPriceForSize = (selectedSize) => {
    switch (selectedSize) {
      case "small":
        return flower.size.small.price;
      case "medium":
        return flower.size.medium.price;
      case "large":
        return flower.size.large.price;
      default:
        return flower.size.small.price;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const price = getPriceForSize(size);
    const totalPrice = price * quantity;
    addToCart(flower.name, size, quantity, price, totalPrice, flower.imageLink);
    setShowAddCart(true);
  };

  const handleKeepShopping = () => {
    setShowAddCart(false);
  };

  return (
    <div>
      {showAddCart ? (
        <AddCart 
          flower={flower}
          size={size}
          quantity={quantity}
          handleKeepShopping={handleKeepShopping}
        />
      ) : (
        <div className={styles.cartBox}>
          <img
            className={styles.productImg}
            src={flower.imageLink}
            alt={flower.name}
          />
          <div className={styles.details}>
            <h2>Name: {flower.name}</h2>
            <p>Price: ${getPriceForSize(size)} AUD</p>
            <p>Description: {flower.description}</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="size">Size: </label>
              <select value={size} name="size" onChange={handleOptionChange}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>

              <div className={styles.quantity}>
                <label htmlFor="quantity">Quantity: </label>
                <input
                  type="number"
                  value={quantity}
                  name="quantity"
                  min="1"
                  required 
                  onChange={(e) => setQuantity(e.target.value)}
                />
                
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.buttonBox} type="submit">
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
