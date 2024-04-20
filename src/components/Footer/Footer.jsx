import React from 'react'
import styles from './Footer.module.scss'

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
          <img src="src\assets\facebook.png" />
          <img src="src\assets\insta.png" />
          <img src="src\assets\mail.png" />
          <img src="src\assets\tik.png" />
          <img src="src\assets\twitter.png" />
        </div>

        <div className={styles.icons}>
          <h2>We accept</h2>
          <img src="src\assets\visa.png" />
          <img src="src\assets\mastercard.png" />
          <img src="src\assets\stripe.png" />
          <img src="src\assets\paypal.png" />
          <img src="src\assets\americanex.png" />
          <img src="src\assets\afterpay.png" />
          <img src="src\assets\google.png" />
          <img src="src\assets\bitcoin.png" />
        </div>
      </div>
    </div>
  );
}

export default Footer