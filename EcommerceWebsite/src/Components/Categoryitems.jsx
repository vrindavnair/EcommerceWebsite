import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './Category.css'
import 'bootstrap/dist/css/bootstrap.min.css'



const Categoryitems= ({item}) =>{
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12" >
          <img src={item.img} className='img1'/>


         <p id='p1'>{item.title}</p>
        <Button id='shopnow'> SHOP NOW</Button>
        



         
       
          </div>
        </div>
      </div>
     
       
        


      
    </div>
  )
}

export default Categoryitems

