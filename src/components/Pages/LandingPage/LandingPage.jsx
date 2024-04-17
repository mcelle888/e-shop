import React from 'react'
import styles from './LandingPage.module.scss'
import { Link } from 'react-router-dom'
import Modal from '../../Modal/Modal'

const LandingPage = () => {
  return (
    
    <main>
      
        <div className={styles.imgBox}>
            <img className={styles.banner} src="src\assets\flowerfield.jpg" alt="field" />
        </div>
        <div className={styles.header}>
            <h1>Flower Haven</h1>
            <p>Handcrafted bouquets and arrangements for all occassions</p>
            <article>
            <p>Featured Products</p>
            <div>
                IMAGE BOX
            </div>
            <Link to={"/products"}> View All Products</Link>

            <Modal buttonText="tester" />

            
        </article>
        </div>
       
       
    </main>
  )
}

export default LandingPage