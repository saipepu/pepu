"use client"

import Image from "next/image";

const Judgehub = () => {
  return (
    <div className="h-full pt-[100px]">
      <div className="w-full flex flex-col md:flex-row justify-center items-start px-[16px] md:px-[50px]">
        <div className="flex-1">
          <h1 className="text-[56px] font-bold leading-[110%]">Judgehub</h1>
        </div>
        <div className="md:max-h-full w-full md:flex-1 flex flex-col justify-start items-start gap-[10px] overflow-scroll md:py-[300px]">
          <p>A real-time Leaderboard for grading StartUp Pitching Competition.</p>
          <div className="w-full h-[300px] bg-white">
            {/* <Image
              src={}
              alt="judgehub-1-image"
            /> */}
          </div>
          <p>The pain point is that preparing the excel sheet to grade the competing team is time consuming.</p>
          <p className="mt-[12px]">My professor seeks a dedicated scoring system and ranking leaderboard tailored to his preferences, enabling seamless integration across all future events. The objective is to eliminate the tedious reliance on Excel sheets and provide a cohesive, customizable solution for efficient scoring system.</p>
          <div className="w-full h-[250px] p-[10px] flex flex-row justify-center items-center gap-[10px]">
            <div className="flex-1 h-full bg-white"></div>
            <div className="flex-1 h-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Judgehub;