import React, { useState, useEffect } from "react";
import styles from "./CartContent.module.scss";
import { fetchCartItems, removeFromCart } from "../../services/flower-service";

const CartContent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCartItems();
      setCartItems(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.totalPrice;
      });
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartItems]);

  const handleDeleteItem = async (itemId) => {
    await removeFromCart(itemId);
    const data = await fetchCartItems();
    setCartItems(data);
  };

  const [showImage, setShowImage] = useState(false);

  const handleAddtoCartClick = () => {
    setShowImage(true);
  };

  return (
    <>
      <div className={styles.cartContent}>
        <h2>Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>No items in Cart</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  Item Name: {item.flowerName} | Unit Price: ${item.price}/per bouquet |
                  Quantity: {item.quantity} | Size: {item.size} | Price: $
                  {item.totalPrice}
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <p>Total Price: ${totalPrice}</p>
            <button
              className={styles.checkoutButton}
              onClick={handleAddtoCartClick}
            >
              Checkout
            </button>
          </>
        )}
        {showImage && (
          <div className={styles.errorMessage}>
            <img
              className={styles.wip}
              src="assets/wip.png"
              alt="Added to Cart"
            />
            <p>Sorry, still working on the Checkout feature!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartContent;
