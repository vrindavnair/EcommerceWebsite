import React from 'react'
import Announcement from '../Components/Announcement'
import Navspace from '../Components/Navspace'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaRupeeSign } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
const Productbox = () => {
  return (
    <div>
        <Announcement/>
        <Navspace/>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <img src='https://i.ibb.co/S6qMxwr/jean.jpg' className='img-fluid' style={{height:'500px'}}/>
                        </div>
                        <div className="col-md-6">
                            <h1>Denim Jumpsuit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.</p>
            <p><FaRupeeSign />2000</p>
            <select style={{padding:'10px',marginRight:'20px'}} >
                                <option disabled selected>Color</option>
                                 <option>Darkblue</option>
                                 <option>Black</option>
                                 <option>Gray</option>
             </select>
             <select style={{padding:'10px',marginRight:'40px'}} >
                                <option disabled selected>size</option>
                                 <option>XS</option>
                                 <option>S</option>
                                 <option>M</option>
                                 <option>L</option>
                                 <option>XL</option>
                                
             </select>
            <button><IoMdAdd /></button> 1<button><IoMdRemove /> </button> <button>Add to cart</button>




            


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Productbox