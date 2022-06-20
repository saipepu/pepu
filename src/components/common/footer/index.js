import React from 'react';
import styles from './footer.module.scss'

const Footer = () => {

  return (
    <>
    <div className={styles.footerContainer}>
      <div className={styles.status}>
        avaliable<br />freelance projects
        <span>discuss</span>
      </div>
      <div className={styles.socialMedia}>
        <ul>
          <li><a href="https://www.instagram.com/p_e_p_u/">Instagram,</a></li>
          <li><a href="https://github.com/saipepu">Github,</a></li>
          <li><a href="https://www.linkedin.com/in/pe-pu-6746441b6/">LinkedIn</a></li>
        </ul>
      </div>
      <div className={styles.credit}>
        PEPU scratched<br/>
        PEPU published
      </div>
    </div>
    </>
  )
}
export default Footer;