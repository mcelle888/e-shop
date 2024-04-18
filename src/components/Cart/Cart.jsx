import React, { useState } from "react";
import styles from "./Cart.module.scss";

const Cart = ({ flower }) => {
  const [size, setSize] = useState("small");
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

  return (
    <div>
      <div className={styles.cartBox}>
        <img
          className={styles.productImg}
          src={flower.imageLink}
          alt={flower.name}
        />
        <div>
          <h2>Name: {flower.name}</h2>
          <p>Price: ${getPrice()} AUD</p>
          <p>Description: {flower.description}</p>
          <label htmlFor="size">Size: </label>
          <select value={size} name="size" onChange={handleOptionChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Cart;
