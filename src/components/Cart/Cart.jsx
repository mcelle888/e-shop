import React, { useState } from "react";
import styles from "./Cart.module.scss";
import AddCart from "../AddCart/AddCart";

const Cart = ({ flower, showModal, handleModalToggle }) => {
  const [size, setSize] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [showAddCart, setShowAddCart] = useState(false);

  const handleOptionChange = (event) => {
    setSize(event.target.value);
  };

  const getPrice = () => {
    switch (size) {
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

  const handleAddToCart = () => {
    setShowAddCart(true);
  };

  const handleQuantity = (amount) => {
    if (amount > 0) {
      setQuantity(quantity + amount);
    } else if (quantity + amount >= 1) {
      setQuantity(quantity + amount);
    }
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
          showModal={showModal}
          handleModalToggle={handleModalToggle}
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
            <p>Price: ${getPrice()} AUD</p>
            <p>Description: {flower.description}</p>
            <label htmlFor="size">Size: </label>
            <select value={size} name="size" onChange={handleOptionChange}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>

            <div className={styles.quantity}>
              <label htmlFor="quantity">Quantity: </label>
              <button onClick={() => handleQuantity(-1)}>-</button>
              <p>{quantity}</p>
              <button onClick={() => handleQuantity(1)}>+</button>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.buttonBox} onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
