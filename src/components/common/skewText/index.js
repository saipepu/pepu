import React from 'react';
import styles from './skewText.module.scss'

const SkewTextContainer = ({contact, inspiration, line1, line2, line3}) => {

  return (
    <>
    <div className={styles.skewTextContainer}>
      <div className={contact ? `${styles.line1} ${styles.outline}` : `${styles.line1}`}>{line1}</div>
      <div className={contact ? `${styles.line2}` : `${styles.line2} ${styles.outline}`}>{line2}</div>
      <div className={inspiration ? `${styles.line3} ${styles.inspiration}` : `${styles.line3}`}>{line3}</div>
    </div>
    </>
  )
}
export default SkewTextContainer;