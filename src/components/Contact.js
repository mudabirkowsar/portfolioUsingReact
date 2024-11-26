import React from 'react'
import "../css/Contact.css"
import "../css/Common.css"

function Contact() {
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
    <div className="container mt-4 mainAbout">
    <div className="contactCircle"></div>
      <div className="maindiv">

        <div className="form">

        <form>
            <div class="mb-3 formDiv">
              <label htmlFor="name" class="form-label">Enter Name: </label>
              <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder='Mudabir Kowsar'/>
            </div>

            <div class="mb-3 formDiv">
              <label htmlFor="email" class="form-label">Enter Email</label>
              <input type="email" class="form-control" id="email" placeholder='khandaymudabir@gmail.com'/>
            </div>

            <div class="mb-3 formDiv">
              <label htmlFor="desc"  class="form-label">Discuss Here: </label>
              <textarea name="desc" rows="10" cols="40" id="desc" placeholder='My Name is Mudabir Kowsar Khanday' class="form-control"></textarea>
            </div>

            <button type='submit' class="contactbtn">Contact Me</button>
        </form>

        </div>
        
        <div className="imagediv">
          <img src="./about.png" alt="" />
        </div>

      </div>
    </div>
    </>
  )
}

export default Contact
