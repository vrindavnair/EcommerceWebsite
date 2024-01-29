import React from 'react'
import Announcement from '../Components/Announcement'
import Navspace from '../Components/Navspace'
import Footer from '../Components/Footer'
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css'

function Cart() {
    return (
        <div>
            <Announcement />
            <Navspace />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 style={{ textAlign: 'center' }}>YOUR BAG</h4>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <button className='btn' style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>CONTINUE SHOPPING</button>
                            </div>
                            <div className="col-md-4">
                                <p style={{ display: 'inline-block' }}>Shopping Bag(2) &nbsp;&nbsp;
                                    Your Wishlist</p>

                            </div>
                            <div className="col-md-4">
                                <button className='btn' style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>CHECKOUT NOW</button>



                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">
                                <img  className="img-fluid" style={{height:'300px'}} src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resiz" alt="" />

                            </div>
                            <div className="col-md-3" style={{marginTop:'30px'}}>
                                <b>Product:</b>&nbsp;JESSIE THUNDER SHOES<br/>
                                <b>ID:</b> 93813718293<br/>
                                <b>color:</b> black<br/>
                                <b>Size:</b> 37.5<br/>

                            </div>
                            <div className="col-md-3"  style={{marginTop:'30px'}}>
                            <button><IoMdAdd /></button> 1<button><IoMdRemove /> </button>
                            <p style={{padding:'10px', fontSize:'20px'}}><FaRupeeSign></FaRupeeSign>1500</p>
                                
                            </div>
                            <div className="col-md-3"  style={{marginTop:'30px'}}>
                                <h4>ORDER SUMMARY</h4>
                                <p>Subtotal : 1500</p>
                                <p>Shopping Discount: -100</p>
                                <p>Total: 1400</p>
                                <button className='btn bg-danger' style={{color:'white'}}>CHECKOUT NOW</button>
                                

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">
                                <img  className="img-fluid" style={{height:'300px'}} 
                                src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />

                            </div>
                            <div className="col-md-3" style={{marginTop:'30px'}}>
                                <b>Product:</b>&nbsp; HAKURA T-SHIRT<br/>
                                <b>ID:</b> 93813718293<br/>
                                <b>color:</b> gray<br/>
                                <b>Size:</b> M<br/>

                            </div>
                            <div className="col-md-3"  style={{marginTop:'30px'}}>
                            <button><IoMdAdd /></button> 1<button><IoMdRemove /> </button>
                            <p style={{padding:'10px', fontSize:'20px'}}><FaRupeeSign/>1000</p>
                                
                            </div>
                            <div className="col-md-3"  style={{marginTop:'30px'}}>
                            <h4>ORDER SUMMARY</h4>
                                <p>Subtotal :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1000</p>
                                <p>Shopping Discount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -100</p>
                                <p>Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 900</p>
                                <button className='btn bg-danger' style={{color:'white'}}>CHECKOUT NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />



        </div>
    )
}

export default Cart
