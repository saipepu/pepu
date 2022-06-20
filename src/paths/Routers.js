import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';

const Routers = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/pepu" exact element={<Home />} />
        <Route path="/pepu/about" exact element={<About />} />
        <Route path="/pepu/projects" exact element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default Routers