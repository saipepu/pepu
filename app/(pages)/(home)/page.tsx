import Image from 'next/image'
import React from 'react'
import arrow from '../../../public/assets/icons/arrow.png'
import arrow_black from '../../../public/assets/icons/arrow_black.png'
import coding_bg from '../../../public/coding-bg.png'
import uiux_bg from '../../../public/uiux-bg.png'

const Home = () => {

  const SpanStyle = {
    fontSize: "32px",
    margin: "0 20px",
    padding: "20px",
    borderRadius: "50px",
    backgroundColor: "red"
  }
  const highlights = [
    {
      name: "JudgeHub",
      link: "#",
      type: "Web"
    },
    {
      name: "Athena",
      link: "#",
      type: "Web"
    },
    {
      name: "Ecotec",
      link: "#",
      type: "Mobile"
    },
  ]

  return (
    <main className="h-full bg-[#2d2d2d] overflow-scroll">
      <div className="h-full w-full pt-[90px]">
        <div className="w-full flex flex-col justify-start items-center gap-[2px] px-[16px] md:px-[50px]">
          <div className="pt-[120px] h-full w-full flex flex-col justify-end items-start text-black bg-white rounded-[45px] overflow-hidden p-[15px]">
            <p className="w-full text-[32px] md:text-[52px] font-Inter leading-tight tracking-tight font-[300]">I am PePu.
            <span className="
                relative w-[170px] md:w-[250px] inline-flex justify-center items-center 
                text-[28px] md:text-[42px] rounded-full bg-gray-300
                group cursor-pointer
            ">
              ABOUT ME
              <span className="
                absolute w-[28px] h-[28px] md:w-[45px] md:h-[45px] inline-flex justify-center items-center
                text-[14px] md:text-[20px] left-1 bg-gray-600 rounded-full text-white
                group-hover:left-[138px] md:group-hover:left-[200px] duration-[0.8s] ease-out group-hover:rotate-180
              ">
                <p className="group-hover:hidden block">Bio</p>
                <Image
                  src={arrow}
                  alt="arrow"
                  className='w-[22px] h-[22px] md:w-[30px] md:h-[30px] rotate-180 hidden group-hover:block'
                />
              </span>
            </span>
            I am a creative front-end developer. I build user-friendly websites that boost conversion rates for businesses.</p>
            <div className='p-1 pl-4 flex justify-center items-center bg-black text-white rounded-full gap-[10px] group'>
              <p className="text-[24px] md:text-[32px]">Keep in Touch!</p>
              <div className="w-[28px] h-[28px] md:w-[45px] md:h-[45px] bg-white flex justify-center items-center rounded-full overflow-hidden">
                <Image
                  src={arrow_black}
                  alt="arrow"
                  className='w-[22px] h-[22px] md:w-[30px] md:h-[30px] group-hover:-rotate-45'
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[400px] flex flex-col md:flex-row justify-start items-start gap-[2px] text-black">
            <div className="w-full min-h-[250px] md:h-full flex flex-col justify-between items-start md:items-end p-[15px] rounded-[45px] bg-white">
              <p className="w-full text-[32px] md:text-[52px] font-[300]">Highlights</p>
              <div className="w-full md:w-fit flex flex-col justify-start items-start">
                {highlights?.map((item, index) => {
                  return (
                    <div key={index} className="w-full text-[24px] md:text-[32px] font-[300] flex justify-start gap-[10px] group cursor-pointer">
                      <p className='min-w-[25px]'>{index+1}.</p>
                      <div className="w-full flex justify-between items-end pb-[10px] border-b-black border-b-[1px] gap-[50px]">
                        <p className="w-full">{item?.name}</p>
                        <p className="min-w-fit w-[50px] block text-[18px] group-hover:hidden">{item?.type}</p>
                        <div className="w-[50px] hidden group-hover:block">
                          <Image
                            src={arrow_black}
                            alt="arrow-black"
                            className='w-[22px] h-[22px] md:w-[28px] md:h-[28px] object-contain'
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-start gap-[2px]">
              <div className="w-full min-h-[250px] md:min-h-fit md:h-full p-[15px] rounded-[45px] hover:bg-gray-300 group flex justify-start items-start"
              style={{
                backgroundImage: `url('/assets/coding-bg.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%'
              }}>
                <div className='flex justify-center items-center group-hover:bg-white rounded-full px-[10px]'>
                  <p className='group-hover:block text-[32px] md:text-[52px] font-[300]'>Coding</p>
                  <div className="w-[28px] h-[28px] md:w-[45px] md:h-[45px] flex justify-center items-center rounded-full overflow-hidden">
                    <Image
                      src={arrow_black}
                      alt="arrow"
                      className='w-[22px] h-[22px] md:w-[35px] md:h-[35px] group-hover:-rotate-45'
                    />
                  </div>
                </div>
              </div>
              <div className='w-full min-h-[250px] md:min-h-fit md:h-full p-[15px] rounded-[45px] bg-white hover:bg-gray-300 group flex justify-start items-start'
              style={{
                backgroundImage: `url('/assets/uiux-bg.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: -100,
                backgroundSize: '100%'
              }}>
                <div className='flex justify-center items-center bg-white rounded-full px-[10px]'>
                  <p className='group-hover:block text-[32px] md:text-[52px] font-[300]'>UI/UX</p>
                  <div className="w-[28px] h-[28px] md:w-[45px] md:h-[45px] flex justify-center items-center rounded-full overflow-hidden">
                    <Image
                      src={arrow_black}
                      alt="arrow"
                      className='w-[22px] h-[22px] md:w-[35px] md:h-[35px] group-hover:-rotate-45'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home