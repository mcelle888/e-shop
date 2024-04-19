import React, { useState } from "react";
import styles from "./Cart.module.scss";
import AddCart from "../AddCart/AddCart";

const Cart = ({ flower }) => {
  const [size, setSize] = useState("small");
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

  return (
    <div>
      {showAddCart ? (
        <AddCart flower={flower} size={size} />
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
            <label htmlFor="colour">Colour: </label>
            <select value={size} name="colour" onChange={handleOptionChange}>
              <option value="oranges">Oranges</option>
              <option value="pinks">Pinks</option>
              <option value="whites">Whites</option>
              <option value="reds">Reds</option>
              <option value="mixed">Mixed</option>
            </select>
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
