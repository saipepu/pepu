"use client";

import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import arrow from '../../../public/assets/icons/arrow.png'
import arrow_black from '../../../public/assets/icons/arrow_black.png'
import profile_picture from '../../../public/profile-picture.png'
import Link from 'next/link';
import judgehubTh from '../../../public/project-list-image/judgehub.png'
import notion_cloneTh from '../../../public/project-list-image/notion-clone.png'
import athenaTh from '../../../public/project-list-image/athena.png'
import ecotecTh from '../../../public/ecotec/thumbnail.png'
import spatial_designTh from '../../../public/spatial-design/v-final.png'
import foodifyTh from '../../../public/foodify/mockup-1.png'
import bikyhoodTh from '../../../public/bikyhood/wireframe.png'
import iLeanTh from '../../../public/ilearn/thumbnail.png'
import Hero from './_components/hero';
import Highlights from './_components/highlights';

type project = {
  name: String,
  category: String[],
  description: String,
  link: String,
  image: StaticImageData
}

const Home = () => {

  const projectList: project[] = [
    {
      name: "JudgeHub",
      category: ["Frontend","Backend","UI","UX"],
      description: "JudgeHub is a real-time Leaderboard which is specifically design for a Digital Design and Innovation (DDI) StartUp Pitching Competition held by the Assumption University in Thailand.",
      link: "/judgehub",
      image: judgehubTh
    },
    {
      name: "Notion-Clone",
      category: ["Frontend","Backend"],
      description: "Ecotec is a sustainable activity encouraging app that promotes environmental friendly actions. This project opened up a rare opportunity to experience my first national hackathon (HackaThailand) and ranked the 5th Place in the Final Stage.",
      link: "https://notion-clone-nu.vercel.app",
      image: notion_cloneTh
    },
    {
      name: "Athena",
      category: ["Frontend","Backend"],
      description: "This is Tech Startup Project called ‘Athena’. Athena is a learn-to-earn platform that encourage the process of learning by gamification.",
      link: "/athena",
      image: athenaTh
    },
    {
      name: "Ecotec",
      category: ["Frontend","Backend","UI","UX"],
      description: "Ecotec is a sustainable activity encouraging app that promotes environmental friendly actions. This project opened up a rare opportunity to experience my first national hackathon (HackaThailand) and ranked the 5th Place in the Final Stage.",
      link: "/ecotec",
      image: ecotecTh
    },
    {
      name: "Foodify",
      category: ["UI","UX","Project Management", "Research"],
      description: "Foodify is a digital menu app that provide seamless experience in a restaurant by allowing customers to order food from their mobile devices. ",
      link: "/foodify",
      image: foodifyTh
    },
    {
      name: "Spatial Design",
      category: ["UI","UX"],
      description: "Embracing the newly trending technology. Designed a spatial UI design for a school project to showcase the tech skill of the students using Augmented Reality Technology.",
      link: "/spatial-design",
      image: spatial_designTh
    },
    {
      name: "bikyhood",
      category: ["UI"],
      description: "A user-friendly blend of modern digital marketplace, crafted to enhance the experience of students trading and buying bike around the campus.",
      link: "/bikyhood",
      image: bikyhoodTh
    },
    {
      name: "iLearn",
      category: ["UI","UX","Swift"],
      description: "This project is for a Swift Hackathon held by the D*Code which is the Main coding club in my University.The purpose of the Hackathon is to have some hands on Swift Programming Language and iOS development.",
      link: "/ilearn",
      image: iLeanTh
    },
  ]

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

        <div className="w-full max-w-[1100px] md:h-full flex flex-col justify-start items-center gap-[2px] px-[10px] md:px-[20px]">
          
          <Hero />
          <Highlights />

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

          <div id="coding" className="w-full flex flex-col justify-start items-center gap-[2px] text-black py-[50px]">
            <p className='text-white text-[32px] font-[500] mb-[20px]'>Projects</p>
            {projectList.map((item, index) => {
              return (
                <Link
                  href={`${item.link}`}
                  target="_blank"
                  className='w-full md:w-[500px] md:h-[300px] flex flex-col bg-white rounded-[20px] md:rounded-[40px] p-[2px]'
                  key={index}
                >
                  <div className='w-full h-[200px] md:h-[300px] bg-white rounded-[20px] md:rounded-[40px] overflow-hidden'>
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt="adf"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      ''
                    )}
                  </div>
                  <div className='py-[10px]'>
                    <p className='w-full text-black text-center text-[28px] leading-tight'>{item.name}</p>
                    <div className='flex justify-center items-center gap-[10px]'>
                      {item.category.map((c, index) => {
                        return (
                          <p className='text-black' key={index}>{c}</p>
                        )
                      })}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="pb-[20px] text-[24px] w-full flex flex-col md:flex-row justify-end items-start md:justify-center md:gap-[20px]">
            <Link href="/projects" target="_blank">EMAIL</Link>
            <Link href="https://github.com/saipepu" target="_blank">GITHUB</Link>
            <Link href="https://www.linkedin.com/in/pe-pu-6746441b6/" target="_blank">LINKEDIN</Link>
          </div>

        </div>
        
      </div>
  )
}

export default Home