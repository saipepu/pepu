import Image from "next/image";
import abac from '@/public/logo-au-white.png'
import thumbnail from '@/public/judgehub/judgehub-thumbnail.png'
import phoneMockup from '@/public/judgehub/phone-mockup.png'
import laptopMockup from '@/public/judgehub/laptop-mockup.png'
import event1 from '@/public/judgehub/event-1.png'
import event2 from '@/public/judgehub/event-2.png'
import event3 from '@/public/judgehub/event-3.png'
import white_arrow from '@/public/assets/icons/arrow.png'
import Link from "next/link";

const Judgehub = () => {

  return (
    <div className="h-full w-full pt-[80px] flex justify-center items-start">
      <div className="h-full w-full max-w-[650px] flex flex-col justify-center items-center">
        <div className="leading-tight text-[18px] font-[200] overflow-scroll max-h-full w-full md:flex-1 flex flex-col justify-start items-start gap-[20px] md:py-[300px] p-[10px] pb-[50px]">
          <div className="w-full flex flex-col justify-start items-start gap-2 md:flex-row md:justify-between md:items-center">
            <h1 className="text-[56px] font-bold leading-[110%]">Judgehub</h1>
            {/* <a href="https://saipepu.github.io/JudgeHub/#/leaderboard" target="_blank" className="rainbow-btn"><span className="text-[12px] md:text-[18px]">VIEW WEBSITE</span></a> */}
          </div>
          <p>A real-time Leaderboard for grading StartUp Pitching Competition.</p>
          <div className="w-full bg-white">
            <Image
              src={thumbnail}
              alt="judgehub-1-image"
              className="w-full h-full object-contain"
            />
          </div>
          <p>The pain point is that preparing the excel sheet to grade the competing team is time consuming.</p>
          <p className="mt-[12px]">My professor seeks a dedicated scoring system and ranking leaderboard tailored to his preferences, enabling seamless integration across all future events. The objective is to eliminate the tedious reliance on Excel sheets and provide a cohesive, customizable solution for efficient scoring system.</p>
          <div className="w-full h-[200px] py-[10px] flex flex-row justify-start items-start gap-[2px]">
            <div className="w-full h-full">
              <Image
                src={laptopMockup}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full">
              <Image
                src={phoneMockup}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p>The goal is to implement a customized scoring system and ranking leaderboard to replace Excel sheets, streamlining competition management for judges and ensuring a consistent, efficient process for all future events.</p>
          <div className="w-full min-h-[250px] h-[250px] py-[10px] flex flex-row justify-start items-start gap-[2px]">
            <div className="w-full h-full bg-white">
              <Image
                src={event1}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full bg-white">
              <Image
                src={event2}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p>Designing was a breeze, but the development journey had its potholes. </p>
          <p>The biggest challenge that almost caught us was the concurrency issues when judges tried scoring a team at the same time.</p>
          <p>
            Discovered the bug the night before the event with a deadline 7am in the morning. There were 2 choices: just sleep and explain the problem in the morning or sacrifice the sleep.
            Guess what, after restructuring the logic and the way we stored the data, the bug was fixed at 4am and I took a much-needed NAP!.
          </p>
          <div className="w-full h-[300px] bg-white">
          <Image
              src={event3}
              alt="judgehub-1-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start md:flex-row md:justify-start md:items-center md:gap-[20px] gap-2 mt-[20px]">
            {/* <Link href="https://saipepu.github.io/JudgeHub/#/leaderboard" target="_blank" className="rainbow-btn"><span className="text-[12px] md:text-[18px]">VIEW WEBSITE</span></Link> */}
            <Link href="https://github.com/saipepu/JudgeHub" target="_blank" className='flex items-center'>
              <Image
                src={white_arrow}
                alt="white_arrow"
                className='w-[16px] h-[16px] -rotate-45'
              />
              <p className="underline">github<span className='text-blue-400 font-[400]'>/frontend</span></p>
            </Link>
            <Link href="https://github.com/saipepu/ddi-pepu-backend" target="_blank" className='flex items-center'>
              <Image
                src={white_arrow}
                alt="white_arrow"
                className='w-[16px] h-[16px] -rotate-45'
              />
              <p className="underline">github<span className='text-yellow-400 font-[400]'>/backend</span></p>
            </Link>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-[10px] mt-[10px]">
            <p className="font-bold">Role 👨🏻‍💻</p>
            <div className="w-full flex flex-col justify-start items-start">
              <p>UI Design</p>
              <p>Frontend Development</p>
              <p>Backend Development</p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-[10px] mt-[10px]">
            <p className="font-bold">Tech 🚀</p>
            <div className="w-full flex flex-col justify-start items-start">
              <p>React js</p>
              <p>Node js</p>
              <p>Express</p>
              <p>Socket.io</p>
              <p>Mongodb</p>
              <p>Heroku</p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-[10px] mt-[10px]">
            <p className="font-bold">Client 💼</p>
            <Link href="https://ddi.au.edu/en/home-en/" target="_blank" className="w-full flex justify-start items-center gap-[10px]">
              <div className="w-[35px] h-[35px]">
                <Image
                  src={abac}
                  alt="abac-logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="underline">Assumption University of Thailand</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Judgehub;