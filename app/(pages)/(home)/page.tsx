"use client";

import React, { useEffect } from 'react'
import Hero from './_components/hero';
import Highlights from './_components/highlights';
import ParallaxContainer from './_components/parallaxContainer';
import ProjectList from './_components/projectList';
import Footer from './_components/footer';

const Home = () => {

  return (
      <div id="container" className="h-full w-full pt-[70px] pb-[10px] flex flex-col justify-start items-center overflow-scroll">

        <div className="w-full max-w-[1000px] md:h-full flex flex-col justify-start items-center gap-[2px] px-[10px] md:px-[20px]">
          
          <Hero />
          <Highlights />
          <ParallaxContainer />
          <ProjectList />

          <Footer />

        </div>
        
      </div>
  )
}

export default Home