import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './projectsContainer.module.scss'
import hoverEffect from 'hover-effect'
import img7 from '../../img7.webp'
import CODE from '../../CODE.png'
import DESIGN from '../../DESIGN.png'
import CaseStudyImg from '../../CaseStudyImg.png'

const ProjectsContainer = () => {
  const Distort_1 = useRef();

  useEffect(() => {
    new hoverEffect({
      parent: Distort_1.current,
      intensity: 0.2,
      image1: CODE,
      image2: DESIGN,
      displacementImage: img7,
      angle: -90
    })
  },[])

  const OpenImage = () => {
    const Image = document.querySelector('img')
    const url = Image.getAttribute('src')
    window.open(url)
  }

  return (
    <>
    <div className={styles.container}>
      <div className={styles.canvas}>
        <a href="https://saipepu.github.io/micro-animations/" target="_blank" rel="noopener" className={styles.labelContainer}>
          <h1 className={styles.index}>01</h1>
          <h1 className={styles.demoText} data-att='hovering'>hovering</h1>
        </a>
        {/* <a href="#" target="_blank" rel="noopener" className={styles.labelContainer}>
          <h1 className={styles.index}>02</h1>
          <h1 className={styles.demoText} data-att='luciana'>luciana</h1>
        </a> */}
        <a href="https://saipepu.github.io/page-transition" target="_blank" rel="noopener" className={styles.labelContainer}>
          <h1 className={styles.index}>02</h1>
          <h1 className={styles.demoText} data-att='transition'>transition</h1>
        </a>
        <a href="https://saipepu.github.io/ecommerce-site-fakestore/" target="_blank" rel="opener" className={styles.labelContainer}>
          <h1 className={styles.index}>03</h1>
          <h1 className={styles.demoText} data-att='FakeStore'>FakeStore</h1>
        </a>
        <a onClick={() => OpenImage()} target="_blank" rel="opener" className={styles.labelContainer}>
          <h1 className={styles.index}>04</h1>
          <h1 className={styles.demoText} data-att='UX Project'>UX Project</h1>
          <img src={CaseStudyImg} alt="CaseStudyPng" style={{display: 'none'}} />
        </a>
      </div>
      <div className={styles.imgContainer}>
        {/* <div ref={Distort_1} id="distort1" className={hover ? `${styles.imgWrapper} ${styles.animation}` : `${styles.imgWrapper}`}>
        </div> */}
        <div ref={Distort_1} id="distort1" className={styles.imgWrapper}>
        </div>
      </div>
    </div>
    </>
  )
}
export default ProjectsContainer;