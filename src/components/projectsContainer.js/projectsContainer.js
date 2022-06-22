import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './projectsContainer.module.scss'
import hoverEffect from 'hover-effect'
import img1 from '../../p1.png'
import img2 from '../../p2.png'
import img3 from '../../p3.png'
import img4 from '../../p4.png'
import img5 from '../../p5.png'

const ProjectsContainer = () => {
  const Distort_1 = useRef();
  const Distort_2 = useRef();
  const Distort_3 = useRef();
  const Distort_4 = useRef();
  const [distortImg2, setDisortImg2] = useState();
  const [distortImg1, setDisortImg1] = useState();

  useEffect(() => {
    new hoverEffect({
      parent: Distort_1.current,
      intensity: 0.2,
      image1: img2,
      image2: img1,
      displacementImage: img3,
      angle: 5
    })
    new hoverEffect({
      parent: Distort_2.current,
      intensity: 0.2,
      image1: img4,
      image2: img2,
      displacementImage: img3,
      angle: 5
    })
    new hoverEffect({
      parent: Distort_3.current,
      intensity: 0.2,
      image1: img1,
      image2: img3,
      displacementImage: img2,
      angle: 5
    })
    new hoverEffect({
      parent: Distort_4.current,
      intensity: 0.2,
      image1: img1,
      image2: img4,
      displacementImage: img3,
      angle: 5
    })
  },[])

  const navigate = useNavigate();
  const [hover, setHover] = useState(false)

  const handleHover = (index) => {
    setHover(true);
    const distort1 = document.getElementById('distort1')
    const distort2 = document.getElementById('distort2')
    const distort3 = document.getElementById('distort3')
    const distort4 = document.getElementById('distort4')
    if(index == 1){
      distort1.style.opacity = 1
      distort2.style.opacity = 0
      distort3.style.opacity = 0
      distort4.style.opacity = 0
      distort1.style.pointerEvents = 'auto'
      distort2.style.pointerEvents = 'none'
      distort3.style.pointerEvents = 'none'
      distort4.style.pointerEvents = 'none'
    } else {
      if(index == 2){
        distort1.style.opacity = 0
        distort2.style.opacity = 1
        distort3.style.opacity = 0
        distort4.style.opacity = 0
        distort1.style.pointerEvents = 'none'
        distort2.style.pointerEvents = 'auto'
        distort3.style.pointerEvents = 'none'
        distort4.style.pointerEvents = 'none'
      } else {
        if(index == 3){
          distort1.style.opacity = 0
          distort2.style.opacity = 0
          distort3.style.opacity = 1
          distort4.style.opacity = 0
          distort1.style.pointerEvents = 'none'
          distort2.style.pointerEvents = 'none'
          distort3.style.pointerEvents = 'auto'
          distort4.style.pointerEvents = 'none'
        } else {
          if(index == 4){
            distort1.style.opacity = 0
            distort2.style.opacity = 0
            distort3.style.opacity = 0
            distort4.style.opacity = 1
            distort1.style.pointerEvents = 'none'
            distort2.style.pointerEvents = 'none'
            distort3.style.pointerEvents = 'none'
            distort4.style.pointerEvents = 'auto'
          }
        }
      }
    }
  }
  const handleLeave = () => {
    setHover(false);
  }

  return (
    <>
    <div className={styles.container}>
      <div className={styles.canvas}>
        <a href="https://saipepu.github.io/micro-animations/" target="_blank" rel="noopener" className={styles.labelContainer} onMouseOver={() => handleHover('1')} onMouseLeave={() => handleLeave()}>
          <h1 className={styles.index}>01</h1>
          <h1 className={styles.demoText} data-att='hovering'>hovering</h1>
        </a>
        <a href="#" target="_blank" rel="noopener" className={styles.labelContainer} onMouseOver={() => handleHover('2')} onMouseLeave={() => handleLeave()}>
          <h1 className={styles.index}>02</h1>
          <h1 className={styles.demoText} data-att='luciana'>luciana</h1>
        </a>
        <a href="#" target="_blank" rel="noopener" className={styles.labelContainer} onMouseOver={() => handleHover('3')} onMouseLeave={() => handleLeave()}>
          <h1 className={styles.index}>03</h1>
          <h1 className={styles.demoText} data-att='transition'>transition</h1>
        </a>
        <a href="#" target="_blank" rel="opener" className={styles.labelContainer} onMouseOver={() => handleHover('4')} onMouseLeave={() => handleLeave()}>
          <h1 className={styles.index}>04</h1>
          <h1 className={styles.demoText} data-att='dodo'>dodo</h1>
        </a>
      </div>
      <div className={styles.imgContainer}>
        <div ref={Distort_1} id="distort1" className={hover ? `${styles.imgWrapper} ${styles.animation}` : `${styles.imgWrapper}`}>
        </div>
        <div ref={Distort_2} id="distort2" className={hover ? `${styles.imgWrapper} ${styles.animation}` : `${styles.imgWrapper}`}>
        </div>
        <div ref={Distort_3} id="distort3" className={hover ? `${styles.imgWrapper} ${styles.animation}` : `${styles.imgWrapper}`}>
        </div>
        <div ref={Distort_4} id="distort4" className={hover ? `${styles.imgWrapper} ${styles.animation}` : `${styles.imgWrapper}`}>
        </div>
      </div>
    </div>
    </>
  )
}
export default ProjectsContainer;