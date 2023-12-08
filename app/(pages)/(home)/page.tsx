import Image from 'next/image'
import React from 'react'
import arrow from '../../../public/assets/icons/arrow.png'
import arrow_black from '../../../public/assets/icons/arrow_black.png'

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
      link: "#"
    },
    {
      name: "Athena",
      link: "#"
    },
    {
      name: "Ecotec",
      link: "#"
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
          <div className="w-full h-[400px] flex justify-start items-start gap-[2px] text-black">
            <div className="w-full h-full flex flex-col justify-between items-end p-[15px] rounded-[45px] bg-white">
              <p className="w-full text-[52px] font-[300]">Highlights</p>
              <div className="">
                {highlights?.map((item, index) => {
                  return (
                    <div key={index} className="flex">
                      <p>{index+1}.</p>
                      {item?.name}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[2px]">
              <div className='w-full p-[15px] rounded-[45px] bg-white'>1</div>
              <div className='w-full p-[15px] rounded-[45px] bg-white'>2</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home