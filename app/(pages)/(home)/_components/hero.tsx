"use client";

import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import arrow from '../../../../public/assets/icons/arrow.png'
import arrow_black from '../../../../public/assets/icons/arrow_black.png'
import profile_picture from '../../../../public/profile-picture.png'

const Hero = () => {

  return (
    <div className="w-full min-h-[50vh] flex flex-col-reverse md:flex-row justify-end md:justify-between items-start gap-[10px] text-black bg-white rounded-[30px] md:rounded-[40px] overflow-hidden p-[10px]">

      <div className="w-full md:h-full flex flex-col justify-end items-start">
        <p className="w-full text-[28px] md:text-[42px] font-Inter leading-[110%] tracking-tight font-[300]">I am PePu.
          <span className="
              relative w-[150px] md:w-[200px] inline-flex justify-center items-center 
              text-[24px] md:text-[32px] rounded-full bg-gray-300
              group cursor-pointer
          ">
            ABOUT ME
            <span className="
              absolute w-[24px] h-[24px] md:w-[40px] md:h-[40px] inline-flex justify-center items-center
              text-[14px] md:text-[20px] left-[3px] bg-gray-600 rounded-full text-white
              group-hover:left-[122px] md:group-hover:left-[155px] duration-[0.8s] ease-out group-hover:rotate-180
            ">
              <span className="group-hover:hidden block">Bio</span>
              <Image
                src={arrow}
                alt="arrow"
                className='w-[22px] h-[22px] md:w-[30px] md:h-[30px] rotate-180 hidden group-hover:block'
              />
            </span>
          </span>
          I build user-friendly websites that boost conversion rates for businesses.
        </p>
        <div className='p-1 pl-4 flex justify-center items-center bg-black text-white rounded-full gap-[10px] group'>
          <p className="text-[24px] md:text-[28px] font-[300]">Contact Me</p>
          <div className="w-[28px] h-[28px] md:w-[45px] md:h-[45px] bg-white flex justify-center items-center rounded-full overflow-hidden">
            <Image
              src={arrow_black}
              alt="arrow"
              className='w-[22px] h-[22px] md:w-[28px] md:h-[28px] group-hover:-rotate-45'
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-[40%] md:h-full flex justify-end">
        <Image
          src={profile_picture}
          alt="profile picture"
          className= 'w-[150px] h-[200px] md:w-full md:h-full object-cover rounded-[30px]'
        />
      </div>

    </div>
  )
}

export default Hero