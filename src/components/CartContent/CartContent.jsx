import React from 'react'
import styles from './CartContent.module.scss'

const CartContent = () => {
  return (
    <div className={styles.cartContent}>
      <h2>No items in Cart</h2>
      <p>Sorry Cart feature is still working in progress!</p>
      <img className={styles.wip} src="src\assets\wip.png" alt="wip" />
    </div>
  );
}

export default CartContent