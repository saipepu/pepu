import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image';
import backLeft from '../../../../public/assets/icons/chevron-left.png'
import thumbnail from '../../../../public/foodify/Thumbnail.png'
import roadmap from '../../../../public/foodify/roadmap.png'
import foodify from '../../../../public/foodify/foodify.png'
import moodboard from '../../../../public/foodify/moodboard.png'
import receipt from '../../../../public/foodify/receipt.png'
import digital_menu from '../../../../public/foodify/digital-menu.png'
import cart from '../../../../public/foodify/cart.png'
import ingredient_management from '../../../../public/foodify/ingredient-management.png'
import mockup_1 from '../../../../public/foodify/mockup-1.png'
import mockup_2 from '../../../../public/foodify/mockup-2.png'
import social_media_mock_up from '../../../../public/foodify/social-media-mock-up.png'

const Foodify = () => {
  const router = useRouter();

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
            <h1 className="text-[56px] font-bold leading-[110%]">Foodify</h1>
          </div>
          <div className="text-[18px] font-[200] overflow-scroll max-h-full w-full md:flex-1 flex flex-col justify-start items-start gap-[10px] md:py-[300px] pb-[50px]">
            <p>Foodify is a digital menu app for restaurants.</p>
            <div className="w-full h-[300px] bg-white">
              <Image
                src={thumbnail}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <p>The current user experience lacked an efficient solution for students trying to locate or know the status of the professor. There was a need for a information assistance software at the office door that goes beyond traditional methods.</p>
            <div className="w-full min-h-[250px] h-[250px] py-[10px] flex flex-row justify-start items-start gap-[10px]">
              <div className="w-full h-full bg-white">
                <p>I worked with a team of 5 people as a project leader and the project took around 3 months to complete.</p>
              </div>
              <div className="w-full h-full bg-white">
                <Image
                  src={roadmap}
                  alt="spatial-design-v-2-image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p>For the restaurants, customer satisfaction is the most important thing. Communication errors and having to wait to order could lead to bad rating. That’s where Foodify comes in providing a self-service style digital menu for customer and let them order the food from their mobile device.</p>
            <div className="w-full h-[300px] bg-white">
              <Image
                src={foodify}
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
                <p>- Group Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foodify