import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Register.css'

const Register = () => {
  return (
    <div>
        <div className="container body">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-7 inputbox">
                            <h4>CREATE AN ACCOUNT</h4>
                            <form>
                                <input type='text' placeholder='NAME' style={{marginLeft:'30px'}} />
                                <input type='text' placeholder='LAST NAME' style={{marginLeft:'50px'}}/><br/>
                                <input type='text' placeholder='USERNAME'style={{marginLeft:'30px', marginTop:'20px'}}/>
                                <input type='email' placeholder='EMAIL' style={{marginLeft:'50px'}}/><br/>
                                <input type='password' placeholder='PASSWORD'style={{marginLeft:'30px', marginTop:'20px'}}/>
                                <input type='password' placeholder='CONFIRM PASSWORD'style={{marginLeft:'50px'}}/><br/>
                                <button className='btn btn-danger' style={{marginTop:'20px', marginLeft:'100px', width:'130px'}}>CREATE </button>&nbsp;<a href='Login'>Signin</a>

                            </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
