import Link from 'next/link'
import React from 'react'
import Th_JudgeHub from './_components/judgehub'

type project = {
  name: String,
  category: String[],
  description: String,
  link: String
}

const Projects = () => {

  const projectList: project[] = [
    {
      name: "JudgeHub",
      category: ["UI","UX","Frontend","Backend"],
      description: "JudgeHub is a real-time Leaderboard which is specifically design for a Digital Design and Innovation (DDI) StartUp Pitching Competition held by the Assumption University in Thailand.",
      link: "/judgehub"
    },
    {
      name: "Spatial Design",
      category: ["UI","UX"],
      description: "Embracing the newly trending technology. Designed a spatial UI design for a school project to showcase the tech skill of the students using Augmented Reality Technology.",
      link: "/spatial-design"
    },
    {
      name: "Foodify",
      category: ["UI","UX","Project Management", "Research"],
      description: "Foodify is a digital menu app that provide seamless experience in a restaurant by allowing customers to order food from their mobile devices. ",
      link: "/foodify"
    },
    {
      name: "bikyhood",
      category: ["UI"],
      description: "A user-friendly blend of modern digital marketplace, crafted to enhance the experience of students trading and buying bike around the campus.",
      link: "/bikyhood"
    },
    {
      name: "iLearn",
      category: ["UI","UX","Swift"],
      description: "This project is for a Swift Hackathon held by the D*Code which is the Main coding club in my University.The purpose of the Hackathon is to have some hands on Swift Programming Language and iOS development.",
      link: "/ilearn"
    },
    {
      name: "Ecotec",
      category: ["UI","UX","Frontend","Backend"],
      description: "Ecotec is a sustainable activity encouraging app that promotes environmental friendly actions. This project opened up a rare opportunity to experience my first national hackathon (HackaThailand) and ranked the 5th Place in the Final Stage.",
      link: "/ecotec"
    },
  ]

  return (
    <div className='w-full h-full flex flex-col justify-start items-center bg-[#2d2d2d]'>
      <div className="bg-[#2d2d2d] w-full max-w-[1200px] md:h-full px-[10px] md:px-[20px] py-[24px] pt-[90px] flex flex-col md:flex-row justify-start items-start gap-[10px]">
        <div className="md:flex-1 md:h-full flex flex-col justify-between items-start">
          <h1 className="text-[56px] font-bold leading-[110%]">My Frontend Adventures</h1>
          <div className="text-[24px] flex-col justify-end items-start hidden md:flex">
            <Link href="/projects" target="_blank">EMAIL</Link>
            <Link href="/projects">GITHUB</Link>
            <Link href="/projects">LINKEDIN</Link>
          </div>
        </div>
        <div className="md:max-h-full w-full md:flex-1 flex flex-col justify-start items-start gap-[2px] overflow-scroll md:py-[300px]">
          {projectList?.map((item, index) => {
            return(
              <div key={index} className="w-full flex bg-white rounded-[30px]">
                <div className="w-full text-black flex flex-col justify-start items-center px-[10px] py-[24px]">
                  <div className="w-full flex flex-col justify-start items-start">
                    <p className="text-[14px] font-[600]">{index+1}</p>
                    <h2 className="text-[24px] font-[600]">{item.name}</h2>
                  </div>
                  <div className="flex-1 w-full h-full flex flex-row justify-start items-start gap-[10px]">
                    <p className="flex-1 text-[14px] font-[300]">{item.category.map(item => `${item}, `)}</p>
                    <div className="h-full flex-1 flex flex-col justify-start items-start gap-[20px]">
                      <p className="text-[14px] font-[200]">{item.description}</p>
                      <Link href={`${item.link}`} className="underline">View Detail</Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-[24px] w-full flex-col justify-end items-start flex md:hidden">
            <Link href="/projects" target="_blank">EMAIL</Link>
            <Link href="/projects">GITHUB</Link>
            <Link href="/projects">LINKEDIN</Link>
        </div>
      </div>
    </div>
  )
}

export default Projects