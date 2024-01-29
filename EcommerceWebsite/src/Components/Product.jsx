import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Product.css'
const Product = ({ item }) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12" id='prod'>
                        <img src={item.img} id='prodimg' />

                        <div className="info">
                            <div className="icon">
                                <FaShoppingCart />

                            </div>
                            <div className="icon">
                                <CiSearch />

                            </div>
                            <div className="icon">

                                <FaRegHeart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product
