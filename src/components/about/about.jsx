import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import about from '../../assets/images/about/1.png';

class About extends Component {
  render() {
    let page = (
      <div>
        <h2 className="f-40 fw-400 fc-white">
          About the Newcowrie
        </h2>
        <Row>
          <Col lg={5} md={5} sm={12} className="col-xs-12" style={{ textAlign: 'center' }}>
            <img src={about} alt="about_img" style={{ width: "90%" }} />
          </Col>
          <Col lg={7} md={7} sm={12} className="col-xs-12">
            <div className="about-content">
              <p>Throughout human history, Cowrie, a medium of value storage and exchange, has been a powerful tool that plays a pivotal role in the genesis and execution of trade and commerce across cultures transcending geographical barriers. Despite considerable use of precious and base metals as a medium of value storage - that gained popularity during the middle ages - the charm of Cowrie remained unwithered until the beginning of the 20th century. With the rise of nation-states, as paper currencies started taking over, we witnessed an unprecedented increase in the inequitable distribution of wealth. As global governments and central financial institutions started controlling the entire economic systems, marginalizing the interests of ordinary citizens, modern currencies gradually became a tool of financial exploitation - contrary to the spirit of the Cowrie, the mother of all currencies.</p>
            </div>
          </Col>
        </Row>
        <p> The Newcowrie project is an organized financial revolution to empower the economically marginalized by giving the control back to the people. We are on a mission to challenge the corrupt and controlled monetary regimes designed to create further economic and social disparity. With Newcowrie, we have created the next-gen currency of e-commerce that leverages the revolutionary blockchain and distributed ledger technology (DLT) to ensure highest levels of transparency. Built on the highly energy-efficient and powerful Binance Smart Chain, Newcowrie is both scalable and self-sustainable. With ultra-fast transaction processing speed, Newcowrie ecosystem supports millions of transactions within seconds. The underlying Proof of Stake (PoS) consensus mechanism makes them greener than other digital means of value storage like Ethereum and Bitcoin. The Newcowrie ecosystem comprises an entire network of token users and online retail stores offering a range of goods and services across the globe.</p>
      </div>
    )

    return (
      <div id='about' className="wd_scroll_wrap wd_scroll">
        <div className="sud">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 181.1" style={{ enableBackground: "new 0 0 1920 181.1" }} space="preserve">
            <g>
              <path style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: this.props.fill ? this.props.fill : '#10122d' }} className="st0" d="M0,80c0,0,28.9-4.2,43-13c14.3-9,71-35.7,137,5c17.3,7.7,33.3,13,48,11c17.3,0.3,50.3,4.7,66,23
                    c20.3,9.7,68,40.3,134-12c24-11,59-16.3,104,2c21,7.3,85,27.7,117-14c24-30.7,62.7-55,141-12c26,10.3,72,14.7,110-14
                    c37.7-19,89.7-29,122,53c23,32.7,47.7,66.3,97,26c24-22.7,51-78.3,137-38c0,0,28.3,15.7,52,15c23.7-0.7,50.7,4.3,76,41
                    c19.7,19.7,71,36.7,121-2c0,0,22.3-16,55-12c0,0,32.7,6.7,56-71c23.3-76,79-92,122-29c9.3,13.7,25,42,62,43c37,1,51.7,25.3,67,48
                    c15.3,22.7,51,22.7,53,23v28.1H0V80z" />
            </g>
          </svg>
        </div>
        <div className="about-area pd-t70 pd-b100">
          <Container>
            {page}
          </Container>
        </div>
      </div>
    );
  }
}

export default About;