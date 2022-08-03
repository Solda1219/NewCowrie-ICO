import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import OwlCarousel from 'react-owl-carousel2';
import $ from 'jquery';
import blog1 from '../../assets/images/blog/1.jpg';
import blog2 from '../../assets/images/blog/2.jpg';
import blog3 from '../../assets/images/blog/3.jpg';

class Blogs extends Component {
  componentDidMount() {
    $(".blog-slider .item").hover(function () {
      $(this).closest(".blog-slider").addClass("active");
    }, function () {
      $(this).closest(".blog-slider").removeClass("active");
    });
  }
  render() {
    const data = [
      {
        image: blog1,
        title: "NEWCOWRIE UNITES ANCIENT AND MODERN TO CREATE THE FUTURE OF MONEY",
        date: 'June 24, 2021',
        text: 'What happens when ancient currencies and modern financial systems come together to form a new currency system?',
        link: 'https://shareoninc.com/uncategorized/newcowrie-unites-ancient-and-modern-to-create-the-future-of-money/'
      },
      {
        image: blog2,
        title: "NEWCOWRIE ICO RESTORES FAITH IN THE CRYPTO MARKET",
        date: 'June 28, 2021',
        text: 'The cryptocurrency market is jolted with the drop in prices of Dogecoin, Ethereum, andBitcoin.',
        link: 'https://shareoninc.com/uncategorized/newcowrie-ico-restores-faith-in-the-crypto-market/'
      },
      {
        image: blog3,
        title: "NEWCOWRIE MAKES THE FUTURE OF CRYPTOCURRENCY EVEN BRIGHTER",
        date: 'June 28, 2021',
        text: 'Many digitalcoins and altcoins have come up, aiming to be the real game-changer in the digital money world',
        link: 'https://shareoninc.com/uncategorized/newcowrie-makes-the-future-of-cryptocurrency-even-brighter/'
      },
    ]
    const options = {
      slideSpeed: 500,
      autoplay: true,
      rewind: true,
      margin: 0,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    };
    const Items = ({ image, title, date, text, link }) => (
      <Col lg={12} md={12} sm={12} className="col-xs-12 item">
        <div className="blog">
          <figure><img src={image} alt="" /></figure>
          <div className="content">
            <span><i className="fa  fa-calendar-o"></i>{date}</span>
            <h4><a href={link}>{title}</a></h4>
            <p>{text}</p>
            <a href={link} className="blog-btn">read more <i className="fa  fa-arrow-circle-o-right"></i></a>
          </div>
        </div>
      </Col>
    )

    return (
      <div id="news" className="wd_scroll_wrap wd_scroll">
        <section className="blog-area section">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="col-xs-12">
                <div className="section-heading2">
                  {
                    this.props.animate ?
                      (
                        <ReactWOW animation={this.props.animate} duration="1s">
                          <h2>Latest News</h2>
                        </ReactWOW>
                      ) : (
                        <h2>Latest News</h2>
                      )
                  }
                </div>
              </Col>
            </Row>
            <Row>
              <div className="blog-slider">
                <OwlCarousel ref="carousel" options={options}>
                  {
                    data.map((obj, i) => (
                      <Items key={i} image={obj.image} title={obj.title} date={obj.date} text={obj.text} link={obj.link}/>
                    ))
                  }
                </OwlCarousel>
              </div>
              <div className="view-btn col-xs-12">
                <a href="https://shareoninc.com/news-room/">All News</a>
              </div>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Blogs;