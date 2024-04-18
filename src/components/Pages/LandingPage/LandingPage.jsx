import React from 'react'
import styles from './LandingPage.module.scss'
import { Link } from 'react-router-dom'
import Carousel from '../../Carousel/Carousel'
import { WishProvider } from '../../../context/WishContext'

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
            <p>Featured Products</p>
            <Carousel />
            <Link to={"/products"}> View All Products</Link>
          </div>
        </div>
      </main>

  );
}

export default LandingPage