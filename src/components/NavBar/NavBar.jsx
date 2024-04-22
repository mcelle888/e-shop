import React from "react";
import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
import CartContent from "../CartContent/CartContent";

const NavBar = () => {
  const navLink = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.link_active}` : styles.link;

  return (
    <nav className={styles.navBar}>
      <div className={styles.linksBox}>
        <NavLink className={navLink} to="/">
          Home
        </NavLink>
        <NavLink className={navLink} to="/products">
          All Products
        </NavLink>
        <NavLink className={navLink} to="/wishlist">
          WishList
        </NavLink>
        <Modal
          buttonText={
            <img className={styles.cart} src="assets/cart.png" alt="cart" />
          }
          size="small"
        >
          <CartContent />
        </Modal>
      </div>
    </nav>
  );
};

export default NavBar;
