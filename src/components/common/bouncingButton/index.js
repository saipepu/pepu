import React, { useState } from 'react';
import styles from './bouncingButton.module.scss'
import right_arrow from '../../../magneticHoverImg.png'
import { useNavigate } from 'react-router-dom';

const BouncingButton = ({backText, frontText, link}) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [isFloat, setFloat] = useState(false);
  const [posY, setPosY] = useState(0);
  const [posX, setPosX] = useState(0);
  const [floatX, setFloatX] = useState(0);
  const [floatY, setFloatY] = useState(0);


  const handleHover = (e) => {

    const labelContainerRef = document.querySelector('#container')
    const LC_X = labelContainerRef.getBoundingClientRect().left;
    const LC_Width = labelContainerRef.clientWidth / 2;
    const transX = LC_X + LC_Width;
    setFloatX(((e.pageX - transX) * 1) / 4)

    const LC_Y = labelContainerRef.getBoundingClientRect().top;
    const LC_Height = labelContainerRef.clientHeight / 2;
    const bodyTop = document.body.getBoundingClientRect().top;
    const transY = LC_Y + LC_Height - bodyTop;
    setFloatY(((e.pageY - transY) * 1) / 4)
    setPosX(e.pageX);
    setPosY(e.pageY);
    setIsHover(true);
  }

  const handleLeave = (e) => {
    setIsHover(false);
  }

  const float = {
    opacity: 1,
    transition: 'opacity 0.5s ease-in-out',
    transform: `translate(${floatX}px, ${floatY}px)`
  }
  const noFloat = {
    opacity: 0,
    transition: 'opacity 0s ease-in-out',
    transform: `translate(0px, 0px)` 
  }
  const show = {
    backgroundColor: '#081121'
  }
  const hide = {
    backgroundColor: 'transparent'
  }

  return (
    <>
    <div onClick={() => navigate(`/pepu/${link}`)} className={styles.container} id="container" onMouseMove={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)}>
      <div className={styles.backCircle}>
        <p className={styles.text}>{backText}</p>
      </div>
      <div className={styles.frontCircle} data-attr={isHover ? 'hover' : 'nohover'}>
        <p className={styles.text}>{frontText}</p>
      </div>
      <div className={styles.magneticHover} style={isFloat ? show : hide} onMouseOver={() => setFloat(true)} onMouseLeave={() => setFloat(false)}>
        <img src={right_arrow} alt="rightArrowOutlinedPng" style={isFloat ? float: noFloat}/>
      </div>
    </div>
    </>
  )
}
export default BouncingButton;