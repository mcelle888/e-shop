import React from 'react'
import styles from './LandingPage.module.scss'

const LandingPage = () => {
  return (
    <main>
        <div className={styles.imgBox}>
            <img className={styles.banner} src="src\assets\flowerfield.jpg" alt="field" />
        </div>
        <div className={styles.header}>
            <h1>Flower Haven</h1>
            <p>Handcrafted bouquets and arrangements for every occassion</p>
        </div>
        <article>
            <h2>Featured Products</h2>
            <div>
                IMAGE BOX
            </div>
            {/* todo: make this a link rather than a button */}
            <button>View All Products</button>
        </article>
       
    </main>
  )
}

export default LandingPage