"use client";

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

  const params = usePathname()
  console.log(params)

  return (
    <div className="bg-[#2d2d2d] w-full py-[24px] px-[50px] flex flex-row justify-between items-center">
      <h1>SAI PEPU</h1>
      <div className="flex flex-row justify-center items-center gap-[10px] md:gap-[20px]">
        <Link href="/projects" className={params === '/projects' ? 'text-[#666666]' : 'block'}>projects</Link>
        <Link href="/bio" className={params === '/bio' ? 'text-[#666666]' : 'block'}>bio</Link>
      </div>
    </div>
  )
}

export default Navbar