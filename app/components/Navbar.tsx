"use client";

import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import white_arrow from '@/public/assets/icons/arrow.png'

const Navbar = () => {

  const params = usePathname()

  return (
    <div className="z-[9999] fixed w-full flex justify-center items-center">
      <div className="bg-[#2d2d2d80] backdrop-blur-[2px] w-full max-w-[1000px] py-[12px] px-[10px] md:px-[20px] flex flex-row justify-between items-center">
        <Link href="/"><h1 className="font-[400] text-[24px]">SAI PEPU</h1></Link>
        <div className="flex flex-row justify-center items-center gap-[10px] md:gap-[20px] font-[400] text-[24px]">
          <Link href="https://github.com/saipepu" target="_blank" className='flex items-center'>
            <Image
              src={white_arrow}
              alt="white_arrow"
              className='w-[16px] h-[16px] -rotate-45'
            />
            <p>github.com</p>
          </Link>
          {/* <Link href="/bio" className={params === '/bio' ? 'text-[#666666] cursor-text' : 'block'}>bio</Link> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar