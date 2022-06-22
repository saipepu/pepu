import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CtaButton from '../cta';
import styles from './navbar.module.scss'

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleClick = () => {
    setToggleMenu(!toggleMenu)
    // const pageWrapper = document.getElementById("pageWrapper")
    // pageWrapper.style.cursor = 'default'
    // console.log(pageWrapper);
  }

  return (
    <>
    <div className={styles.navContainer}>
      <a onClick={() => navigate('/')} className={styles.logo} style={toggleMenu ? {color: '#D3D2C7'} : {color: '#081121'}}>PEPU</a>
      <div className={styles.status}>
        <p>creative web developer</p>
        <p>currently in Thailand</p>
      </div>
      <ul className={styles.navlinks}>
        <li></li>
        <li><a onClick={() => navigate('/projects')}>works</a></li>
        <li><a onClick={() => navigate('/about')}>about</a></li>
        <li><a onClick={() => navigate('/contact')}>contact</a></li>
      </ul>
      <div className={styles.hamburgerMenu} onClick={() => handleClick()}>
        <div className={styles.stack} data-att={toggleMenu ? 'open' : 'close'}></div>
      </div>
      <div className={styles.collapseMenu} style={toggleMenu ? {display: 'block'}: {display: 'none'}}>
        <div className={styles.status}>
          <p>creative web develoepr</p>
          <p>currently in Thailand</p>
        </div>
        <ul className={styles.menuNavLinks}>
          <li><a onClick={() => navigate('/projects')}>works</a></li>
          <li><a onClick={() => navigate('/about')}>about</a></li>
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