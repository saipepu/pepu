import React, { useEffect, useState } from 'react'
import BouncingButton from '../../components/common/bouncingButton'
import Footer from '../../components/common/footer'
import SkewTextContainer from '../../components/common/skewText'
import Layout from '../../layout'
import styles from './about.module.scss'

const About = () => {
  const [firstLand, setFirstLand] = useState(true);

  const OnResize = () => {
    const body = document.body;
    const scrollContainer = document.querySelector('#scrollContainer')
    const height = scrollContainer.getBoundingClientRect().height;
    const speed = 0.04;
    var offset = 0;
    body.style.height = Math.floor(height) + 'px'
  
    var currentTop = body.getBoundingClientRect().top;
    var count = 0;
    const smoothScroll = () => {
      var newBodyTop = body.getBoundingClientRect().top;
      console.log(body.getBoundingClientRect().top)
      offset += (newBodyTop - offset) * speed;
      if (count == 0) {
        window.scrollTo(0,0)
        count = count + 1
      } else {
        var smoothing = `translateY(${offset}px) translateZ(0)`;
      }
      count = count + 1
      scrollContainer.style.transform = smoothing;
      requestAnimationFrame(smoothScroll)
    }
    smoothScroll()
  }
  useEffect(() => {
    OnResize()
    setFirstLand(true);
  }, [])

  window.onresize = () => {
    OnResize();
  }

  return (
    <Layout >
      <div className={styles.container} id="scrollContainer">
        <div className={styles.heroSection}>
          <div className={styles.bigBold}>
            ABOUT<span>PEPU</span>
          </div>
          <div className={styles.status}>
            <div className={styles.date}>
              <span className={styles.day}>24</span>
              <span className={styles.month}>may</span>
              <span className={styles.status}>available<br />for projects</span>
            </div>
          </div>
        </div>
        <div className={styles.bodySection}>
          <div className={styles.profileContainer}>
            <div className={styles.index}>
              <p>profile</p>
            </div>
            <div className={styles.content}>
              A designer who can code &
              A coder who can design.
            </div>
          </div>
          <div className={styles.whatIdo}>
            <div className={styles.index}>
              <div className={styles.profileImgContainer}>

              </div>
            </div>
            <div className={styles.content} data-attr={'noPseudo'}>
              With a background in designing, Pepu love to create visually stunning interfaces, build interactive programs with his coding skills and coalesce them to facilitate enjoyable experiences for the users on the web.
            </div>
          </div>
          <div className={styles.accent}>
            <div className={styles.index}>
              <p>philosophy</p>
            </div>
            <div className={styles.content}>
              Regardless of what you want to get motivated about, the answer always begins with action.
            </div>
          </div>
          <div className={styles.workSpaceImgContainer}>
            <div className={styles.imgWrapper}>
              
            </div>
          </div>
          <div className={styles.skewTextContainer}>
            <SkewTextContainer contact={true} inspiration={true} line2={'ACTION CREATES'} line3={'INSPIRATION'}/>
          </div>
          <div className={styles.pitch}>
            <div className={styles.index}>
              <p>talk is cheap</p>
            </div>
            <div className={styles.content}>
              let me show you the works
            </div>
          </div>
          <div className={styles.bouncingCtaContainer}>
            <BouncingButton backText={'highlighted projects'} frontText={'works'} link={'projects'}/>
          </div>
          <div className={styles.footerContainer}>
            <Footer />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
