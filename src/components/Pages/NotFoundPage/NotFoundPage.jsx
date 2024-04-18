import React from 'react'
import styles from './NotFoundPage.module.scss'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <div className={styles.imgBox}>
        <img
          className={styles.banner}
          src="src\assets\background.jpg"
          alt="field"
        />
        <header className={styles.missingHeader}>
          <h1>404: Page Not Found :(</h1>
          <Link to={"/"}> Return to Home Page</Link>
        </header>
      </div>
    </>
  );
}

export default NotFoundPage