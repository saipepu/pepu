import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/common/footer';
import Navbar from '../components/common/navbar/navbar';
import styles from './index.module.scss'

const Layout = ({children}) => {

  const factor = 0.08
  const factor1 = 0.8

  const lerp = (start, end, factor) => {
    return start + (end-start) * factor
  }
  
  const [hover, isHover] = useState(false)

  let mouseX = 0
  let mouseY = 0
  let easeX1 = 0
  let easeY1 = 0
  let easeX2 = 0
  let easeY2 = 0

  window.addEventListener('mousemove', (e) => {
    mouseX = e.pageX
    mouseY = e.pageY
    // console.log(mouseX, mouseY)
  })

  const mouseMovement = () => {
    const cursorDot = document.getElementById('cursor1')
    const cursorCircle = document.getElementById('cursor2')

    if(cursorCircle && cursorCircle){

      easeX1 = lerp(easeX1, mouseX, factor)
      easeY1 = lerp(easeY1, mouseY, factor)
      cursorDot.style.transform = `translate(${easeX1}px, ${easeY1}px)`

      easeX2 = lerp(easeX2, mouseX, factor1)
      easeY2 = lerp(easeY2, mouseY, factor1)
      cursorCircle.style.transform = `translate(${easeX2-20}px, ${easeY2-20}px)`
    }
    requestAnimationFrame(mouseMovement)
  }
  if(document.querySelector('body') != null) {
    mouseMovement()
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
  }
  
  const adjustCardWidth = () => {
    const card = document.querySelectorAll('#card')
    const title = document.querySelectorAll('#title')
    card.forEach((card, index) => {
      card.style.width = title[index].getBoundingClientRect().width + 100 +  'px';
    })
  }
  useEffect(() => {

    const pageTransition1 = document.getElementById('pageTransition1')
    pageTransition1.style.height = document.body.getBoundingClientRect().height + 'px';
    const pageTransition2 = document.getElementById('pageTransition2')
    pageTransition2.style.height = document.body.getBoundingClientRect().height + 'px';

    x();
    adjustCardWidth();
  }, [])

  window.onresize = () => {
    x()
    adjustCardWidth()
  }

  document.body.addEventListener('mouseleave', () => {
    isHover(false);
  })

  return (
    <>
    <div className={styles.pageWrapper} id="pageWrapper">
      <div className={styles.backgroundImage}></div>
      <Navbar />
      <div className={styles.bodyWrapper} id="bodyWrapper">
        {children}
      </div>
      <div id="cursor1" className={styles.demo_cursor}></div>
      <div id="cursor2" className={styles.demo_cursor_secondary}></div>
      <div className={styles.pageTransition1} id='pageTransition1'></div>
      <div className={styles.pageTransition2} id='pageTransition2'></div>
    </div>
    </>
  )
}
export default Layout;