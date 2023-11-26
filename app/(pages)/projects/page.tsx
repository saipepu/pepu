import Link from 'next/link'
import React from 'react'
import Th_JudgeHub from './_components/judgehub'

const Projects = () => {
  return (
    <div className="bg-[#2d2d2d] md:h-full px-[16px] md:px-[50px] py-[24px] pt-[100px] flex flex-col md:flex-row justify-center items-start gap-[10px]">
      <div className="md:flex-1 md:h-full flex flex-col justify-between items-start">
        <h1 className="text-[56px] font-bold leading-[110%]">My Frontend Adventures</h1>
        <div className="text-[24px] flex-col justify-end items-start hidden md:flex">
          <Link href="/projects" target="_blank">EMAIL</Link>
          <Link href="/projects">GITHUB</Link>
          <Link href="/projects">LINKEDIN</Link>
        </div>
      </div>
      <div className="md:max-h-full w-full md:flex-1 flex flex-col justify-start items-start gap-[10px] overflow-scroll md:py-[300px]">
        <div className="w-full flex bg-white min-h-[300px]">
          <Th_JudgeHub />
        </div>
        <div className="w-full bg-gray-600 min-h-[300px]"></div>
        <div className="w-full bg-gray-600 min-h-[300px]"></div>
        <div className="w-full bg-gray-600 min-h-[300px]"></div>
      </div>
      <div className="text-[24px] w-full flex-col justify-end items-start flex md:hidden">
          <Link href="/projects" target="_blank">EMAIL</Link>
          <Link href="/projects">GITHUB</Link>
          <Link href="/projects">LINKEDIN</Link>
        </div>
    </div>
  )
}

export default Projects