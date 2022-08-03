import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import ReactWOW from 'react-wow';
import ModalVideo from 'react-modal-video'
import poster from '../../assets/images/video/1.png';
import video2 from '../../assets/images/video/2.png';
import video3 from '../../assets/images/video/3.png';
import video4 from '../../assets/images/video/4.png';
import video5 from '../../assets/images/video/5.png';
import video6 from '../../assets/images/video/6.png';
import video7 from '../../assets/images/video/7.png';
import video8 from '../../assets/images/video/8.png';
import video9 from '../../assets/images/video/9.png';
import 'react-modal-video/scss/modal-video.scss'
import 'video.js/dist/video-js.min.css';


class Roadmap extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }
  render() {
    let titleAni = (
      <h2>Development of Newcowrie<br />(Road Map)</h2>
    )
    let contents = (
      <ul>       
        <li>
          <span className="years"><span className="con">2021</span></span>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="imgs"><img src={video3} alt="video" /></div>
                  </div>
                  <div className="dright">
                    <div className="content">
                      <p>(1Q 2021)</p>
                      <h3>Conceptualizing<br/>Global Cryptocurrency</h3>                      
                    </div>                    
                  </div>                  
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="content">
                      <p>(2Q 2021)</p>
                      <h3>WhitePaper<br /> Landing page</h3>
                    </div>
                  </div>
                  <div className="dright">
                    <div className="imgs"><img src={video5} alt="video" /></div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="imgs"><img src={video7} alt="video" /></div>
                  </div>
                  <div className="dright">
                    <div className="content">
                      <p>(3Q 2021)</p>
                      <h3>Publish <br /> Smart Contract <br />ICO Launch</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="content">
                      <p>(4Q 2021)</p>
                      <h3>Building<br />Partnership in<br />Ecommerce space</h3>
                    </div>
                  </div>
                  <div className="dright">
                    <div className="imgs"><img src={video4} alt="video" /></div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </li>
        <li>
          <span className="years"><span className="con">2022</span></span>     
          <div className="serials">
            <span className="cre"></span>            
          </div>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={12} className="col-xs-12 center-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="imgs"><img src={video9} alt="video" /></div>
                  </div>
                  <div className="dright">
                    <div className="content">
                      <p>(1Q 2022)</p>
                      <h3>Leverage<br />Overall Industry<br />to Advantage</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </li>
      </ul>
    )   
    return (
      <div id="road_map" className="wd_scroll_wrap wd_scroll">
        <ModalVideo channel='custom' isOpen={this.state.isOpen} url='/newcowrie.mp4' onClose={() => this.setState({ isOpen: false })} />

        <div className="wd_scroll_wrap">
          <section className="video-des">
            <Container>
              <Row>
                <Col lg={12} md={12} sm={12} className="col-xs-12">
                  <div className="deslidt">
                    {contents}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    );
  }
}

export default Roadmap;