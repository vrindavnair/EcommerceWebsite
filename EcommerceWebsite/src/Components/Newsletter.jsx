import React from 'react'
import { IoSend } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Newsletter.css'


function Newsletter() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12  newsletter">
                   
                        <h1 id='titlenews'>NewsLetter</h1>
                        <p id='desc'>Get timely updates from your favorite products.</p>
                        <div className="newsinput">
                        <input type='text' id='inputbox' placeholder='Your Email'/>
                    <button id='iconbtn'><IoSend /></button>

                        </div>
                    </div>
                 

                </div>
           </div>
      
    </div>
  )
}

export default Newsletter
