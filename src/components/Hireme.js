import React, { useState } from 'react'
import "../App.css"
import "../Hireme.css"
import Accordian from './Accordian'
import {questions} from "../data/HireQuestions"

function Hireme() {
    const [data, setData]= useState(questions);
  return (
    <div className=''>
        <div className="whyshouldhireme  container"> 
          <h1 className='hire-para' >Why You Should Hire Me!</h1>
            <div className="container-fluid dflex">
                {
                    data.map((curEle) => {
                        // return curEle.question;
                        return <Accordian key={curEle.id} {...curEle} />
                    }) 
                }
            </div>
      </div>
    </div>
  )
}

export default Hireme
