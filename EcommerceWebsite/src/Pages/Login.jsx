import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'

function Login() {
  return (
    <div>
    <div className="container loginbody">
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 loginbox">
                        <h4>SIGN IN</h4>
                        <form>
                           
                            <input type='text' placeholder='USERNAME'
                            style={{marginLeft:'30px', marginTop:'20px'}}/>
                            <input type='password' placeholder='PASSWORD'
                            style={{marginLeft:'30px', marginTop:'20px'}}/>
                            <button className='btn' 
                            style={{marginTop:'20px', marginLeft:'50px', width:'130px' ,backgroundColor:'teal', color:'white'}}>Login </button>

                        </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )    
}

export default Login
