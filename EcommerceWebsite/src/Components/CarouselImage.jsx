import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

function CarouselImage() {
  return (
    <div>
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="img-fluid"
          src="s3.webp"
         
        />
        <Carousel.Caption>
         
          <p id='p1'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src="s1.jpg"
       
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5> */}
          <p id='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src="s4.jpg"
         
        />
        <Carousel.Caption>
         
          <p id='p1'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}

export default CarouselImage

