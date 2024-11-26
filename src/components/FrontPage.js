import React from 'react'
import Skills from '../animation/Skills';
import "../css/FrontPageQuery.css";
import "../css/Common.css";

function FrontPage() {
    
  const text = "Web-Developer"
  const text2 = "Mudabir-Kowsar"
  return (
    <div>
      
  <div class="cursor"></div>
  <div class="bgcircle"></div>

      
    <div class="background"> 
        <div class="moving-circle"></div>
        <div class="moving-circle"></div>
        <div class="moving-circle"></div>
        <div class="moving-circle"></div>
        <div class="moving-circle"></div>
    </div>
      <div className="container-fluid ">
        
        <div className="mainheading">
          <h2  className='hello'>Hello, </h2> <br />

          <h1 className='welcome'>I'm <span className='yellow'>

            <div className="letter-container portfolio">
                {text2.split('').map((letter, index) => (
                  <span key={index} className="letter yellow" style={{ animationDelay: `${index * 0.3}s` }}>
                    {letter}
                  </span>
                ))}
            </div>
            
            </span></h1>
          {/* <h1 className='portfolio'>Web Developer</h1> */}
         
          <div className="letter-container portfolio">
              {text.split('').map((letter, index) => (
                <span key={index} className="letter" style={{ animationDelay: `${index * 0.4}s` }}>
                  {letter}
                </span>
              ))}
          </div>

          <p className='para'>I'm Mudabir, a B.Tech student in Computer Science with a passion for software engineering. I'm working towards becoming a full-stack web developer, with a solid foundation in HTML, CSS, and JavaScript. I’m also diving into backend technologies like Node.js, Express, and MongoDB.</p>

         <a href=""> <button class="button"> Download CV</button></a>
        </div>

        <div className="photosection">
          <div className="photodiv"></div>
          <img src="./p.png" alt="" />
        </div>
      </div>

      <Skills/>
    </div>
  )
 
}

export default FrontPage
