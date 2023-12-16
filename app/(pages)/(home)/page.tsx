"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import arrow from '../../../public/assets/icons/arrow.png'
import arrow_black from '../../../public/assets/icons/arrow_black.png'
import profile_picture from '../../../public/profile-picture.png'
import Link from 'next/link';

const Home = () => {

  const [isUIUXBgHover, setisUIUXBgHover] = useState(false)
  const [isCodingBgHover, setIsCodingBgHover] = useState(false)
  const [isHighlightHover, setIsHighlightHover] = useState(false)
  const [highlightThumbnail, setHighlightThumbnail] = useState<Number>()
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

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
  const judgehub = `url('/assets/judgehub.png')`
  const athena = `url('/assets/athena.png')`
  const ecotec = `url('/assets/ecotec.png')`

  // window.addEventListener('mousemove', (e) => {
  //   console.log(e.pageX, e.pageY)
  //   setMouseX(e.pageX)
  //   setMouseY(e.pageY)
  // })

  return (
      <div className="h-full w-full pt-[70px] pb-[10px] flex flex-col justify-start items-center overflow-scroll">

<div className="w-full max-w-[1100px] md:h-full flex flex-col justify-start items-center gap-[2px] px-[10px] md:px-[20px]">
          <div className="min-h-[50vh] h-full w-full flex flex-col-reverse md:flex-row justify-end md:justify-between items-start gap-[10px] text-black bg-white rounded-[30px] md:rounded-[40px] overflow-hidden p-[10px]">

            <div className="w-full h-full flex flex-col justify-end items-start">
              <p className="w-full text-[28px] md:text-[42px] font-Inter leading-[110%] tracking-tight font-[300]">I am PePu.
                <span className="
                    relative w-[150px] md:w-[200px] inline-flex justify-center items-center 
                    text-[24px] md:text-[32px] rounded-full bg-gray-300
                    group cursor-pointer
                ">
                  ABOUT ME
                  <span className="
                    absolute w-[24px] h-[24px] md:w-[40px] md:h-[40px] inline-flex justify-center items-center
                    text-[14px] md:text-[20px] left-1 bg-gray-600 rounded-full text-white
                    group-hover:left-[138px] md:group-hover:left-[155px] duration-[0.8s] ease-out group-hover:rotate-180
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
            <div className="w-full md:w-[40%] h-[400px] md:h-full">
              <Image
                src={profile_picture}
                alt="profile picture"
                className='w-full h-full object-cover rounded-[30px]'
              />
            </div>

          </div>
          <div className="w-full h-full flex flex-col md:flex-row justify-start items-start gap-[2px] text-black">
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
              href={'/projects/coding-projects'}
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
                <div className='z-[9999] flex justify-center items-center bg-white rounded-full px-[10px]'>
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
        </div>
        
      </div>
  )
}

export default Home

// style={{
//   backgroundImage: `url('/assets/uiux-bg.png')`,
//   backgroundRepeat: 'no-repeat',
//   backgroundPositionY: -200,
//   backgroundPositionX: -100,
//   backgroundSize: '120%',
// }}