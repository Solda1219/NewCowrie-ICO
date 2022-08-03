import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
// import Particles from 'react-particles-js';
import about from '../../assets/images/about/1a.png';
import background from '../../assets/images/banner/background.png';

class MainSlider extends Component {
  render() {
    const data = [
      {
        title: "NEWCOWRIE - The future of money ",
        btn1: 'WHITEPAPER',
        btn2: 'Buy Tokens Now!'
      },
    ]
    const Items = data.map((obj, i) => (
      <div className="item" key={i}>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} className="col-xs-12">
              <div className="slider-content">
                <ul>
                  <li className="slider_social_icon1">
                    <a href="https://www.facebook.com/Newcowrie-111578141161299"><i className="fa fa-facebook"></i></a>
                  </li>
                  <li className="slider_social_icon2">
                    <a href="https://twitter.com/newcowrie"><i className="fa fa-twitter"></i></a>
                  </li>
                  <li className="slider_social_icon3">
                    <a href="https://www.youtube.com/channel/UCDekWUzNilYLfUBuimcAFdQ"><i className="fa fa-youtube"></i></a>
                  </li>
                  <li className="slider_social_icon4">
                    <a href="https://www.instagram.com/newcowrie/"><i className="fa fa-instagram"></i></a>
                  </li>
                  <li className="slider_social_icon5">
                    <a href="https://www.pinterest.com/newcowrie/_saved/"><i className="fa fa-pinterest"></i></a>
                  </li>
                </ul>
                <h2>{obj.title}</h2>
                <div className="buttons">
                  <a href="/whitepaper.pdf" className="btn1" target="_blank">{obj.btn1}</a>
                  <a href="#presale" className="btn2" >{obj.btn2}</a>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="col-xs-12 hidden-xs hidden-sm">
              <div className="btc_slider_about_img" >
                <img src={about} alt="about_img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    ))
    return (
      // <div className="slider-area" style={{background: `url(${background}) no-repeat` }}>
      <div className="slider-area">
        {/* <Particles
          style={{ width: window.innerWidth + 'px', height: window.innerHeight + 'px', background: '#0d469f' }}
          params={{
            "particles": {
              "number": {
                "value": 50
              },
              "size": {
                "value": 9
              },
              "shape": {
                "type": "images",
                "stroke": {
                  "width": 0,
                  "color": "#000"
                },
                "polygon": {
                  "nb_sides": 6
                },
                "images": [
                  { src: 'coin.png', height: 20, width: 20 },
                ]
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                }
              }
            }
          }} /> */}
        <div className="carousel">
          <Slider autoplay duration={3000} previousButton={<p></p>} nextButton={<p></p>}>
            {Items}
          </Slider>
        </div>  
      </div>
    );
  }
}

export default MainSlider;