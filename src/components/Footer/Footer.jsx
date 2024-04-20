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
          <img src="public\assets\facebook.png" />
          <img src="public\assets\insta.png" />
          <img src="public\assets\mail.png" />
          <img src="public\assets\tik.png" />
          <img src="public\assets\twitter.png" />
        </div>

        <div className={styles.icons}>
          <h2>We accept</h2>
          <img src="public\assets\visa.png" />
          <img src="public\assets\mastercard.png" />
          <img src="public\assets\stripe.png" />
          <img src="public\assets\paypal.png" />
          <img src="public\assets\americanex.png" />
          <img src="public\assets\afterpay.png" />
          <img src="public\assets\google.png" />
          <img src="public\assets\bitcoin.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
