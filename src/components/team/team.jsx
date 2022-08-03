import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import photo_paul from '../../assets/images/team/paul.png';
import photo_artem from '../../assets/images/team/artem.png';
import photo_utsav from '../../assets/images/team/utsav.png';
import photo_katherine from '../../assets/images/team/katherine.png';
import photo_elizabeth from '../../assets/images/team/elizabeth.png';
import photo_gregory from '../../assets/images/team/gregory.png';
import photo_sanjeev from '../../assets/images/team/sanjeev.png';
import photo_rakibul from '../../assets/images/team/rakibul.png';
import photo_shekh from '../../assets/images/team/shekh.png';
import photo_bapilal from '../../assets/images/team/bapilal.png';


class Teams extends Component {
  render() {
    const coreTeam = [
      {
        meamber: 'Paul Arthur Osaroejii',
        position: 'Founder/CEO',
        image: photo_paul,
        text: 'He brings his multi-faceted work experience to the leadership of this new blockchain-based company, having worked in Banking, Insurance Adjusting and Risk Management. He holds a bachelor’s degree in Healthcare Administration (specializing in Leadership,) as well as a Master of Science in Healthcare Administration (Leadership) from Capella University, Minneapolis, Minnesota, USA. He is currently completing his Doctor of Healthcare Administration degree program at the Historically Black College and University (HBCU,) Virginia University of Lynchburg. Paul’s desire to create a system of equitable distribution of wealth that can outlast the present generation is the inspiration behind ShareOn, Inc. '
      },
      {
        meamber: 'Artem Filipov',
        position: 'Lead Developer',
        image: photo_artem,
        text: 'He is a full stack web developer with over seven years of blockchain experience, working on numerous cryptocurrency projects. Artem holds a Master of Science in Information Technology – Software Engineering from Innopolis University, Kazan, Russia. He has worked as a senior web developer at ITA Labs, Moscow, Russia. Artem is one of the most enthusiastic blockchain experts in the industry, and he brings the excitement and innovative dexterity to ShareOn, Inc.’s flagship cryptocurrency project, Newcowrie.'
      },
      {
        meamber: 'Utsav Kumar',
        position: 'Content Strategist',
        image: photo_utsav,
        text: 'He is our lead content strategist, who has been actively working with blockchain-based projects since 2015, that is from before the first boom and birth of Ethereum. With a Masters in English Language and Literature from the University of Delhi, and MPhil (where his research focused on educational psychology), Utsav is a certified editor. He also has extensive experience working with top global publications and news agencies, including Times of India, and Sunday Guardian. Utsav’s thoughtful insights and analysis of all that turns the tides in the world of blockchain and cryptocurrencies are a regular appearance on many different tech-related portals. As an active member of the global crypto community, Utsav brings the necessary experience and energy to effectively drive our communication efforts.'
      },
      {
        meamber: 'Katherine Fleischman',
        position: 'Public Relations Specialist',
        image: photo_katherine,
        text: 'She is a publicist based in Miami, Florida. She graduated from the University of Michigan with a focus on Art History and Psychology and later received a master’s degree in Public Relations from New York University. Her passion for helping great projects grow is a priceless asset to Newcowrie.'
      },
      {
        meamber: 'Elizabeth Wallace',
        position: 'Public Relations Consultant',
        image: photo_elizabeth,
        text: `Elizabeth U. Wallace is a Public Relations Consultant, movie producer, Director and screenwriter, trained at the Royal Act Film Academy. In 2014, Elizabeth created and produced the much talked about Nollyhood movie, "Behind the Melody," as well as the 2015 star-studded Nollyhood movie, “Folly,” which was a commercial success. Her experience working as a Public Relations Consultant for companies like Agious perfectlook, LLC, Jaiye Diapers, LLC, Cool Studio, LLC, Dress U, Ukwudi Studio’s, LLC, The Empowerment Center, Inc., and My Crocodile and Alligator Kids, LLC, makes her an invaluable asset to a new company like ShareOn, Inc., especially as she loves to help her clients increase their market position by leveraging latest technologies and proven promotion strategies.`
      },
      {
        meamber: 'Gregory Barron',
        position: 'Brand Ideology Advisor',
        image: photo_gregory,
        text: 'Gregory Barron is a seasoned consultant with a history of working within the insurance industry for transportation professionals. Strong information technology professional with a Bachelor of Business Administration (BBA) in Financial Accounting from Hofstra University, LI, NY. His wealth of knowledge is a great asset to our organization, especially when it comes to ensuring that we are living up to our mission, vision, and values.'
      },
      {
        meamber: 'Sanjeev Mehta',
        position: 'Technology Strategist',
        image: photo_sanjeev,
        text: 'He is the strategist extraordinaire here at ShareOn, Inc., especially when it comes to ensuring that we are maintaining our competitive edge in the industry. Sanjeev holds a bachelor’s degree in Computer Science from Punjab Technical University, Amritsar, India, as well as a Diploma in Mechanical Engineering. Sanjeev is an astute iOS developer, who brings his innovative mindset to ShareOn, Inc.’s numerous projects, including online marketplace development and design, and money transfer platforms.'
      },
      {
        meamber: 'Rakibul Alom',
        position: 'Graphic Designer',
        image: photo_rakibul,
        text: 'He is an exceptionally talented graphic designer, who has worked as a senior graphic designer, and computer trainer at Friends Computer and Training Center, as well as Alisha Enterprise, where he was responsible for developing and creating digital and print designs for a wide range of print and online campaigns, publications, and advertorials. He brings his rare ingenuity to ShareOn, Inc.’s branding, to ensure that our virtual portrayals perfectly represent the brand. Rakibul holds a Bachelor of Arts degree from Government Suhrawardy College, Pirojpur, Bangladesh.'
      },
      {
        meamber: 'Shekh Shahin',
        position: 'Marketing Consultant',
        image: photo_shekh,
        text: 'He is a WordPress, SEO and Social Media expert, whose vast experience in digital marketing is cherished as an invaluable asset to ShareOn, Inc.’s flagship cryptocurrency project, as he is responsible for full White Hat SEO service, Niche research, keyword research, competitor analysis, and social media marketing. Shekh has worked at Decimal IT as a Facebook Marketing expert, and Lead Generation. He holds a BSc from the University of Engineering and Technology, Rajshahi, Bangladesh.'
      },
      {
        meamber: 'Bapilal Tikader',
        position: 'Marketing Consultant',
        image: photo_bapilal,
        text: 'He is an expert in Discord Marketing, Stockwits Marketing, Telegram Marketing, Twitter Marketing, Youtube Marketing, Google reviews Marketing, LinkedIn Marketing, graphic design, as well as Facebook and Instagram Ads campaign, and general advertising. Bapilal holds a Diploma in Civil Engineering from Khulna Polytechnic Institute, Khulna, Bangladesh.'
      },
    ]

    const Items = ({ meamber, position, image, text, dur }) => {
      if (this.props.animate) {
        return (
          <ReactWOW animation={this.props.animate} duration={`${dur + 1}s`}>
            <Col lg={6} md={6} sm={6} className="col-xs-12">
              <div className="team-list">
                <div className="conte">
                  <div className="dbox">
                    <div className="dleft">
                      <img src={image} alt="team member" />
                    </div>
                    <div className="dright">
                      <div className="content">
                        <h3>{meamber}</h3>
                        <span>({position})</span>
                        <ul>
                          <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                          <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                          <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="con">
                    <p>{text}</p>
                  </div>
                </div>
              </div>
            </Col>
          </ReactWOW>
        )
      } else {
        return (
          <Col lg={6} md={6} sm={6} className="col-xs-12">
            <div className="team-list">
              <div className="conte">
                <div className="dbox">
                  <div className="dleft">
                    <img src={image} alt="team member" />
                  </div>
                  <div className="dright">
                    <div className="content">
                      <h3>{meamber}</h3>
                      <span>({position})</span>
                    </div>
                  </div>
                </div>
                <div className="con">
                  <p>{text}</p>
                </div>
              </div>
            </div>
          </Col>
        )
      }
    }

    return (
      <React.Fragment>
        <div id="default" className="wd_scroll_wrap wd_scroll">
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
          <section className="team-area pd-t100 pd-b50" id="theteam">
            <div className="particles-team" >
              <Container>
                <Row>
                  <Col lg={12} md={12} sm={12} className="col-xs-12">
                    <div className="section-heading2">
                      {
                        this.props.animate ?
                          (
                            <ReactWOW animation={this.props.animate} duration="1s">
                              <h2>The Team</h2>
                            </ReactWOW>
                          ) : (
                            <h2>The Team</h2>
                          )
                      }
                    </div>
                  </Col>
                </Row>
                <Row>
                  {
                    coreTeam.map((obj, i) => (
                      <Items key={i} dur={(i + 1) * 0.3} meamber={obj.meamber} position={obj.position} image={obj.image} text={obj.text} />
                    ))
                  }
                </Row>
              </Container>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Teams;