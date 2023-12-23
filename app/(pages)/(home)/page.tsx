"use client";

import React, { useEffect } from 'react'
import Hero from './_components/hero';
import Highlights from './_components/highlights';
import ParallaxContainer from './_components/parallaxContainer';
import ProjectList from './_components/projectList';
import Footer from './_components/footer';

const Home = () => {

  useEffect(() => {

    let container = document.getElementById('container')
    let bio = document.getElementById('bio')
    let object1 = document.getElementById('object1')
    let object2 = document.getElementById('object2')
    let object3 = document.getElementById('object3')
    let object4 = document.getElementById('object4')
    if(container && bio) {
      
      const animateObject = () => {
        let top = bio?.getBoundingClientRect().top ? bio?.getBoundingClientRect().top : 0
        console.log(top)
        if(object1 && object2 && object3 && object4 && top != 0){
            object1.style.top = `${1 * top + 400}px`
            object2.style.top = `${0.8 * top + 900}px`
            object3.style.top = `${0.3 * top + 700}px`
            object4.style.top = `${1.2 * top + 500}px`
            // object1.style.transform = `translateY(${1.5 * top }px)`
            // object2.style.transform = `translateY(${0.5 * top }px)`
            // object3.style.transform = `translateY(${2.5 * top }px)`
            // object4.style.transform = `translateY(${0.3 * top }px)`
        }
        requestAnimationFrame(animateObject)
      }
      animateObject()
    }
  }, [])

  return (
      <div id="container" className="h-full w-full pt-[70px] pb-[10px] flex flex-col justify-start items-center overflow-scroll">

        <div className="w-full max-w-[1000px] md:h-full flex flex-col justify-start items-center gap-[2px] px-[10px] md:px-[20px]">
          
          <Hero />
          <Highlights />
          <ParallaxContainer />
          <ProjectList />

          <Footer />

        </div>
        
      </div>
  )
}

export default Home