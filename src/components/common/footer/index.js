import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './footer.module.scss'

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className={styles.footerContainer}>
      <div className={styles.status} onClick={() => navigate('/contact')}>
        <div className={styles.content}>
          avaliable for<br />freelance projects
        </div>
        <div className={styles.hoverEffect}>
          <div className={styles.bar}></div>
          <div className={styles.discuss}>discuss</div>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <ul>
          <li><a href="https://www.instagram.com/p_e_p_u/">Instagram,</a></li>
          <li><a href="https://github.com/saipepu">Github,</a></li>
          <li><a href="https://www.linkedin.com/in/pe-pu-6746441b6/">LinkedIn</a></li>
        </ul>
      </div>
      <div className={styles.credit}>
        <p>pepu_scratched</p>
        <p>pepu_publish</p>
      </div>
    </div>
    </>
  )
}
export default Footer;