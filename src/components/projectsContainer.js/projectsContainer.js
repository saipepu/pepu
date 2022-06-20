import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './projectsContainer.module.scss'

const ProjectsContainer = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false)

  const handleHover = () => {
    setHover(true);
  }
  const handleLeave = () => {
    setHover(false);
  }

  return (
    <>
    <div className={styles.container}>
      <div className={styles.canvas}>
        <a href="https://saipepu.github.io/micro-animations/" target="_blank" rel="noopener" className={styles.labelContainer} onMouseOver={() => handleHover()} onMouseLeave={() => handleLeave()}>
          <h1 className={styles.index}>01</h1>
          <h1 className={styles.demoText} data-att='hovering'>hovering</h1>
        </a>
        <a href="#" target="_blank" rel="noopener" className={styles.labelContainer} onMouseOver={() => handleHover()} onMouseLeave={() => handleLeave()}>
          <h1 className={styles.index}>02</h1>
          <h1 className={styles.demoText} data-att='luciana'>luciana</h1>
        </a>
        <a href="#" target="_blank" rel="noopener" className={styles.labelContainer} onMouseOver={() => handleHover()} onMouseLeave={() => handleLeave()}>
          <h1 className={styles.index}>03</h1>
          <h1 className={styles.demoText} data-att='transition'>transition</h1>
        </a>
        <a href="#" target="_blank" rel="opener" className={styles.labelContainer} onMouseOver={() => handleHover()} onMouseLeave={() => handleLeave()}>
          <h1 className={styles.index}>04</h1>
          <h1 className={styles.demoText} data-att='dodo'>dodo</h1>
        </a>
      </div>
      <div className={styles.imgContainer}>
        <div className={hover ? `${styles.imgWrapper} ${styles.animation}` : `${styles.imgWrapper}`}>
          
        </div>
      </div>
    </div>
    </>
  )
}
export default ProjectsContainer;