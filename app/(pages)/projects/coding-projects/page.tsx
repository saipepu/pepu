"use client";

import React from 'react'

type project = {
  name: String,
  category: String[],
  description: String,
  link: String
}


const page = () => {

  const projectList: project[] = [
    {
      name: "JudgeHub",
      category: ["UI","UX","Frontend","Backend"],
      description: "JudgeHub is a real-time Leaderboard which is specifically design for a Digital Design and Innovation (DDI) StartUp Pitching Competition held by the Assumption University in Thailand.",
      link: "/judgehub"
    },
    {
      name: "Ecotec",
      category: ["UI","UX","Frontend","Backend"],
      description: "Ecotec is a sustainable activity encouraging app that promotes environmental friendly actions. This project opened up a rare opportunity to experience my first national hackathon (HackaThailand) and ranked the 5th Place in the Final Stage.",
      link: "/ecotec"
    },
    {
      name: "Athena",
      category: ["Frontend","Backend"],
      description: "This is Tech Startup Project called ‘Athena’. Athena is a learn-to-earn platform that encourage the process of learning by gamification.",
      link: "/athena"
    },
  ]

  return (
    <main className="h-full bg-[#2d2d2d]">
      <div className='w-full h-full pt-[90px] flex flex-col justify-start items-center bg-[#2d2d2d] text-black'>

        <div className="bg-[#2d2d2d] w-full max-w-[1200px] px-[10px] md:px-[20px] flex flex-col justify-center items-start gap-[10px] overflow-scroll">

          <div className='flex-1 w-full min-h-full py-[50px] flex flex-col justify-between items-center border-[1px] text-white border-yellow-500'>
            <p className='text-[18px] md:text-[24px] text-center tracking-tighter leading-tight'>
              Hi! I’m Sai PePu, a creative developer based in Thailand,
              <br />looking for new job opportunities as
              <br />a web designer and a web developer.
            </p>
            <p className='text-[18px] md:text-[56px] font-[500] text-center tracking-tighter leading-[100%]'>
              I craft stunning
              <br />websites
              <br />for
              <br />seamless user
              <br />experiences.
            </p>
            <p className='text-[18px] md:text-[24px] text-center tracking-tighter leading-tight'>
              "Turning pixels into websites, step by step –
              <br />where new ideas meet great design, and
              <br />user experiences go beyond what you'd expect."
            </p>
          </div>

          <div className='min-h-[300px] w-full bg-gray-50'>
          </div>

        </div>

      </div>
    </main>
  )
}

export default page