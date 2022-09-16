import React, { useEffect, useRef, useState } from 'react';
import BouncingButton from '../../components/common/bouncingButton';
import CtaButton from '../../components/common/cta';
import Footer from '../../components/common/footer';
import Layout from '../../layout';
import styles from './contact.module.scss'
import emailjs from 'emailjs-com'
import Splitting from 'splitting'

const Contact = () => {
  const splitWord = useRef();
  const [paraX, setParaX] = useState(0)
  const [paraY, setParaY] = useState(0)
  const [sent, setSent] = useState()
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qs0ifwn', 'template_rf3879x', form.current, 'user_ubipvwIhsyqQzy3VcDLcv')
    .then((result) => {
      console.log(result);
      setSent('completed')
    }, (error) => {
      console.log(error.text)
      setSent('failed')
    })
    form.current.reset();
  }

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

    if(splitWord) {
      const result = Splitting({
        target: splitWord.current,
        by: 'chars'
      })
      result[0].words.map((item, index) => {
        item.style.margin = '0px 5px'
      })
      result[0].chars.map((item, index) => {
        item.style.animationDelay = `${index * 0.025}s`
      })
    }

    OnResize()
  }, [])

  window.onresize = () => {
    OnResize();
  }

  return (
    <>
    <Layout>
      <div className={styles.container} id="scrollContainer">
        <div className={styles.bodyContainer}>
          <div className={styles.bouncingCtaContainer}>
            <BouncingButton backText={'Get to know me more'} frontText={'About me'} link={'about'}/>
          </div>

          <div className={styles.contentPart}>
            <div className={styles.title} ref={splitWord}>
              let's do a<span className={styles.bold}>Colleboration</span><br />
              <span className={styles.bold}>Available</span>for freelane projects
            </div>
            <div className={styles.formContainer}>
              <form ref={form} onSubmit={sendEmail}>
                <input type="email" name="email" placeholder="your email" required/>
                <input type="text" name="brief"  placeholder="brief about your project" required/>
                <button type="submit" className={styles.sendBtn}>
                  <CtaButton noLink={true}>SEND</CtaButton>
                </button>
                <div className={styles.feedback}>
                  {sent == 'completed' ? <p>Your E-mail has been received by PePu. Thanks for reaching out!</p> : ''}
                  {sent == 'failed' ?  <p className={styles.error}>Ooops Something went wrong. Please try again!</p>: ''}
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
    </>
  )
}
export default Contact;