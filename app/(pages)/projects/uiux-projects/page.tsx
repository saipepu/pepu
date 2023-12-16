"use client";

import React from 'react'
import judgehub from '../../../../public/project-list-image/judgehub.png'
import athena from '../../../../public/project-list-image/athena.png'
import notion_clone from '../../../../public/project-list-image/notion-clone.png'
import Image, { StaticImageData } from 'next/image';

type project = {
  name: String,
  category: String[],
  description: String,
  link: String,
  image: StaticImageData
}

const page = () => {

  const projectList: project[] = [
    {
      name: "JudgeHub",
      category: ["UI","UX","Frontend","Backend"],
      description: "JudgeHub is a real-time Leaderboard which is specifically design for a Digital Design and Innovation (DDI) StartUp Pitching Competition held by the Assumption University in Thailand.",
      link: "/judgehub",
      image: judgehub
    },
    {
      name: "Notion",
      category: ["UI","UX","Frontend","Backend"],
      description: "Ecotec is a sustainable activity encouraging app that promotes environmental friendly actions. This project opened up a rare opportunity to experience my first national hackathon (HackaThailand) and ranked the 5th Place in the Final Stage.",
      link: "/ecotec",
      image: notion_clone
    },
    {
      name: "Athena",
      category: ["Frontend","Backend"],
      description: "This is Tech Startup Project called ‘Athena’. Athena is a learn-to-earn platform that encourage the process of learning by gamification.",
      link: "/athena",
      image: athena
    },
  ]

  return (
    <main className="bg-[#2d2d2d] overflow-scroll">
      <div className="h-full w-full pt-[80px] flex justify-center items-center">
        <div className="w-full max-w-[1200px] md:h-full flex flex-col justify-start items-center gap-[2px] px-[10px] md:px-[20px]">
          <div className="py-[50px] min-h-[90%] w-full flex flex-col justify-between items-center text-white overflow-hidden border-b-[1px] border-white">
            <div className='text-[18px] md:text-[24px] font-[300] text-center tracking-tighter leading-tight'>
              Hi! I’m Sai PePu, a creative developer based in Thailand,
              <br />looking for new job opportunities as
              <br />a web designer and a web developer.
            </div>
            <div className='text-[18px] md:text-[56px] font-[500] text-center tracking-tighter leading-[100%]'>
              I craft stunning
              <br />websites
              <br />for
              <br />seamless user
              <br />experiences.
            </div>
            <div className='text-[18px] md:text-[24px] font-[300] text-center tracking-tighter leading-tight'>
              <p>
                "Turning pixels into websites, step by step –
                <br />where new ideas meet great design, and
                <br />user experiences go beyond what you'd expect."
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-[10px] text-black mt-[100px] pb-[50px]">
            {projectList.map((item, index) => {
              return (
                <div className='w-[300px] md:w-[600px] flex flex-col' key={index}>
                  <div className='w-full h-[200px] md:h-[300px] bg-white rounded-[20px] md:rounded-[40px] overflow-hidden'>
                    <Image
                      src={item.image}
                      alt="adf"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className='w-full text-white text-center text-[28px] leading-tight'>{item.name}</p>
                  <div className='flex justify-center items-center gap-[10px]'>
                    {item.category.map((c, index) => {
                      return (
                        <p className='text-white'>{c}</p>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
