import React from 'react'
import styles from './LandingPage.module.scss'
import { Link } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel'

const LandingPage = () => {
  return (
      <main>
        <div className={styles.imgBox}>
          <img
            className={styles.banner}
            src="src\assets\background.jpg"
            alt="field"
          />
        </div>
        <div className={styles.header}>
          <h1>Flower Haven</h1>
          <p>Handcrafted bouquets and arrangements for all occassions</p>
          <div className={styles.featuredSection}>
            <Carousel />
            <Link to={"/products"} className={styles.productsLink}> View All Products</Link>
          </div>
        </div>
      </main>

      

  );
}

export default LandingPage