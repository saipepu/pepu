"use client"

import Image from "next/image";

const Judgehub = () => {
  return (
    <div className="h-full w-full pt-[100px]">
      <div className="w-full h-full flex flex-col md:flex-row justify-center items-start px-[16px] md:px-[50px] gap-[10px]">
        <div className="md:flex-1 w-full">
          <h1 className="text-[56px] font-bold leading-[110%]">Judgehub</h1>
        </div>
        <div className="overflow-scroll max-h-full w-full md:flex-1 flex flex-col justify-start items-start gap-[10px] md:py-[300px]">
          <p>A real-time Leaderboard for grading StartUp Pitching Competition.</p>
          <div className="w-full min-h-[300px] bg-white">
            {/* <Image
              src={}
              alt="judgehub-1-image"
            /> */}
          </div>
          <p>The pain point is that preparing the excel sheet to grade the competing team is time consuming.</p>
          <p className="mt-[12px]">My professor seeks a dedicated scoring system and ranking leaderboard tailored to his preferences, enabling seamless integration across all future events. The objective is to eliminate the tedious reliance on Excel sheets and provide a cohesive, customizable solution for efficient scoring system.</p>
          <div className="w-full min-h-[250px] h-[250px] py-[10px] flex flex-row justify-start items-start gap-[10px]">
            <div className="w-full min-h-full bg-white">hello</div>
            <div className="w-full min-h-full bg-white"></div>
          </div>
          <p>The goal is to implement a customized scoring system and ranking leaderboard to replace Excel sheets, streamlining competition management for judges and ensuring a consistent, efficient process for all future events.</p>
          <div className="w-full min-h-[250px] h-[250px] py-[10px] flex flex-row justify-start items-start gap-[10px]">
            <div className="w-full min-h-full bg-white">hello</div>
            <div className="w-full min-h-full bg-white"></div>
          </div>
          <p>Designing was a breeze, but the development journey had its potholes. </p>
          <p>The biggest challenge that almost caught us was the concurrency issues when judges tried scoring a team at the same time.</p>
          <p>
            Discovered the bug the night before the event with a deadline 7am in the morning. There were 2 choices: just sleep and explain the problem in the morning or sacrifice the sleep.
            Guess what, after restructuring the logic and the way we stored the data, the bug was fixed at 4am and I took a much-needed NAP!.
          </p>
          <div className="w-full min-h-[300px] bg-white">
            {/* <Image
              src={}
              alt="judgehub-1-image"
            /> */}
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-[10px]">
            <p>Role 👨🏻‍💻</p>
            <div className="w-full flex flex-col justify-start items-start">
              <p>UI</p>
              <p>UX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Judgehub;