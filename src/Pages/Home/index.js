import React, { useEffect, useRef, useState } from 'react';
import BouncingButton from '../../components/common/bouncingButton';
import CtaButton from '../../components/common/cta';
import Footer from '../../components/common/footer';
import SkewTextContainer from '../../components/common/skewText';
import ProjectsContainer from '../../components/projectsContainer.js/projectsContainer';
import Layout from '../../layout';
import styles from './home.module.scss'

const Home = () => {

  const OnResize = () => {
    const body = document.body;
    const scrollContainer = document.querySelector('#scrollContainer')
    const height = scrollContainer.getBoundingClientRect().height;
    const speed = 0.04;
    var offset = 0;
    body.style.height = Math.floor(height) + 'px'
  
    var currentTop = body.getBoundingClientRect().top;
    const smoothScroll = () => {
      var newBodyTop = body.getBoundingClientRect().top;
      offset += (newBodyTop - offset) * speed;
      var smoothing = `translateY(${offset}px) translateZ(0)`;

      if (window.innerWidth <= 1024) {
        var smoothing = `translateY(${newBodyTop}px) translateZ(0)`
      }
      scrollContainer.style.transform = smoothing;
      requestAnimationFrame(smoothScroll)
    }
    smoothScroll()
  }
  useEffect(() => {
    OnResize()
  }, [])

  window.onresize = () => {
    OnResize();
  }

  return (
    <>
    <Layout>
      <div className={styles.container} id="scrollContainer">
        <p className={styles.iam}>I AM</p>
        <p className={styles.profile}>Frontend<br />Developer & Designer</p>
        <div className={styles.bigBold}>PEPU</div>
        <div className={styles.content}>
          <div className={styles.para}>
            Frontend engineer and UI/UX junkie, passionate   about web technologies,  interactive web design, problem-solving, typo-graphy and micro animation.
          </div>
          <div className={styles.CtaButton}>
            <CtaButton>Contact</CtaButton>
          </div>
        </div>
        <div className={styles.skewTextContainer}>
          <SkewTextContainer line1={'Not Your'} line2={'-Average-'} line3={'Developer'} />
        </div>
        <div className={styles.dividerTitle}>
          heighlighted projects
        </div>
        <div className={styles.projectsContainer}>
          <ProjectsContainer />
        </div>
        <div className={styles.dividerTitle}>
          before you go
        </div>
        <div className={styles.skewTextContainer}>
          <SkewTextContainer contact={true} line1={'Keep in touch'} line2={'saipepu.mdy'} line3={'257@gmail.com'} />
        </div>
        <div className={styles.aboutMeCta}>
          <BouncingButton backText={'Get to know me more!'} frontText={'About me'} link={'about'}/>
        </div>
      <Footer />
      </div>
    </Layout>
    </>
  )
}
export default Home;