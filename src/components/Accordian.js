import React, { useState } from 'react'
import "../App.css"
import "../Hireme.css"
import "../css/Common.css";
// import {questions} from "../data/HireQuestions"

function Accordian({question, answer}) {
    const [show, setShow] = useState(false);
  return (
    <>
        <div className="container-fluid ques">
            <div className="questionmaindiv">
                <div className="d-flex">
                    <div className="plus-div">
                        <p className='plus' onClick={() => {setShow(!show)}}>
                            {
                                show ? "➖" : "➕"
                            }
                        </p>
                    </div>
                    
                    <div className="ques_div">
                        <h3 className='que'>
                            {question}
                        </h3>
                    </div>
                </div>

                {
                    show &&  <div className="answer_div">
                                <h3 className='answer' >{answer}</h3>
                            </div>
                }
               
            </div>
        </div>
    </>
  )
}

export default Accordian
