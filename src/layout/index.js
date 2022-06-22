import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/common/footer';
import Navbar from '../components/common/navbar/navbar';
import styles from './index.module.scss'

const Layout = ({children}) => {
  
  const [posY, setPosY] = useState(0);
  const [posX, setPosX] = useState(0);
  const [hover, isHover] = useState(false)

  const handleHover = (e) => {
    setPosY(e.pageY);
    setPosX(e.pageX);
    isHover(true);

    if (e.target.id == 'contactCta') {
      const demo_cursor = document.getElementById("demo_cursor")
      demo_cursor.style.transform = `translate3d(${e.pageX}px, ${e.pageY}px, 0) scale(2)`;
    }
    const contactCta = document.getElementById('contactCta')
    contactCta.addEventListener('mouseover', () => {
    })
  }

  const x = () => {
    const body = document.body
    const pageWrapper = document.querySelector('#pageWrapper')
    const bodyWrapper = document.querySelector('#bodyWrapper')
    const scrollContainer = document.querySelector('#scrollContainer')
    const height = scrollContainer.getBoundingClientRect().height;
    body.style.height = Math.floor(height) - 100 + 'px'
    pageWrapper.style.height = document.body.getBoundingClientRect().height + 'px'
    bodyWrapper.style.height = document.body.getBoundingClientRect().height + 'px'
    // console.log(pageWrapper.style.height);
  }
  
  const adjustCardWidth = () => {
    const card = document.querySelectorAll('#card')
    const title = document.querySelectorAll('#title')
    card.forEach((card, index) => {
      card.style.width = title[index].getBoundingClientRect().width + 100 +  'px';
    })
  }
  useEffect(() => {
    x();
    adjustCardWidth();
  }, [])
  window.onresize = () => {
    x()
    adjustCardWidth()
  }

  const mouseMove = {
    display: 'block',
    transform: `translate3d(${posX}px, ${posY}px, 0) scale(1)`,
    cursor: 'none',
    willChange: 'transform'
  }
  const mouseMoveSecondary = {
    display: 'block',
    transform: `translate3d(${posX - 20}px, ${posY - 20}px, 0) scale(1)`,
    cursor: 'none',
    willChange: 'transform'
  }

  document.body.addEventListener('mouseleave', () => {
    isHover(false);
  })

  return (
    <>
    <div className={styles.pageWrapper} id="pageWrapper" onMouseMove={(e) => handleHover(e)}>
      <div className={styles.backgroundImage}></div>
      <Navbar />
      <div className={styles.bodyWrapper} id="bodyWrapper">
        {children}
      </div>
      <div className={styles.demo_cursor} style={hover ? mouseMove: {}} id="demo_cursor"></div>
      <div className={styles.demo_cursor_secondary} style={hover ? mouseMoveSecondary: {}} id="demo_cursor"></div>
    </div>
    </>
  )
}
export default Layout;