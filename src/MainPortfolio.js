import React from 'react'
import Navbar from './components/Navbar'
import Index from './components/Index'
import Contact from './components/Contact'
import About from './components/About'
import Nopage from './components/Nopage'
import MainProject from './components/MainProjects'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function MainPortfolio() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Index />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<MainProject />} />
            <Route path='*' element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainPortfolio
