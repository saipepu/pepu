import React, { useEffect, useRef, useState } from 'react';
import BouncingButton from '../../components/common/bouncingButton';
import CtaButton from '../../components/common/cta';
import Footer from '../../components/common/footer';
import SkewTextContainer from '../../components/common/skewText';
import ProjectsContainer from '../../components/projectsContainer.js/projectsContainer';
import Layout from '../../layout';
import styles from './home.module.scss'
import {gsap} from 'gsap'
import Splitting from 'splitting'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [paraX, setParaX] = useState(0)
  const [paraY, setParaY] = useState(0)
  const splitWord = useRef();
  const [splitted, setSplitted] = useState();

  const OnResize = () => {
    const body = document.body;
    const scrollContainer = document.querySelector('#scrollContainer')
    const height = scrollContainer.getBoundingClientRect().height;
    const speed = 0.04;
    var offset = 0;
    body.style.height = Math.floor(height) + 'px'
  
    const currentBodyTop = body.getBoundingClientRect().top;
    const smoothScroll = () => {
      // console.log(currentBodyTop)
      // console.log(body.getBoundingClientRect().height)
      var newBodyTop = body.getBoundingClientRect().top;
      offset += (newBodyTop - offset) * speed;
      var smoothing = `translateY(${offset}px) translateZ(0)`;

      if (window.innerWidth <= 1080) {
        var smoothing = `translateY(${newBodyTop}px) translateZ(0)`
      }
      scrollContainer.style.transform = smoothing;

      setParaY(((newBodyTop * 0.2) + 100) * 2)

      requestAnimationFrame(smoothScroll)
    }
    smoothScroll()
  }
  useEffect(() => {
    OnResize()

    if(splitWord) {
      const result = Splitting({
        target: splitWord.current,
        by: 'chars'
      })
      setSplitted(result);
      result[0]?.chars.map((item, index) => {
        // item.style.transitionDelay = `${(Math.random() * 0.5) + 0.5}s`
        item.style.animationDelay = `${(index * 0.08) + 1.5}s`
        // console.log(item);
      })
    }
  }, [])

  window.onresize = () => {
    OnResize();
  }

  if (window.innerWidth < 500) {
    var parallax = {
      transform: `translate(${paraX}px, ${paraY * 0.5}px)`
    }
    var parallaxCta = {
      transform: `translate(${paraX}px, ${paraY * 0.5}px)`
    }
  } else {
    var parallax = {
      transform: `translate(${paraX}px, ${paraY}px)`
    }    
    var parallaxCta = {
      transform: `translate(${paraX}px, ${paraY * 0.5}px)`
    }
  }
  var parallax1 = {
    transform: `translate(${paraX}px, ${paraY + 540}px)`
  }
  var parallax2 = {
    transform: `translate(${paraX}px, ${paraY + 240}px)`
  }

  return (
    <>
    <Layout>
      <div className={styles.container} id="scrollContainer">
        <div className={styles.iam}>
          <p>I AM</p>
        </div>
        <div className={styles.profile}>
          <p>Frontend</p>
        </div>
        <div className={styles.profile}>
          <p>Developer & Designer</p>
        </div>
        <div className={styles.bigBold} id="bigBold" ref={splitWord}>PEPU</div>
        <div className={styles.content}>
          <div className={styles.para} style={paraY >= 0 ? parallax: window.innerWidth < 500 ? parallax: {}}>
            Frontend engineer and UI/UX junkie, passionate   about web technologies,  interactive web design, problem-solving, typo-graphy and micro animation.
          </div>
          <div className={styles.CtaButton} style={paraY >= 0 ? parallaxCta: {}}>
            <CtaButton>Contact</CtaButton>
          </div>
        </div>
        <div className={styles.skewTextContainer} style={window.innerWidth < 500 ? parallax: {}}>
          <SkewTextContainer line1={'Not Your'} line2={'-Average-'} line3={'Developer'} />
        </div>
        <div className={styles.dividerTitle} style={parallax2}>
          highlighted projects
        </div>
        <div className={styles.projectsContainer}>
          <ProjectsContainer />
        </div>
        <div className={styles.dividerTitle} style={parallax1}>
          before you go
        </div>
        <div className={styles.skewTextContainer} onClick={() => navigate('/contact')} style={{cursor: 'pointer'}}>
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