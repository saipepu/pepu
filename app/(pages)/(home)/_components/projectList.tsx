"use client";

import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import judgehubTh from '../../../../public/project-list-image/judgehub.png'
import notion_cloneTh from '../../../../public/project-list-image/notion-clone.png'
import athenaTh from '../../../../public/project-list-image/athena.png'
import ecotecTh from '../../../../public/ecotec/thumbnail.png'
import spatial_designTh from '../../../../public/spatial-design/v-final.png'
import foodifyTh from '../../../../public/foodify/mockup-1.png'
import bikyhoodTh from '../../../../public/bikyhood/wireframe.png'
import iLeanTh from '../../../../public/ilearn/thumbnail.png'

type project = {
  name: String,
  category: String[],
  description: String,
  link: String,
  image: StaticImageData
}

const ProjectList = () => {

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

  return (
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
  )
}

export default ProjectList