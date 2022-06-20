import React, { useState } from 'react';
import CtaButton from '../cta';
import styles from './navbar.module.scss'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleClick = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
    <div className={styles.navContainer}>
      <a href="/pepu" className={styles.logo} style={toggleMenu ? {color: '#D3D2C7'} : {color: '#081121'}}>PEPU</a>
      <div className={styles.status}>
        <p>creative web developer</p>
        <p>currently in Thailand</p>
      </div>
      <ul className={styles.navlinks}>
        <li><a href="/projects">works</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/contact">contact</a></li>
      </ul>
      <div className={styles.hamburgerMenu} onClick={() => handleClick()}>
        <div className={styles.stack} data-att={toggleMenu ? 'open' : 'close'}></div>
      </div>
      <div className={styles.collapseMenu} style={toggleMenu ? {display: 'block'}: {display: 'none'}}>
        <div className={styles.status}>
          <p>creative<br />web develoepr</p>
          <p>currently in Thailand</p>
        </div>
        <ul className={styles.navlinks}>
          <li><a href="/pepu/projects">works</a></li>
          <li><a href="/pepu/about">about</a></li>
        </ul>
        <div className={styles.ctaButton}>
          <CtaButton menu={true}>Contact</CtaButton>
        </div>
        <ul className={styles.socialNavLinks}>
          <li><a href="https://www.instagram.com/p_e_p_u/">instagram</a></li>
          <li><a href="https://github.com/saipepu">github</a></li>
          <li><a href="https://www.linkedin.com/feed/">linkedIn</a></li>
        </ul>
      </div>
    </div>
    </>
  )
}
export default Navbar;