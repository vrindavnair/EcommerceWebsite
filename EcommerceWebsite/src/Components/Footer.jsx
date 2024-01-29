import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { CgPaypal } from "react-icons/cg";
import { SiPaytm } from "react-icons/si";
import { SiGooglepay } from "react-icons/si";
import { SiAmazonpay } from "react-icons/si";


import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'


function Footer() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <h1 id='logo'>VStore</h1>
                                    <p id='footdesc'> Vstore is a budget-friendly clothing store
                                        that has colorful and trendy pieces
                                        for men and women. </p><br />
                                    <div className="main">
                                        <div className="icons">
                                            <FaFacebook style={{ color: '3B5999' }} />
                                        </div>
                                        <div className="icons">
                                            <FaInstagramSquare style={{ color: 'E4405F' }} />
                                        </div>
                                        <div className="icons">
                                            <FaTwitter style={{ color: '55ACEE' }} />
                                        </div>
                                        <div className="icons">
                                            <FaYoutube style={{ color: 'red' }} />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4">

                                    <div className="headtitle">
                                        <h4 id='title'>UseFull Links</h4>
                                        <ul id='list'>
                                            <li id='items'>Home</li>
                                            <li id='items'>Cart</li>
                                            <li id='items'>Man Fashion</li>
                                            <li id='items'>Women Fashion</li>
                                            <li id='items'>Accessories</li>
                                            <li id='items'>My Account</li>
                                           
                                        </ul>
                                    </div>

                                </div>

                                <div className="col-md-4">
                                    <h4>Contact</h4>
                                    <FaMapMarkerAlt />&nbsp; kottayam,North Arppokara near medical college<br />
                                    <FaPhoneAlt />&nbsp;+91 9867456432<br />
                                    <CiMail />&nbsp;contact@vstore.com<br />
                                    <FaCcVisa style={{ fontSize: '30px' }} />
                                    <CgPaypal style={{ fontSize: '30px' }} />&nbsp;
                                    < SiPaytm style={{ fontSize: '30px' }} />&nbsp;
                                    <SiGooglepay style={{ fontSize: '30px' }} />&nbsp;
                                    <SiAmazonpay style={{ fontSize: '30px' }} />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

    </div>      

    )
}

export default Footer
