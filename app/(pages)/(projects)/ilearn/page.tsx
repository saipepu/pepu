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
import demo_gif from './GeoQuiz_compress.gif'

import React from 'react'
import Image from 'next/image';

const ILearn = () => {

  return (
    <div className="h-full w-full pt-[80px] flex justify-center items-start">
      <div className="h-full w-full max-w-[650px] flex flex-col justify-start items-center">
        <div className="w-full overflow-hidden flex flex-col md:flex-row justify-center items-start px-[10px] md:px-[20px] gap-[10px]">

          <div className="leading-tight text-[18px] font-[200] overflow-scroll max-h-full w-full md:flex-1 flex flex-col justify-start items-start gap-[20px] md:py-[300px] pb-[50px]">
            <div className="w-full flex flex-col justify-start items-start gap-2 md:flex-row md:justify-between md:items-center">
              <h1 className="text-[56px] font-bold leading-[110%]">iLearn</h1>
              <a href="https://www.figma.com/proto/3iwojUFiobL86KUM03GbUK/Portfolio?page-id=903%3A17&type=design&node-id=914-3343&viewport=-575%2C256%2C0.2&t=ge7UyNvbceML0X2d-1&scaling=scale-down&starting-point-node-id=914%3A3343&mode=design" target="_blank" className="rainbow-btn"><span className="text-[12px] md:text-[18px]">PROTOTYPE</span></a>
            </div>
            <p>Introducing to iLearn that bring excitement to the world of education.</p>
            <div className="w-full h-[300px] bg-white">
              <Image
                src={thumbnail}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <p>This all started at a Swift Hackathon hosted by my university's coding club.</p>
            <p>The challenge was: "How can we make learning more fun and engaging?"</p>
            <div className="w-full h-full bg-white">
              <Image
                src={event_1}
                alt="event_1"
                className="w-full h-full object-contain"
              />
            </div>
            <p>My main language is javascript and I mostly do web development and UI Design. <br/> But then, this Swift Hackathon came in, so I took the role to be a UI designer and helped to make sure everything run smoothly by being a project manager.</p>
            <div className="w-full h-[200px] bg-white">
              <Image
                src={event_2}
                alt="event_2"
                className="w-full h-full object-cover"
              />
            </div>
            <p>With a tight 27-hour deadline, I took the lead on our project.</p>
            <p>The initial step involved researching education app ideas and assessing my team's technical capabilities.</p>
            <p>After a brief 15-minute solo exploration of ideas, we gathered for a brainstorming session to share and discuss our findings.</p>
            <p>As the project manager, my role was to streamline the concept based on our team's technical strengths.</p>
            <p>Finally, we set our goal to create “An Educational App about Geography and Country. Users could engage with articles, embedded YouTube videos, and quizzes, earning points for their performance. These points could then be exchanged for rewards within the app's store.</p>
            <div className="w-full bg-white">
              <Image
                src={mockup_1}
                alt="judgehub-1-image"
                className="w-full h-[250px] object-cover"
              />
            </div>
            <p>In all the features that we discussed and researched, here were the least that we decided to stick with</p>
            <ol className="list-decimal md:ml-[20px] ml-[35px]">
              <li>home page with course lists</li>
              <li>course detail page</li>
              <li>quiz page</li>
              <li>user profile page</li>
              <li>item store</li>
            </ol>
            <div className="w-full bg-white">
              <Image
                src={store}
                alt="judgehub-1-image"
                className="w-full object-contain"
              />
            </div>
            <div className="w-full md:h-[200px] bg-white">
              <Image
                src={mockup_2}
                alt="judgehub-1-image"
                className="w-full h-full object-contain"
              />
            </div>
            <p>As a UI designer, in record time, I tried my best to come up with unique colors and prototype-ready components to make the design more consistent and professional.<br />Developing multi-stage components not only enhanced efficiency but also accelerated the implementation process for our developers as they built the app.</p>
            <div className="w-full h-[180px] py-[10px] flex flex-row justify-start items-start gap-[10px]">
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
            <p>I discovered that ‘Creativity is basically connecting the dots’. By referencing different designs from different designers, I could finished the design much much faster.</p>
            <div className="w-full h-[180px] bg-white">
              <Image
                src={event_3}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <p>This Hackathon was a journey packed with inspiration, collaboration, and the thrill of pushing boundaries. It was worth every moment and more!</p>
            <div className="w-full h-[180px] bg-white">
              <Image
                src={event_4}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <p>I got inspired by how different people could come up with different ideas in such a little amount of time.</p>
            <div className="w-full h-[350px] bg-white">
              <Image
                src={group_pic}
                alt="judgehub-1-image"
                className="w-full object-contain"
              />
            </div>
            <div className="w-full h-[300px] bg-gray-200">
              <Image
                src={demo_gif}
                alt="judgehub-1-image"
                className="w-full h-full object-contain"
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