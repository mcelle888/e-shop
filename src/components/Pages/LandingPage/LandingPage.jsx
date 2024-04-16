import React from 'react'
import styles from './LandingPage.module.scss'

const LandingPage = () => {
  return (
    <main>
        <div>
            <img className={styles.banner} src="src\assets\flowerfield.jpg" alt="field" />
        </div>
        <h1>Flower Haven</h1>
        <p>Handcrafted bouquets and arrangements to brighten every occassion!</p>
    </main>
  )
}

export default LandingPage