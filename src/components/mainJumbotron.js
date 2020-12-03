import React from "react"
import { Carousel, Button } from 'react-bootstrap'
import slider1 from '../../content/assets/slider1.png'
import slider2 from '../../content/assets/slider2.png'
import slider3 from '../../content/assets/slider3.png'

const MainJumbotron = () => {
  return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 style={{ color: '#ffffff'}}>The Grow Factory Garden</h2>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2 style={{ color: '#ffffff'}}>Cultivation News, Goods, Tips & Tricks</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2 style={{ color: '#ffffff'}}>The Opinion Collection</h2>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default MainJumbotron