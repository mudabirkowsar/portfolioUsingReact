import React from 'react'
import FrontPage from './FrontPage';
import WhoAmI from './WhoAmI';
import Hireme from './Hireme';
import Projects from './Projects';
import Footer from './Footer';
import Certifications from './Certifications';
import "../css/Common.css";

function Index() {

  return (
    <> 
      <FrontPage/>
      {/* <WhoAmI/> */}
      <Hireme/>
      <Projects/>
      <Certifications/>
    </>
  )
}

export default Index
