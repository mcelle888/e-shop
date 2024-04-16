import React from 'react'
import styles from './NavBar.module.scss'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const navLink = ({isActive}) => isActive ? `${styles.link} ${styles.link_active}`: styles.link
  return (
    <nav className={styles.navBar}>

      <div className={styles.linksBox}>
        <NavLink className={navLink} to="/">Home</NavLink>
        <NavLink className={navLink} to="/products">All Products</NavLink>
      </div>
     
    </nav>
  )
}

export default NavBar