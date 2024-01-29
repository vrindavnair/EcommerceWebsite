import React from 'react'
import { Container } from 'react-bootstrap'
import { categories } from '../data'
import Categoryitems from './Categoryitems'
import './Category.css'


function Categories() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12" id='a1'>
                {categories.map((item) => (
        <Categoryitems item={item} key={item.id} />
      ))}

                </div>
            </div>
        </div>
     
     

      
    </div>
  )
}

export default Categories
