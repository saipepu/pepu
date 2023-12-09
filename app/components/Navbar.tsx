"use client";

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

  const params = usePathname()
  console.log(params)

  return (
    <div className="z-[9999] fixed max-w-[1200px] flex bg-blue-100">
      <div className="bg-[#2d2d2d] py-[12px] px-[10px] md:px-[20px] flex flex-row justify-between items-center">
        <Link href="/"><h1 className="font-[400] text-[24px]">SAI PEPU</h1></Link>
        <div className="flex flex-row justify-center items-center gap-[10px] md:gap-[20px] font-[400] text-[24px]">
          <Link href="/projects" className={params === '/projects' ? 'text-[#666666] cursor-text' : 'block'}>projects</Link>
          <Link href="/bio" className={params === '/bio' ? 'text-[#666666] cursor-text' : 'block'}>bio</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar