import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';

const Routers = () => {

  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/projects" exact element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default Routers