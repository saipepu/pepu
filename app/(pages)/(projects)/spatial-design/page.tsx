import Image from 'next/image'
import React from 'react'
import backLeft from '../../../../public/assets/icons/chevron-left.png'
import thumbnail from '../../../../public/spatial-design/Thumbnail.png'
import v2_2 from '../../../../public/spatial-design/v2-2.png'
import v2_1 from '../../../../public/spatial-design/v2-1.png'
import v_final from '../../../../public/spatial-design/v-final.png'
import mock_up from '../../../../public/spatial-design/mock-up.png'
import immersive from '../../../../public/spatial-design/immersive.png'
import v1_1 from '../../../../public/spatial-design/v1-1.png'
import v1_2 from '../../../../public/spatial-design/v1-2.png'
import abac from '@/public/logo-au-white.png'

const SpatialDesign = () => {

  return (
    <div className="h-full w-full pt-[80px] flex justify-center items-start">
      <div className="h-full w-full max-w-[1200px] flex flex-col justify-start items-center">
        <div className="w-full overflow-hidden flex flex-col md:flex-row justify-center items-start px-[10px] md:px-[20px] gap-[10px]">
          <div className="leading-tight text-[18px] font-[200] overflow-scroll max-h-full w-full md:flex-1 flex flex-col justify-start items-start gap-[20px] md:py-[300px] pb-[50px]">
            <h1 className="text-[56px] font-bold leading-[110%]">Spatial Design</h1>
            <p>Embracing the newly trending technology. Designed a spatial UI design for a school project to showcase the tech skill of the students using Augmented Reality Technology.</p>
            <div className="w-full h-[300px] bg-white">
              <Image
                src={thumbnail}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <p>The current user experience lacked an efficient solution for students trying to locate or know the status of the professor. There was a need for a information assistance software at the office door that goes beyond traditional methods.</p>
            <div className="w-full h-[150px] py-[10px] flex flex-row justify-start items-start gap-[2px]">
              <div className="w-full h-full">
                <Image
                  src={v1_1}
                  alt="spatial-design-v-1-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  src={v1_2}
                  alt="spatial-design-v-2-image"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p>The goal was to design and implement an information assistance software at the office door of the instructors. We did have a perfect opportunity to show case the capable skills of computer science by using Augmented Reality Technology to enhance the user experience.</p>
            <div className="w-full h-[300px] bg-white">
              <Image
                src={immersive}
                alt="judgehub-1-image"
                className="w-full object-cover"
              />
            </div>
            <div className="w-full h-[600px] bg-white">
              <Image
                src={mock_up}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full min-h-[250px] h-[250px] py-[10px] flex flex-row justify-start items-start gap-[10px]">
              <div className="w-full h-full bg-white">
                <Image
                  src={v2_1}
                  alt="spatial-design-v-1-1-image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full bg-white">
                <Image
                  src={v2_2}
                  alt="spatial-design-v-2-2s-image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full h-[300px] bg-white">
              <Image
                src={v_final}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[10px] mt-[10px]">
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
                <div className="w-[35px] h-[35px]">
                  <Image
                    src={abac}
                    alt="abac-logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p>Assumption University of Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpatialDesign