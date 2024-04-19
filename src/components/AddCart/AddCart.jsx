import React, { useState } from "react";
import styles from "./AddCart.module.scss";

const AddCart = () => {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true);
  };

  return (
    <div className={styles.addedCartBox}>
      <h3>Successfully Added to Cart</h3>
      <div>
        <button className={styles.cartButtons} onClick={handleClick}>
          View Cart
        </button>
        <button className={styles.cartButtons} onClick={handleClick}>
          Keep Shopping
        </button>
      </div>
      {showImage && (
        <div className={styles.errorMessage}>
          <img
            className={styles.wip}
            src="src\assets\wip.png"
            alt="Added to Cart"
          />
          <p>Sorry, still working on this feature!</p>
        </div>
      )}
    </div>
  );
};

export default AddCart;
