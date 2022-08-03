import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { TextField } from '@material-ui/core';
import { useWeb3React } from '@web3-react/core'
import Countdown from '../countdown/countdown';
import { connect, useDispatch } from "react-redux";
import { ETHEREUM_MAINNET_CHAINID, BINANCE_SMART_CHAINID } from "config";
import ETH_image from '../../assets/images/icons/ETH.png';
import BNB_image from '../../assets/images/icons/BNB.png';
import COWR_image from '../../assets/images/icons/COWR.png';
import { useSelector } from 'react-redux';
//import useTotalSupplyOfPreSale  from 'hooks/usePresale'
import { formatNumber, getDecimalAmount } from 'utility/formatBalance'
import { updateSaleStatus3 } from 'redux/actions/salestatus/thunkStatus'
import useBuyPreSale from 'hooks/usePresale';

const Presale = () => {
  const network = useSelector(state => state.network.chainId);
  const saleStatus = useSelector(state => state.saleStatus);

  const { account } = useWeb3React()
  const [pendingTx, setPendingTx] = useState(false)
  const [, setRequestedBuy] = useState(false)

  const [sendAmount, setSendAmount] = useState(0);
  const [getAmount, setGetAmount] = useState(0);
  //
  const dispatch = useDispatch()

  const handleRefreshStatus = useCallback(async (network, account) => {
    const saveNewTodoThunk = updateSaleStatus3(network, account)
    dispatch(saveNewTodoThunk)
  }, [network, account])

  useEffect(() => {
    handleRefreshStatus(network, account);
    //console.log(saleStatus)
  }, [network, account]);


  const { onBuy } = useBuyPreSale(network);

  const handleBuy = useCallback(async () => {
    try {
      setRequestedBuy(true)
      const txHash = await onBuy(getDecimalAmount(sendAmount))
      // user rejected tx or didn't go thru
      console.log(txHash)
      if (txHash) {
        setRequestedBuy(false)
        handleRefreshStatus(network, account);
        setSendAmount(0)
        setGetAmount(0)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onBuy, setRequestedBuy, sendAmount])

  const changeSendAmount = (e) => {
    if (document.activeElement === e.target) {
      var set_amount = e.target.value;
      if (set_amount < 0) set_amount = 0;
      var get_amount = Math.floor(set_amount * saleStatus.price * 1000) / 1000;
      setGetAmount(get_amount);
      setSendAmount(set_amount);
    }
  }

  const changeGetAmount = (e) => {
    if (document.activeElement === e.target) {
      var get_amount = e.target.value;
      if (get_amount < 0) get_amount = 0;
      var set_amount = Math.floor(get_amount / saleStatus.price * 1000) / 1000;
      setGetAmount(get_amount);
      setSendAmount(set_amount);
    }
  }
  const buyAction = async () => {
    // Do some action
    if (saleStatus.live) {
      setPendingTx(true)
      await handleBuy()
      setPendingTx(false)
    }
    console.log(sendAmount)
  }


  let page = (
    <div>
      <Row>
        {saleStatus.live ?
          <Col lg={6} md={6} sm={12} className="col-xs-12">
            <h2 className="f-40 fw-400 fc-white" style={{ textAlign: 'center' }}>
              Newcowrie ICO will end at :
            </h2>
            <Countdown timeTillDate="8 22 2021, 13:35 pm" timeFormat="MM DD YYYY, h:mm a" />
          </Col> :
          <Col lg={6} md={6} sm={12} className="col-xs-12">
            <h2 className="f-40 fw-400 fc-white" style={{ textAlign: 'center' }}>
              Newcowrie ICO starts in :
            </h2>
            <Countdown timeTillDate="7 22 2021, 13:35 pm" timeFormat="MM DD YYYY, h:mm a" />
          </Col>
        }
        <Col lg={6} md={6} sm={12} className="col-xs-12" style={{ paddingTop: "80px" }}>
          <div>
            <div className="progressbar-container">
              <div className="progressbar-complete" style={{ width: `${formatNumber(saleStatus.sold, 2, 2)}%` }}>
                <div className="progressbar-liquid"></div>
              </div>
              <span className="progress-percent">{formatNumber(saleStatus.sold, 2, 2)}% Sold</span>
            </div>
            <p className="f-20 fw-400 fc-white">
              Presale Total Amount: {formatNumber(saleStatus.totalSupply, 2, 2)} COWR
            </p>
          </div>
          <div className="buy_token_box">
            <div className="buy_token_subbox">
              <Row>
                <Col lg={6} md={6} sm={6} className="col-xs-6">
                  <h3 className="f-20 title">You Pay : </h3>
                </Col>
                <Col lg={6} md={6} sm={6} className="col-xs-6" style={{ textAlign: "right" }}>
                  <p className="coin_balance">Balance: {formatNumber(saleStatus.ethBalance, 4, 4)}</p>
                </Col>
              </Row>
              <Row className="buy_token_inputbox">
                <Col lg={6} md={6} sm={6} className="col-xs-6">
                  {
                    network === ETHEREUM_MAINNET_CHAINID ? (
                      <div>
                        <img className="coin_image" src={ETH_image} width="40px" />
                        <span className="coin_unit">ETH</span>
                      </div>
                    ) : (
                      <div>
                        <img className="coin_image" src={BNB_image} width="40px" />
                        <span className="coin_unit">BNB</span>
                      </div>
                    )
                  }
                </Col>
                <Col lg={6} md={6} sm={6} className="col-xs-6">
                  <input id="send_amount" type="number" step="0.01" onChange={(e) => { changeSendAmount(e) }} value={sendAmount} />
                </Col>
              </Row>
            </div>
            <div style={{ align: "center" }}>1 COWR ≈ 0.00038USD </div>
            <div className="buy_token_subbox" style={{ marginTop: "50px" }}>
              <Row>
                <Col lg={6} md={6} sm={6} className="col-xs-6">
                  <h3 className="f-20 title">You Receive : </h3>
                </Col>
                <Col lg={6} md={6} sm={6} className="col-xs-6" style={{ textAlign: "right" }}>
                  <p className="coin_balance">Balance: {formatNumber(saleStatus.prsBalance, 2, 2)}</p>
                </Col>
              </Row>
              <Row className="buy_token_inputbox">
                <Col lg={6} md={6} sm={6} className="col-xs-6">
                  <div>
                    <img className="coin_image" src={COWR_image} width="40px" />
                    <span className="coin_unit">COWR</span>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6} className="col-xs-6">
                  <input id="send_amount" type="number" step="0.01" value={getAmount} onChange={(e) => { changeGetAmount(e) }} />
                </Col>
              </Row>
            </div>
            <div className="buttons" style={{ textAlign: "center", marginTop: "35px" }}>
              <button disabled={!sendAmount || pendingTx} className="btn1" style={{ width: "90%" }} onClick={() => { buyAction() }}>Buy Presale Tokens</button>
            </div>
          </div>

          {0 ? (<div className="buy_token_box">
            <h3>You now have <br/>1,500 Newcowrie Presale Tokens.</h3>
          </div>) : (<React.Fragment></React.Fragment>)}
        </Col>
      </Row>
      <Row style={{ textAlign: "center", marginTop: "120px" }}>
        <p id="total_claim">
          You will be claimed to get total <span id="total_amount">{formatNumber(saleStatus.prsBalance, 2, 2)}</span>  Newcowrie!
        </p>
        <p className="f-20">(You can exchange presale-token with Newcowrie when ICO starts.)</p>
      </Row>
    </div>

  )

  return (
    <div id='presale' className="wd_scroll_wrap wd_scroll">
      <div className="presale-area pd-t70 pd-b100">
        <Container>
          {page}
        </Container>
      </div>
      <div className="sud">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 181.1" style={{ enableBackground: "new 0 0 1920 181.1" }} space="preserve">
          <g>
            <path style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#1f58b1' }} className="st0" d="M0,80c0,0,28.9-4.2,43-13c14.3-9,71-35.7,137,5c17.3,7.7,33.3,13,48,11c17.3,0.3,50.3,4.7,66,23
                    c20.3,9.7,68,40.3,134-12c24-11,59-16.3,104,2c21,7.3,85,27.7,117-14c24-30.7,62.7-55,141-12c26,10.3,72,14.7,110-14
                    c37.7-19,89.7-29,122,53c23,32.7,47.7,66.3,97,26c24-22.7,51-78.3,137-38c0,0,28.3,15.7,52,15c23.7-0.7,50.7,4.3,76,41
                    c19.7,19.7,71,36.7,121-2c0,0,22.3-16,55-12c0,0,32.7,6.7,56-71c23.3-76,79-92,122-29c9.3,13.7,25,42,62,43c37,1,51.7,25.3,67,48
                    c15.3,22.7,51,22.7,53,23v28.1H0V80z" />
          </g>
        </svg>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  network: state.network.chainId,
  saleStatus: state.saleStatus,
});

// // const mapDispatchToProps = dispatch => ({
// //   updateSaleStatus: (status) => dispatch(updateSaleStatus(status)),
// // });

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(Presale);