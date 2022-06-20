import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './cta.module.scss'

const CtaButton = ({menu, children}) => {
  const navigate = useNavigate();
  
  const handleHover = (e) => {
    if (e.target.id == 'contactCta') {
      const demo_cursor = document.getElementById("demo_cursor")
      demo_cursor.style.transform = `translate3d(${e.pageX}px, ${e.pageY}px, 0) scale(2)`;
    }
    const bg = document.getElementById("pageWrapper")
    // bg.style.pointerEvents = 'none'
  }
  const handleLeave = (e) => {
    const demo_cursor = document.getElementById("demo_cursor")
    demo_cursor.style.transform = `scale(1)`;
  }

  return (
    <>
      <div onClick={() => navigate('/pepu/contactme')} onMouseMove={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} className={styles.CtaButton} style={!menu ? {borderColor: '#081121'} : {borderColor: '#D3D2C7'}} id="contactCta">
        {children}
      </div>
    </>
  )
}
export default CtaButton;