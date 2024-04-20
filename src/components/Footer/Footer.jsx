import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.leftFooter}>
        <div>
          <h2>Customer Care</h2>
          <p>Contact Us</p>
          <p>Returns</p>
          <p>Frequently Asked Questions</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className={styles.shopDetails}>
          <h2>About Us</h2>
          <p>History</p>
          <p>Meet the Team</p>
          <p>News</p>
        </div>
      </div>
      <div className={styles.rightFooter}>
        <div className={styles.icons}>
          <h2>Connect with us!</h2>
          <img src="assets/facebook.png" />
          <img src="assets/insta.png" />
          <img src="assets/mail.png" />
          <img src="assets/tik.png" />
          <img src="assets/twitter.png" />
        </div>

        <div className={styles.icons}>
          <h2>We accept</h2>
          <img src="assets/visa.png" />
          <img src="assets/mastercard.png" />
          <img src="assets/stripe.png" />
          <img src="assets/paypal.png" />
          <img src="assets/americanex.png" />
          <img src="assets/afterpay.png" />
          <img src="assets/google.png" />
          <img src="assets/bitcoin.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
