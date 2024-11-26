import React from 'react'
import "../css/Common.css";
import "../css/About.css";
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
  <div class="cursor"></div>
  <div class="background">
        <div class="moving-circle"></div>
        <div class="moving-circle"></div>
        <div class="moving-circle"></div>
        <div class="moving-circle"></div>
        <div class="moving-circle"></div>
    </div>

    <section className="about-section">
        <div className="container">
            <div className="about-photo">
                <img src="https://media.istockphoto.com/id/1336832604/photo/male-teenage-student-in-yellow-background-stock-photo.jpg?s=2048x2048&w=is&k=20&c=2aDORiMJQW72BlWMtw1kq0VKqFBWyh7wlbKNZeHbm5E=" alt="Mudabir Kowsar Photo"/>
            </div>
            <div className="about-content">
                <h1>About Me</h1>
                <p>Hello! I'm <strong>Mudabir Kowsar</strong>, a passionate full-stack web developer. I specialize in creating high-quality, user-friendly websites and web applications. I have a strong foundation in <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, <span>React</span>, <span>Node.js</span>, and <span>MongoDB</span>.</p>
                <p>Currently pursuing my <strong>B.Tech in Computer Science</strong>, I have developed several personal projects and gained hands-on experience through various web development tasks. My goal is to keep learning and growing in this field while building innovative solutions.</p>

                <h2>Skills</h2>
                <ul className="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>

                </ul>

                <h2>Personal Interests</h2>
                <p>Besides coding, I enjoy sketching, exploring new tech trends, and gaming. I'm also a sci-fi movie enthusiast!</p>

                <Link to="/contact" className="cta-button">Let's Work Together</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default About
