import React, { useEffect } from 'react'
import Footer from '../../components/common/footer'
import ProjectCard from '../../components/projectsCard/projectsCard'
import Layout from '../../layout'
import styles from './work.module.scss'

const Projects = () => {

  useEffect(() => {
    const body = document.body;
    const scrollContainer = document.querySelector('#scrollContainer')
    const card =document.querySelectorAll('#box')
    const height = scrollContainer.getBoundingClientRect().height;
    const speed = 0.04;
    var offset = 0;
    body.style.height = Math.floor(height) + 'px'

    var currentTop = body.getBoundingClientRect().top;
    var count = 0;
    const smoothScroll = () => {
      var newBodyTop = body.getBoundingClientRect().top;
      offset += (newBodyTop - offset) * speed;
      if (count == 0) {
        window.scrollTo(0,0)
        count = count + 1
      } else {
        var smoothing = `translateY(${offset}px) translateZ(0)`;
      }
      count = count + 1
      scrollContainer.style.transform = smoothing;

      const different = newBodyTop - currentTop;
      const acceleration = different * 1;
      var skew = 'skewY(' + acceleration + 'deg)';
      card.forEach((item) => {
        item.style.transform = skew
      })
      currentTop = newBodyTop

      requestAnimationFrame(smoothScroll)
    }

    smoothScroll()
  }, [])

  return (
    <Layout>
      <div className={styles.container} id="scrollContainer">
        <div className={styles.heroSection}>
          <div className={styles.bigBold}>
            WO<br/>RKS
          </div>
          <div className={styles.status}>
            <div className={styles.date}>
              <span className={styles.day}>24</span>
              <span className={styles.month}>may</span>
              <span className={styles.status}>available<br />for projects</span>
            </div>
            <div className={styles.content}>
              I design and code beautifully simple things, and I love what I do
            </div>
          </div>
        </div>
        <div className={styles.projectCardContainer}>
          <ProjectCard link={'https://saipepu.github.io/micro-animations/'} index={'01'} title={'hovering'} brief={'inspired by amazing Designers from the internet'} description={'these are some useful micro-animation that you can use in your website to grab users attention. Most of the animations are recreated from awards winning websites.'} />
          <ProjectCard index={'02'} title={'luciana'} brief={'inspired by amazing Designers from the internet'} description={'a modern ecommerce site with two role users (customers) and admins. Built with next.js and node.js, express, mongodb plus other third-party libraries to improve the code quality.'} />
          <ProjectCard index={'03'} title={'transition'} brief={'inspired by amazing Designers from the internet'} description={'smooth and elegant transition animation while navigating one page to another.'} />
          <ProjectCard index={'04'} title={'dodo'} brief={'inspired by amazing Designers from the internet'} description={'a minimalist productivity app where you schedule and tackle your tasks and manage your projects.'} />
        </div>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </Layout>
  )
}

export default Projects
