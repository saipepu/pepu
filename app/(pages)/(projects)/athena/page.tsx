import React from 'react'
import thumbnail from '../../../../public/athena/Thumbnail.png'
import leaderboard from '../../../../public/athena/leaderboard.png'
import avatar from '../../../../public/athena/avatar.png'
import water_game from '../../../../public/athena/water-game.png'
import game_over from '../../../../public/athena/game-over.png'
import employer_chat from '../../../../public/athena/employer-chat.png'
import question_chat from '../../../../public/athena/question-chat.png'
import customer_chat from '../../../../public/athena/customer-chat.png'
import demo_1 from '../../../../public/athena/demo-1.png'
import demo_2 from '../../../../public/athena/demo-2.png'
import event_1 from '../../../../public/athena/event-1.png'
import event_2 from '../../../../public/athena/event-2.png'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Athena = () => {

  return (
    <div className="h-full w-full pt-[80px] flex justify-center items-start">
      <div className="h-full w-full max-w-[650px] flex flex-col justify-start items-center">
        <div className="w-full overflow-hidden flex flex-col md:flex-row justify-center items-start px-[10px] md:px-[20px] gap-[10px]">
          <div className="leading-tight text-[18px] font-[200] overflow-scroll max-h-full w-full md:flex-1 flex flex-col justify-start items-start gap-[20px] md:py-[300px] pb-[50px]">
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="text-[56px] font-bold leading-[110%]">Athena</h1>
              <a href="https://saipepu.github.io/athena_2/#/sign-up" target="_blank" className="rainbow-btn"><span>VIEW WEBSITE</span></a>
            </div>
            <p>This is Tech Startup Project called ‘Athena’.</p>
            <p>Athena is a learn-to-earn platform that encourage the process of learning by gamification.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={thumbnail}
                alt="judgehub-1-image"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full h-[250px] py-[10px] flex flex-row justify-start items-start gap-[10px]">
              <div className="w-full h-full">
                <p>The target audiences are any corporates, any organization and company that require training program for their employees.</p>
              </div>
              <div className="w-full h-full">
                <Image
                  src={leaderboard}
                  alt="spatial-design-v-2-image"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p>Employees can learn the necessary information or courses on the platform that will get EXP and TOKEN based on their performance on the quizzes.</p>
            <p>They can customize their virtual avatar or get rewards from their employer for getting top ranks on the leaderboard.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={avatar}
                alt="judgehub-1-image"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full min-h-[220px] h-[250px] py-[10px] flex flex-row justify-start items-start gap-[10px]">
              <div className="w-full h-full">
                <Image
                  src={water_game}
                  alt="spatial-design-v-2-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  src={game_over}
                  alt="spatial-design-v-2-image"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p>One of the main quizzes game is ‘Water-Raising’.Answering each question to maintain the height above the raising water.</p>
            <div className="w-full h-fit py-[10px] flex flex-row justify-start items-start gap-[10px]">
              <div className="w-full h-full">
                <Image
                  src={employer_chat}
                  alt="spatial-design-v-2-image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between items-start gap-[10px]">
                <div className="w-full flex-1">
                  <Image
                    src={question_chat}
                    alt="spatial-design-v-2-image"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full flex-1">
                  <Image
                    src={customer_chat}
                    alt="spatial-design-v-2-image"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <p>Another game is conversation game with customers. The goal of this game is to guide employees on how to be friendly and engaging with every customers.</p>
            <div className="w-full min-h-[250px] h-[250px] py-[10px] flex flex-row justify-start items-start gap-[10px]">
              <div className="w-full h-full">
                <Image
                  src={demo_1}
                  alt="spatial-design-v-2-image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  src={demo_2}
                  alt="spatial-design-v-2-image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p>Athena ranked 2nd in a ‘Design and Digital Innovation’ Startup Pitching Competition.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={event_1}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <p>It was a pleasure to be part of the team as a Developer. (right most is me)</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={event_2}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <p>The journey didn’t stop at the rank 2nd. The team even got a couple of investment offers from the investors.</p>
            <div className="w-full flex-1 flex flex-col justify-start items-start gap-[10px] mt-[10px]">
              <p className="font-bold">Role 👨🏻‍💻</p>
              <div className="w-full flex flex-col justify-start items-start">
                <p>Frontend</p>
                <p>Backend</p>
                <p>Project Management</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[10px] mt-[10px]">
              <p className="font-bold">Tech 🚀</p>
              <div className="w-full flex flex-col justify-start items-start">
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Mongodb</p>
                <p>Socket.io</p>
                <p>JWT</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[10px] mt-[10px]">
              <p className="font-bold">Client 💼</p>
              <div className="w-full flex justify-start items-center gap-[10px]">
                <p>Athena</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Athena