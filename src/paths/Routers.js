import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../Pages/404/404';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Contact from '../Pages/ContactPage'

const Routers = () => {

  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default Routers