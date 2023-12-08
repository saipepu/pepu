import React from 'react'

const Home = () => {
  return (
    <main className="h-full bg-[#2d2d2d]">
      <div className="h-full w-full pt-[90px]">
        <div className="h-full w-full flex flex-col justify-start items-center px-[16px] md:px-[50px]">
          <div className="h-full w-full flex flex-col justify-end items-start bg-gray-300 rounded-[45px] overflow-hidden p-[15px]">
            <p className="w-full text-[52px]">I am PePu</p>
            <p>Keep in Touch!</p>
          </div>
          <div className="h-full w-full flex flex-col justify-end items-start">
            Hello
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home