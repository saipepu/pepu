import React, { useEffect } from 'react';
import styles from './projectCard.module.scss'

const ProjectCard = ({index, title, brief, description, link}) => {

  return (
    <>
    <div className={styles.projectCard} id="box">
      <div className={styles.titlePart}>
        <div className={styles.index}>
          {index}/
        </div>
        <a href={link} target="_blank" rel="noopener" className={styles.card} id="card">
          <div className={styles.title} id="title">
            {title}
          </div>
          <div className={styles.brief}>
            {brief}
          </div>
        </a>
      </div>
      <div className={styles.contentPart}>
        <div className={styles.placeHolder}></div>
        <div className={styles.aboutTitle}>
          about
        </div>
        <div className={styles.description}>
          {description}
        </div>
      </div>
    </div>
    </>
  )
}
export default ProjectCard;