"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import judgehubTh from '../../../../public/project-list-image/judgehub.png'
import notion_cloneTh from '../../../../public/project-list-image/notion-clone.png'
import athenaTh from '../../../../public/project-list-image/athena.png'

const ParallaxContainer = () => {

  useEffect(() => {

    let container = document.getElementById('container')
    let bio = document.getElementById('bio')

    // object1,2,3,4 represent the animating element
    let object1 = document.getElementById('object1')
    let object2 = document.getElementById('object2')
    let object3 = document.getElementById('object3')
    let object4 = document.getElementById('object4')
    if(container && bio) {
      
      const animateObject = () => {
        let top = bio?.getBoundingClientRect().top ? bio?.getBoundingClientRect().top : 0
        if(object1 && object2 && object3 && object4 && top != 0){
            object1.style.top = `${1 * top + 400}px`
            object2.style.top = `${0.8 * top + 900}px`
            object3.style.top = `${0.3 * top + 700}px`
            object4.style.top = `${1.2 * top + 500}px`
        }
        requestAnimationFrame(animateObject)
      }
      animateObject()
    }
  }, [])

  return (
    <div id="bio" className="relative min-h-[90vh] md:my-[50px] my-[100px] w-full flex flex-col justify-between items-center text-white border-b-[1px] border-white overflow-hidden">

      <div className='absolute opacity-50  w-full h-full -z-1'>
        <div id="object1" className=' absolute w-[80px] md:w-[200px] h-[40px] md:h-[100px] bottom-[-50px] left-0 duration-0 overflow-hidden'>
          <Image
            src={judgehubTh}
            alt="adf"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="object2" className=' absolute w-[80px] md:w-[200px] h-[40px] md:h-[100px] top-[40%] right-0 duration-0'>
          <Image
            src={notion_cloneTh}
            alt="adf"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="object3" className=' absolute w-[80px] md:w-[200px] h-[40px] md:h-[100px] top-[105%] right-[20%] duration-0'>
          <Image
            src={judgehubTh}
            alt="adf"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="object4" className=' absolute w-[80px] md:w-[200px] h-[40px] md:h-[100px] top-[60%] left-[40%] duration-0'>
          <Image
            src={athenaTh}
            alt="adf"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className='z-[99] flex text-[18px] md:text-[24px] font-[300] text-center tracking-tighter leading-tight'>
        <p>
          I'm looking for new job opportunities as
          <br />a web designer and a web developer.
        </p>
      </div>
      <div className='z-[99] flex text-[32px] md:text-[56px] font-[500] text-center tracking-tighter leading-[100%]'>
        <p>
          I craft stunning
          <br />websites
          <br />for
          <br />seamless user
          <br />experiences.
        </p>
      </div>
      <div className='z-[99] flex text-[18px] md:text-[24px] font-[300] text-center tracking-tighter leading-tight mb-[50px]'>
        <p>
          "Turning pixels into websites, step by step –
          <br />where new ideas meet great design, and
          <br />user experiences go beyond what you'd expect."
        </p>
      </div>

    </div>
  )
}

export default ParallaxContainer