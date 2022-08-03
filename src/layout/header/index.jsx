import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useWalletModal } from "@pancakeswap-v3/uikit";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import logo from "../../assets/images/logo/logo.png";
import Config from "../../configure";
import $ from "jquery";
import { connect } from "react-redux";
import { switchNetwork } from "redux/actions/network";
import { ETHEREUM_MAINNET_CHAINID, BINANCE_SMART_CHAINID } from "config";

const Header = ({ network, switchNetwork }) => {
  const [navMenuMobile, setNavMenuMobile] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);
  const { account } = useWeb3React();
  const { login: ercLogin, logout: ercLogout } = useAuth(ETHEREUM_MAINNET_CHAINID);
  const { login: bscLogin, logout: bscLogout } = useAuth(BINANCE_SMART_CHAINID);

  const { onPresentConnectModal: onERCPresentConnectModal, onPresentAccountModal: onERCPresentAccountModal } = useWalletModal(
    ercLogin,
    ercLogout,
    account,
    ETHEREUM_MAINNET_CHAINID
  );
  const { onPresentConnectModal: onBSCPresentConnectModal, onPresentAccountModal: onBSCPresentAccountModal } = useWalletModal(
    bscLogin,
    bscLogout,
    account,
    BINANCE_SMART_CHAINID
  );
  let mount;

  const toggleNavMenu = () => {
    setNavMenuMobile(!navMenuMobile);
  };
  const handleScroll = () => {
    if (mount) setScroll(window.scrollY);
  };

  useEffect(() => {
    mount = true;
    const el = document.querySelector(".gc_main_menu_wrapper");
    setTop(el.offsetTop + 700);
    setHeight(el.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > top
      ? (document.body.style.paddingTop = `${height}px`)
      : (document.body.style.paddingTop = "0");
    return () => {
      mount = false;
    };
  }, []);

  $(document).ready(() => {
    $('.wd_single_index_menu ul li a[href^="#"]').bind(
      "click",
      function (event) {
        event.preventDefault();
        event.stopPropagation();
        var $anchor = $(this);
        if ($(window).width() > 991) {
          var headerH = "60";
        } else {
          headerH = "56";
        }
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr("href")).offset().top - headerH + "px",
            },
            800
          );
      }
    );
    $(window).scroll(function () {
      var windscroll = $(window).scrollTop();
      var target = $(".wd_single_index_menu ul li");
      if (windscroll >= 0) {
        $(".wd_scroll").each(function (i) {
          if ($(this).position().top <= windscroll + 90) {
            target.removeClass("active");
            target.eq(i).addClass("active");
          }
        });
      } else {
        target.removeClass("active");
        $(".wd_single_index_menu ul li:first").addClass("active");
      }
    });
  });
  let navigation = (
    <ul>
      <li>
        <a className="nav-link" href="#default">
          Home
        </a>
      </li>
      <li>
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="nav-link" href="#presale">
          Presale
        </a>
      </li>
      <li>
        <a className="nav-link" href="#road_map">
          Road Map
        </a>
      </li>
      <li>
        <a className="nav-link" href="#tokens">
          Tokens
        </a>
      </li>
      <li>
        <a className="nav-link" href="#theteam">
          Team
        </a>
      </li>
      <li>
        <a className="nav-link" href="#news">
          News
        </a>
      </li>
    </ul>
  );

  return (
    <div id="default" className="wd_scroll_wrap wd_scroll">
      <header className={`gc_main_menu_wrapper ${scroll > top ? "menu_fixed animated fadeInDown" : ""}`}>
        <Container fluid>
          <Row>
            <Col className="col-xs-6" sm={12} md={3} lg={3}>
              <div className="logo-area">
                <Link to={Config.defaultPath}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </Col>
            <Col lg={9} md={9} sm={12} className="col-xs-6">
              <div className="menu-area hidden-xs">
                <nav className="wd_single_index_menu btc_main_menu">
                  {navigation}
                </nav>
                <div className="login-btn">
                  {account ? (
                    <React.Fragment>
                      <div className="login_box" onClick={network === ETHEREUM_MAINNET_CHAINID ? onERCPresentAccountModal : onBSCPresentAccountModal}>
                        <span>{network === ETHEREUM_MAINNET_CHAINID ? "Ethereum Main Net" : "BSC Main Net"}</span>
                        <span className="wallet_add">
                          {account.substr(0, 6) +
                            "..." +
                            account.substr(account.length - 4, 4)}
                        </span>
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <select id="select_network" value={network} onChange={(e) => switchNetwork(e.target.value)}>
                        <option value={ETHEREUM_MAINNET_CHAINID}>ETH Mainnet</option>
                        <option value={BINANCE_SMART_CHAINID}>BSC Mainnet</option>
                      </select>
                      <button className="btn1" onClick={network === ETHEREUM_MAINNET_CHAINID ? onERCPresentConnectModal : onBSCPresentConnectModal}>
                        Connect Wallet
                      </button>
                    </React.Fragment>
                  )}
                </div>
              </div>
              <div className="rp_mobail_menu_main_wrapper visible-xs">
                <div className="row">
                  <div className="col-xs-12">
                    <div id="toggle" onClick={toggleNavMenu}>
                      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.177 31.177" space="preserve" width="25px" height="25px">
                        <g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z"
                              fill="#fff"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z"
                              fill="#fff"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z"
                              fill="#fff"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z"
                              fill="#fff"
                            />
                          </g>
                          <g>
                            <path className="menubar" d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z" fill="#fff" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div id="sidebar" style={{ left: navMenuMobile ? 0 : "-300px", transition: "all 0.5s linear", }}                >
                  <h1>
                    <Link to={Config.defaultPath}>Newcowrie</Link>
                  </h1>
                  <div onClick={toggleNavMenu} id="toggle_close">
                    &times;
                  </div>
                  <div id="cssmenu" className="wd_single_index_menu">
                    {navigation}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  network: state.network.chainId
});

const mapDispatchToProps = dispatch => ({
  switchNetwork: (chainId) => dispatch(switchNetwork(chainId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
