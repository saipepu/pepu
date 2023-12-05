"use client";

import { useRouter } from 'next/navigation';
import backLeft from '../../../../public/assets/icons/chevron-left.png'
import thumbnail from '../../../../public/ilearn/thumbnail.png'
import event_1 from '../../../../public/ilearn/event-1.png'
import event_2 from '../../../../public/ilearn/event-2.png'
import event_3 from '../../../../public/ilearn/event-3.png'
import event_4 from '../../../../public/ilearn/event-4.png'
import mockup_1 from '../../../../public/ilearn/mockup-1.png'
import mockup_2 from '../../../../public/ilearn/mockup-2.png'
import group_pic from '../../../../public/ilearn/group-pic.png'
import component from '../../../../public/ilearn/component.png'
import color from '../../../../public/ilearn/color.png'
import store from '../../../../public/ilearn/store.png'


import React from 'react'
import Image from 'next/image';

const ILearn = () => {
  const router = useRouter()

  return (
    <div className="h-full w-full pt-[100px]">
      <div className="h-full w-full flex flex-col justify-start items-center">
        <div className="w-full px-[16px] md:px-[50px]">
          <div
            onClick={router.back}
            className="w-[35px] h-[35px] flex justify-center items-center bg-gray-600 rounded-lg cursor-pointer hover:bg-gray-400">
            <Image src={backLeft} alt="left-icon"/>
          </div>
        </div>
        <div className="w-full overflow-hidden flex flex-col md:flex-row justify-center items-start px-[16px] md:px-[50px] gap-[10px]">
          <div className="md:flex-1 w-full">
            <h1 className="text-[56px] font-bold leading-[110%]">iLearn</h1>
          </div>
          <div className="text-[18px] font-[200] overflow-scroll max-h-full w-full md:flex-1 flex flex-col justify-start items-start gap-[10px] md:py-[300px] pb-[50px]">
            <p>Introducing to iLearn that bring excitement to the world of education.</p>
            <div className="w-full h-[300px] bg-white">
              <Image
                src={thumbnail}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full bg-white">
              <Image
                src={event_1}
                alt="event_1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={event_2}
                alt="event_2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full bg-white">
              <Image
                src={mockup_1}
                alt="judgehub-1-image"
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="w-full bg-white">
              <Image
                src={store}
                alt="judgehub-1-image"
                className="w-full h-[300px] object-contain"
              />
            </div>
            <div className="w-full bg-white">
              <Image
                src={mockup_2}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full min-h-[200px] h-[250px] py-[10px] flex flex-row justify-start items-start gap-[10px]">
              <div className="w-full h-full bg-white">
                <Image
                  src={component}
                  alt="spatial-design-v-1-1-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full h-full bg-white">
                <Image
                  src={color}
                  alt="spatial-design-v-2-2s-image"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="w-full h-full bg-white">
              <Image
                src={event_3}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={event_4}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full bg-white">
              <Image
                src={group_pic}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex-1 flex flex-col justify-start items-start gap-[10px] mt-[10px]">
              <p className="font-bold">Role 👨🏻‍💻</p>
              <div className="w-full flex flex-col justify-start items-start">
                <p>UI Design</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[10px] mt-[10px]">
              <p className="font-bold">Tech 🚀</p>
              <div className="w-full flex flex-col justify-start items-start">
                <p>Spatial Design</p>
                <p>Figma</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[10px] mt-[10px]">
              <p className="font-bold">Client 💼</p>
              <div className="w-full flex justify-start items-center gap-[10px]">
                <p>- Group Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ILearn