import React from 'react'
import "../css/WhoAmI.css"
import "../css/Common.css";

function WhoAmI() {
  return (
    <div className='whoami container'>
      <h1 className='question container'>Who am I?</h1>

      <div className="row aboutuspage">
        <div className="col-6 img">
            <div className="imageforwhiami">
                <img src="./man.png" alt="" />
            </div>
        </div>
        <div className="col-6 data">
            <h1>About me</h1>

            <p className='aboutpara'>I'm <span className='red'>Mudabir</span>, a B.Tech student in Computer Science with a passion for software engineering. I'm working towards becoming a full-stack web developer, with a solid foundation in <i className='green'>HTML</i>,<i className='green'> CSS</i>, <i className='green'>React</i> and <i className='green'>EJS</i>. I’m also diving into backend technologies like <i className='green'> Node.js</i>, <i className='green'>Express</i>, and <i className='green'>MongoDB</i>.</p>

            <h4>a) FrontEnd Technologies</h4>
            <span className='frontend'>1) HTML</span> <span className='frontend aa'>2) CSS</span><br />
            <span className='frontend'>3) JavaScript</span> <span className='frontend bb'>4) React</span><br /> <br />


            <h4>b) BackEnd Technologies</h4>
            <span className='frontend'>1) Node.js</span> <span className='frontend aa'>2) Express</span><br />
            <span className='frontend'>3) MongoDb</span><br /> <br />

            {/* <a href="">
            <button class="cta">
              <span>Contact </span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>

            </a> */}
        </div>
      </div>
    </div>
  )
}

export default WhoAmI
