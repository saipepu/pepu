"use client";

import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import arrow from '../../../public/assets/icons/arrow.png'
import arrow_black from '../../../public/assets/icons/arrow_black.png'
import profile_picture from '../../../public/profile-picture.png'
import Link from 'next/link';
import judgehubTh from '../../../public/project-list-image/judgehub.png'
import notion_cloneTh from '../../../public/project-list-image/notion-clone.png'
import athenaTh from '../../../public/project-list-image/athena.png'
import ecotecTh from '../../../public/ecotec/thumbnail.png'
import spatial_designTh from '../../../public/spatial-design/v-final.png'
import foodifyTh from '../../../public/foodify/mockup-1.png'
import bikyhoodTh from '../../../public/bikyhood/wireframe.png'
import iLeanTh from '../../../public/ilearn/thumbnail.png'

type project = {
  name: String,
  category: String[],
  description: String,
  link: String,
  image: StaticImageData
}

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

  const projectList: project[] = [
    {
      name: "JudgeHub",
      category: ["Frontend","Backend","UI","UX"],
      description: "JudgeHub is a real-time Leaderboard which is specifically design for a Digital Design and Innovation (DDI) StartUp Pitching Competition held by the Assumption University in Thailand.",
      link: "/judgehub",
      image: judgehubTh
    },
    {
      name: "Notion-Clone",
      category: ["Frontend","Backend"],
      description: "Ecotec is a sustainable activity encouraging app that promotes environmental friendly actions. This project opened up a rare opportunity to experience my first national hackathon (HackaThailand) and ranked the 5th Place in the Final Stage.",
      link: "https://notion-clone-nu.vercel.app",
      image: notion_cloneTh
    },
    {
      name: "Athena",
      category: ["Frontend","Backend"],
      description: "This is Tech Startup Project called ‘Athena’. Athena is a learn-to-earn platform that encourage the process of learning by gamification.",
      link: "/athena",
      image: athenaTh
    },
    {
      name: "Ecotec",
      category: ["Frontend","Backend","UI","UX"],
      description: "Ecotec is a sustainable activity encouraging app that promotes environmental friendly actions. This project opened up a rare opportunity to experience my first national hackathon (HackaThailand) and ranked the 5th Place in the Final Stage.",
      link: "/ecotec",
      image: ecotecTh
    },
    {
      name: "Foodify",
      category: ["UI","UX","Project Management", "Research"],
      description: "Foodify is a digital menu app that provide seamless experience in a restaurant by allowing customers to order food from their mobile devices. ",
      link: "/foodify",
      image: foodifyTh
    },
    {
      name: "Spatial Design",
      category: ["UI","UX"],
      description: "Embracing the newly trending technology. Designed a spatial UI design for a school project to showcase the tech skill of the students using Augmented Reality Technology.",
      link: "/spatial-design",
      image: spatial_designTh
    },
    {
      name: "bikyhood",
      category: ["UI"],
      description: "A user-friendly blend of modern digital marketplace, crafted to enhance the experience of students trading and buying bike around the campus.",
      link: "/bikyhood",
      image: bikyhoodTh
    },
    {
      name: "iLearn",
      category: ["UI","UX","Swift"],
      description: "This project is for a Swift Hackathon held by the D*Code which is the Main coding club in my University.The purpose of the Hackathon is to have some hands on Swift Programming Language and iOS development.",
      link: "/ilearn",
      image: iLeanTh
    },
  ]

  const judgehub = `url('/assets/judgehub.png')`
  const athena = `url('/assets/athena.png')`
  const ecotec = `url('/assets/ecotec.png')`

  function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  useEffect(() => {

    let container = document.getElementById('container')
    let bio = document.getElementById('bio')
    let object1 = document.getElementById('object1')
    let object2 = document.getElementById('object2')
    let object3 = document.getElementById('object3')
    let object4 = document.getElementById('object4')
    if(container && bio) {
      
      const animateObject = () => {
        let top = bio?.getBoundingClientRect().top ? bio?.getBoundingClientRect().top : 0
        console.log(top)
        if(object1 && object2 && object3 && object4 && top != 0){
            object1.style.top = `${1 * top + 400}px`
            object2.style.top = `${0.8 * top + 900}px`
            object3.style.top = `${0.3 * top + 700}px`
            object4.style.top = `${1.2 * top + 500}px`
            // object1.style.transform = `translateY(${1.5 * top }px)`
            // object2.style.transform = `translateY(${0.5 * top }px)`
            // object3.style.transform = `translateY(${2.5 * top }px)`
            // object4.style.transform = `translateY(${0.3 * top }px)`
        }
        requestAnimationFrame(animateObject)
      }
      animateObject()
    }
  }, [])

  return (
      <div id="container" className="h-full w-full pt-[70px] pb-[10px] flex flex-col justify-start items-center overflow-scroll">

        <div className="w-full max-w-[1100px] md:h-full flex flex-col justify-start items-center gap-[2px] px-[10px] md:px-[20px]">
          
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

          <div id="bio" className="relative min-h-[90vh] md:my-[50px] my-[100px] w-full flex flex-col justify-between items-center text-white border-b-[1px] border-white overflow-hidden">

            <div className='absolute opacity-50  w-full h-full -z-1'>
              <div id="object1" className=' absolute w-[80px] md:w-[200px] h-[40px] md:h-[100px] bottom-[-50px] left-0 duration-0 overflow-hidden'>
                <Image
                  src={judgehubTh}
                  alt="adf"
                  className="w-full h-full object-cover"
                />
              </div>
              <div id="object2" className=' absolute w-[80px] md:w-[200px] h-[40px] md:h-[100px] top-[40%] right-0 duration-0'>
                <Image
                  src={notion_cloneTh}
                  alt="adf"
                  className="w-full h-full object-cover"
                />
              </div>
              <div id="object3" className=' absolute w-[80px] md:w-[200px] h-[40px] md:h-[100px] top-[105%] right-[20%] duration-0'>
                <Image
                  src={judgehubTh}
                  alt="adf"
                  className="w-full h-full object-cover"
                />
              </div>
              <div id="object4" className=' absolute w-[80px] md:w-[200px] h-[40px] md:h-[100px] top-[60%] left-[40%] duration-0'>
                <Image
                  src={athenaTh}
                  alt="adf"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className='z-[99] flex text-[18px] md:text-[24px] font-[300] text-center tracking-tighter leading-tight'>
              <p>
                I'm looking for new job opportunities as
                <br />a web designer and a web developer.
              </p>
            </div>
            <div className='z-[99] flex text-[32px] md:text-[56px] font-[500] text-center tracking-tighter leading-[100%]'>
              <p>
                I craft stunning
                <br />websites
                <br />for
                <br />seamless user
                <br />experiences.
              </p>
            </div>
            <div className='z-[99] flex text-[18px] md:text-[24px] font-[300] text-center tracking-tighter leading-tight mb-[50px]'>
              <p>
                "Turning pixels into websites, step by step –
                <br />where new ideas meet great design, and
                <br />user experiences go beyond what you'd expect."
              </p>
            </div>

          </div>

          <div id="coding" className="w-full flex flex-col justify-start items-center gap-[2px] text-black py-[50px]">
            <p className='text-white text-[32px] font-[500] mb-[20px]'>Projects</p>
            {projectList.map((item, index) => {
              return (
                <Link
                  href={`${item.link}`}
                  target="_blank"
                  className='w-full md:w-[500px] md:h-[300px] flex flex-col bg-white rounded-[20px] md:rounded-[40px] p-[2px]'
                  key={index}
                >
                  <div className='w-full h-[200px] md:h-[300px] bg-white rounded-[20px] md:rounded-[40px] overflow-hidden'>
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt="adf"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      ''
                    )}
                  </div>
                  <div className='py-[10px]'>
                    <p className='w-full text-black text-center text-[28px] leading-tight'>{item.name}</p>
                    <div className='flex justify-center items-center gap-[10px]'>
                      {item.category.map((c, index) => {
                        return (
                          <p className='text-black' key={index}>{c}</p>
                        )
                      })}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-[24px] w-full flex-col justify-end items-start flex md:hidden">
            <Link href="/projects" target="_blank">EMAIL</Link>
            <Link href="https://github.com/saipepu" target="_blank">GITHUB</Link>
            <Link href="https://www.linkedin.com/in/pe-pu-6746441b6/" target="_blank">LINKEDIN</Link>
          </div>

        </div>
        
      </div>
  )
}

export default Home