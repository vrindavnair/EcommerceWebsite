import React from 'react'
import Navspace from '../Components/Navspace'
import Announcement from '../Components/Announcement'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'

const Productlist = () => {
  return (
    <div>
        <Announcement/>

        <Navspace/>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                        <h4 style={{marginRight:'20px', display:'inline-block'}}>Filter Products</h4> 
                       
                            <select style={{padding:'10px',marginRight:'20px'}} >
                                <option disabled selected>Color</option>
                                 <option>White</option>
                                 <option>Black</option>
                                 <option>Red</option>
                                 <option>Blue</option>
                                 <option>Yellow</option>
                                 <option>Green</option>

                            </select>
                            <select style={{padding:'10px',marginRight:'20px'}} >
                                <option disabled selected>Size</option>
                                 <option>XS</option>
                                 <option>S</option>
                                 <option>M</option>
                                 <option>L</option>
                                 <option>XL</option>
                                 <option>XXL</option>





                            </select>
                        </div>
                        <div className="col-md-6">
                          <h4 style={{marginRight:'20px', display:'inline-block'}}>Sort Products</h4> 
                            <select style={{padding:'10px',marginRight:'20px'}}>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Products/>
        <Newsletter/>
        <Footer/>

        
        </div>
  )
}

export default Productlist