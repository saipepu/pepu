import React from 'react'
import Image from 'next/image';
import thumbnail from '../../../../public/ecotec/thumbnail.png'
import semifinal_ranks from '../../../../public/ecotec/semi-final-ranks.png'
import team_1 from '../../../../public/ecotec/team-1.png'
import team_2 from '../../../../public/ecotec/team-2.png'
import team_3 from '../../../../public/ecotec/team-3.png'
import solo_1 from '../../../../public/ecotec/solo-1.png'
import solo_2 from '../../../../public/ecotec/solo-2.png'
import stage from '../../../../public/ecotec/stage.png'
import coding from '../../../../public/ecotec/coding.png'
import group_work_1 from '../../../../public/ecotec/group_work_1.png'
import group_work_2 from '../../../../public/ecotec/group_work_2.png'
import group_work_3 from '../../../../public/ecotec/group_work_3.png'
import showcase_1 from '../../../../public/ecotec/showcase-1.png'
import showcase_2 from '../../../../public/ecotec/showcase-2.png'
import showcase_3 from '../../../../public/ecotec/showcase-3.png'
import showcase_4 from '../../../../public/ecotec/showcase-4.png'
import color from '../../../../public/ecotec/color.png'

const Ecotec = () => {

  return (
    <div className="h-full w-full pt-[80px] flex justify-center items-start">
      <div className="h-full w-full max-w-[650px] flex flex-col justify-start items-center">
        <div className="w-full overflow-hidden flex flex-col md:flex-row justify-center items-start px-[10px] md:px-[20px] gap-[10px]">
          <div className="leading-tight text-[18px] font-[200] overflow-scroll max-h-full w-full md:flex-1 flex flex-col justify-start items-start gap-[20px] md:py-[300px] pb-[50px]">
            <h1 className="text-[56px] font-bold leading-[110%]">Ecotec</h1>
            <p>This is one of my favorite UX UI project. Ecotec is a sustainable activity encouraging app that promotes environmental friendly actions.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={thumbnail}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <p>A project that opened up a rare opportunity to experience my first national hackathon (HackaThailand) and ranked 1st and 5th in the Semi-Final and Final Stage respectively.</p>
            <p>The challenge is to come up with a solution idea about how can we digitalize the world in a sustainable way.</p>
            <div className="w-full h-[200px] bg-white">
              <Image
                src={group_work_1}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <p>This project took place during our university study time. So we planned on meeting every once a week. We did individual research on the market opportunities, market size and analyzing our potential competitor.</p>
            <div className="w-full h-[300px] py-[10px] flex flex-row justify-start items-start gap-[10px]">
              <div className="w-full h-full flex-1">
                <p>Every time, we met, we did 2 things.</p>
                <ol className="list-decimal md:ml-[20px] ml-[35px]">
                  <li>Sharing what we have learn during the time and take notes from others.</li>
                  <li>Narrowing down and cutting out some of the ideas to make our product as lean and unique as possible.</li>
                </ol>
              </div>
              <div className="w-full h-full flex-1">
                <Image
                  src={group_work_2}
                  alt="spatial-design-v-2-2s-image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full h-[250px] bg-white">
              <Image
                src={group_work_3}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <p>After researching for 2-3 weeks we all agreed on an idea about an app that promotes sustainable actions. But for this particular case, we decided to focus on food ordering for Vegan Food, which we all know that Carbon Less Food are healthier for the environment.</p>
            <p>Our unique feature is the Integration of Gamification (a reward based system) that we believe will encourage the users to stay on the platform and participate in most of the activities.</p>
            <div className="w-full h-[400px] bg-white">
              <Image
                src={showcase_1}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <p>For our Semi-Final soft pitching, we came up with 4 main features as MVP version.</p>
            <ol className="list-decimal md:ml-[20px] ml-[35px]">
              <li>Order Food</li>
              <li>Check out (self pickup)</li>
              <li>Get Points</li>
              <li>Exchange with rewards</li>
            </ol>
            <div className="w-full h-[400px]">
              <Image
                src={showcase_2}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[300px] py-[10px] flex flex-row justify-start items-start gap-[2px]">
              <div className="w-full h-full">
                <Image
                  src={showcase_3}
                  alt="spatial-design-v-1-1-image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  src={showcase_4}
                  alt="spatial-design-v-2-2s-image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full">
              <Image
                src={color}
                alt="judgehub-1-image"
                className="w-full h-full object-contain"
              />
            </div>
            <p>With a great effort from our team (Starter), we ranked 1st place out of 20 teams in the Semif-Final</p>
            <div className="w-full">
              <Image
                src={semifinal_ranks}
                alt="spatial-design-v-2-2s-image"
                className="w-full object-contain"
              />
            </div>
            <p>That was the start of our journey to the Final.</p>
            <div className="w-full min-h-[200px] h-[250px] py-[10px] flex flex-row justify-start items-start gap-[2px]">
              <div className="w-[35%] h-full">
                <Image
                  src={solo_1}
                  alt="spatial-design-v-1-1-image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  src={team_1}
                  alt="spatial-design-v-2-2s-image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p>This event was full of new experiment for me. When I was from Myanmar, and I never had a chance to participate in such an exciting competition.</p>
            <p>With the help of my Thai Friends, I was able to experience my first Hackathon and finally competing in the final stage.</p>
            <div className="w-full h-[300px] py-[10px] flex flex-row justify-start items-start gap-[2px]">
              <div className="w-full h-full bg-white">
                <Image
                  src={team_2}
                  alt="spatial-design-v-1-1-image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[35%] h-full bg-white">
                <Image
                  src={solo_2}
                  alt="spatial-design-v-2-2s-image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p>I am so grateful for having a chance to be part of this amazing team.</p>
            <div className="w-full h-[400px]">
              <Image
                src={stage}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <p>In the final round, we pivoted our idea to focus on Sustainable Tourism. Unfortunately, that wasn’t strong and interesting enough to capture the judges interests.</p>
            <p>Still, we were able to get the 5th Rank.</p>
            <p>Regardless of the rank and rewards, I am more than grateful just to be part of this unforgettable journey as an international student.</p>
            <div className="w-full h-[250px]">
              <Image
                src={team_3}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[400px]">
              <Image
                src={coding}
                alt="judgehub-1-image"
                className="w-full h-full object-cover"
              />
            </div>
            <p>The journey for the Team was ended along with the event, but for me, as a Computer Science Student, I reused the idea for my Final Project in Database Management System Class and scored a Top Grade!</p>
            <p>This project was full of doubts and uncertainty. But surely, it is one of the fews that I am most proud of.</p>
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

export default Ecotec