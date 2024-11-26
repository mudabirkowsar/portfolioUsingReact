import React from 'react'
import "../css/MainProject.css"
import "../css/Common.css"

function MainProjects() {
  return (
    <>
    <div className="cursor"></div>
    <div class="background">
        <div class="moving-circle"></div>
        <div class="moving-circle"></div>
        <div class="moving-circle"></div>
        <div class="moving-circle"></div>
        <div class="moving-circle"></div>
    </div>
        <div className="container mt-4 abcde">
        <div className="bgcdiv"></div>
            <div className="quoteProject">
                <h1>Projects Shows</h1>
                <h1>The Creativity Of </h1>
                <h1>Developer</h1>
                <br />
                <br />
                <h4>Every project is a chance to learn, to figure out problems, and invent solutions.</h4>
            </div>
            
            <div className="mainProjectDiv">
            <h1>Some Basic Projects </h1>
                <div className="beginersDiv">
                    <div className="projectOne">
                        <h1>Project One</h1>
                        <div className="imagedivproject">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGLtZgjllhdhJUi8EjTdnq-0cOgB_7htCcg&s" alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum cupiditate sed neque voluptate ex aut, doloribus ab eum eius?</p>
                        <button>Know More</button>
                    </div>

                    <div className="projectOne">
                        <h1>Project One</h1>
                        <div className="imagedivproject">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGLtZgjllhdhJUi8EjTdnq-0cOgB_7htCcg&s" alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum cupiditate sed neque voluptate ex aut, doloribus ab eum eius?</p>
                        <button>Know More</button>
                    </div>

                    <div className="projectOne">
                        <h1>Project One</h1>
                        <div className="imagedivproject">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGLtZgjllhdhJUi8EjTdnq-0cOgB_7htCcg&s" alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum cupiditate sed neque voluptate ex aut, doloribus ab eum eius?</p>
                        <button>Know More</button>
                    </div>

                    
                </div>
                <div className="mediumDiv"></div>
                <div className="advanceDiv"></div>
            </div>
        </div>
    </>
  )
}

export default MainProjects
