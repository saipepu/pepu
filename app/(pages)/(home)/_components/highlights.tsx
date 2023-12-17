"use client";

import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import arrow from '../../../../public/assets/icons/arrow.png'
import arrow_black from '../../../../public/assets/icons/arrow_black.png'
import Link from 'next/link';

const Highlights = () => {

  const [isUIUXBgHover, setisUIUXBgHover] = useState(false)
  const [isCodingBgHover, setIsCodingBgHover] = useState(false)
  const [isHighlightHover, setIsHighlightHover] = useState(false)
  const [highlightThumbnail, setHighlightThumbnail] = useState<Number>()

  const highlights = [
    {
      name: "JudgeHub",
      link: "judgehub",
      type: "Web"
    },
    {
      name: "Athena",
      link: "athena",
      type: "Web"
    },
    {
      name: "Ecotec",
      link: "ecotec",
      type: "Mobile"
    },
  ]

  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const judgehub = `url('/assets/judgehub.png')`
  const athena = `url('/assets/athena.png')`
  const ecotec = `url('/assets/ecotec.png')`

  return (
    <div className="w-full md:h-full flex flex-col md:flex-row justify-start items-start gap-[2px] text-black">
      <div className="w-full h-full flex flex-col justify-start items-start gap-[2px]">
        <div className="w-full min-h-[250px] md:h-full flex flex-col justify-between items-start md:items-end p-[10px] rounded-[30px] md:rounded-[40px] bg-white">
          <p className='w-full group-hover:block text-[32px] md:text-[52px] font-[300]'>Highlights</p>
          <div className="w-full md:w-fit flex flex-col justify-start items-start">
            {highlights?.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="w-full"
                >
                  <div
                    className="w-full text-[24px] md:text-[32px] font-[300] flex justify-start gap-[10px] group cursor-pointer overflow-hidden"
                    onMouseMove={() => {
                      setIsHighlightHover(true)
                      setHighlightThumbnail(index)
                    }} onMouseOut={() => setIsHighlightHover(false)}
                  >
                    <>
                    {/* highlight hover effet */}
                    {/* <div className="absolute w-[120px] h-[120px] duration-0 pointer-events-none border-black border-[0.5px]"
                      style={{
                        top: mouseY,
                        left: mouseX,
                        opacity: isHighlightHover ? '1' : '0',
                        transition: 'opacity 0.3s',
                        backgroundImage: highlightThumbnail == 0 ? judgehub : highlightThumbnail == 1 ? athena : ecotec,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '150%',
                        backgroundPosition: '50% 50%'
                      }}
                    >
                    </div> */}
                    </>
                    <p className='min-w-[25px]'>{index+1}.</p>
                    <div className="w-full flex justify-between items-end pb-[10px] gap-[50px]"
                    style={index < highlights.length - 1 ? { borderBottomWidth: '1px', borderColor: 'black'} : {}}>
                      <p className="w-full">{item?.name}</p>
                      <div className='flex justify-between items-center group-hover:translate-x-[100%] mr-2 duration-[0.8s] ease-in-out'>
                        <p className="min-w-fit -translate-x-[100%] block text-[18px] group-hover:opacity-100 opacity-0">{item?.type}</p>
                        <div className="w-[50px] duration-[0.5s] overflow-visible">
                          <Image
                            src={arrow_black}
                            alt="arrow-black"
                            className='w-[22px] h-[22px] md:w-[25px] md:h-[25px]'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="w-full h-fit bg-white rounded-[30px] md:rounded-[40px] p-[10px] py-[20px]">
          <p className="text-[24px] md:text-[28px] font-[300] leading-tight tracking-tight">I was a top-5 finalist in Hackathailand 2023. I have experience working with a couple of start-up teams.</p>
        </div>
      </div>
      <Link
        className="w-full h-full flex flex-col justify-start items-start gap-[2px]"
        href={'/#coding'}
      >
        <div className="w-full min-h-[250px] md:min-h-fit md:h-full p-[10px] rounded-[30px] md:rounded-[40px] bg-white hover:bg-gray-300 group flex justify-start items-start ease-in-out duration-[1s]"
        onMouseMove={() => setIsCodingBgHover(true)} onMouseLeave={() => setIsCodingBgHover(false)}
        style={{
          backgroundImage: `url('/assets/coding-bg.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: isCodingBgHover ? '80%' : '240%',
        }}>
          <div className='flex justify-center items-center group-hover:bg-white rounded-full px-[10px]'>
            <p className='group-hover:block text-[32px] md:text-[52px] font-[300] cursor-pointer'>Coding</p>
            <div className="w-[28px] h-[28px] md:w-[45px] md:h-[45px] flex justify-center items-center rounded-full overflow-hidden">
              <Image
                src={arrow_black}
                alt="arrow"
                className='w-[22px] h-[22px] md:w-[35px] md:h-[35px] group-hover:-rotate-45'
              />
            </div>
          </div>
        </div>
        <div
        className='relative w-full min-h-[250px] md:min-h-fit md:h-full p-[10px] rounded-[30px] md:rounded-[40px] bg-white hover:bg-gray-300 group flex justify-start items-start overflow-hidden'
        onMouseMove={() => setisUIUXBgHover(true)} onMouseOut={() => setisUIUXBgHover(false)}
        >
          {/* background animation */}
          <div className='absolute -top-[50%] left-0 w-full h-full flex justify-around hover:opacity-80'>
            <div className='w-[25%] h-[200%] -rotate-12 -top-[50%] duration-[1.1s] ease-in-out'
              style={{
                backgroundImage: `url('/assets/uiux-1.png')`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: isUIUXBgHover ? -150 : -100
              }}>
            </div>
            <div className='w-[25%] h-[200%] -rotate-12 -top-[50%] duration-[1.2s] ease-out'
              style={{
                backgroundImage: `url('/assets/uiux-2.png')`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: isUIUXBgHover ? 0 : -200
              }}>
            </div>
            <div className='w-[25%] h-[200%] -rotate-12 -top-[50%] duration-[0.5s] ease-in-out'
              style={{
                backgroundImage: `url('/assets/uiux-3.png')`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: isUIUXBgHover ? -50 : 0
              }}>
            </div>
            <div className='w-[25%] h-[200%] -rotate-12 duration-[0.8s] ease-in-out'
              style={{
                backgroundImage: `url('/assets/uiux-4.png')`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: isUIUXBgHover ? 50 : -50
              }}>
            </div>
          </div>
          <div className='z-[10] flex justify-center items-center bg-white rounded-full px-[10px]'>
            <p className='group-hover:block text-[32px] md:text-[52px] font-[300] cursor-pointer'>UI/UX</p>
            <div className="w-[28px] h-[28px] md:w-[45px] md:h-[45px] flex justify-center items-center rounded-full overflow-hidden">
              <Image
                src={arrow_black}
                alt="arrow"
                className='w-[22px] h-[22px] md:w-[35px] md:h-[35px] group-hover:-rotate-45'
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Highlights