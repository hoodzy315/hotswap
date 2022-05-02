import NavBar from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useContext, useRef } from 'react';

import ToastContext from '../context/ToastContext';
import { Toast } from 'primereact/toast';

const ViewOffers = () => {
  const location = useLocation();
  const [tradeItem, setTradeItem] = useState({});
  const [date, setDate] = useState('');
  const [offers, setOffers] = useState([]);
  const [isTraded, setIsTraded] = useState(false);
  const [trade, setTrade] = useState(null);
  const [tradedTo, setTradedTo] = useState(null);

  const { 
    isToastDisplayed,
    toastSummary,
    toastDetail,
    toastSeverity,
    setIsToastDisplayed,
    setToastSummary,
    setToastDetail,
    setToastSeverity
  } = useContext(ToastContext);
  const toast = useRef(null);
  
  const baseUrl = 'https://damp-fjord-26738.herokuapp.com/api/';
  const imgUrl = `${baseUrl}userstore/images/`;

  useEffect(() => { 
    let isMounted = true;
    if(isMounted) {
      const data = location.state;
      setTradeItem(data);
      const datePosted = new Date(tradeItem.datePosted);
      const localeDate = datePosted.toLocaleDateString();
      setDate(localeDate);
      setOffers(data.offers);
      setTimeout(() => {
        if(data.tradedTo !== null) {
          setIsTraded(true);
          setTradedTo(data.tradedTo);
          setTrade(data.trade);
          const newOffers = offers.filter(item => item.trade === trade);
          setOffers(newOffers);
          
        }
      }, 500)
      
    }
    
    return () => { isMounted = false };
  }, [tradeItem, tradedTo, isTraded]);

  useEffect(() => {

  }, [offers])

  useEffect(() => {
    if(toast.current) {
      // From PrimeReact library, displays toast message for 5 seconds
      toast.current.show(
        {
          severity: toastSeverity,
          summary: toastSummary,
          detail: toastDetail,
          life: 5000
        }
      );
    }
    setTimeout(() => {
      setIsToastDisplayed(false);
    }, 5000);
}, [isToastDisplayed])

  const acceptOffer = async (offeredItemId) => {
    try {
      const response = await fetch(`${baseUrl}tradeitems/accept-offer`,
        {
          method: 'POST',
          body: JSON.stringify({offeredItemId: offeredItemId}),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      const newOffers = offers.filter(item => item._id === offeredItemId);
      setOffers(newOffers);
      setToastSeverity('success');
      setToastSummary('Success!');
      setToastDetail('Trade made successfully!');
      setIsTraded(true);
      setIsToastDisplayed(true);
    } catch(e) {
      
    }
  }

  const rejectOffer = async (offeredItemId) => {
    try {
      const response = await fetch(`${baseUrl}tradeitems/reject-offer`,
        {
          method: 'POST',
          body: JSON.stringify({offeredItemId: offeredItemId}),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    const newOffers = offers.filter(item => item._id !== offeredItemId);
    setOffers(newOffers);
    setToastSeverity('success');
    setToastSummary('Success!');
    setToastDetail('Trade offer rejected successfully!');
    setIsToastDisplayed(true);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>
      {isToastDisplayed && <Toast ref={toast}/>}
      <NavBar/>
      <div className="wrapper">
        <div className="buttonColumn">
            <Link className ="btn btn-lg btn-danger center modal-button btnFormat2" to="/tradestore">Trade Store</Link> 
            <button className="btn btn-lg btn-danger center modal-button btnFormat2" type="button">Prior Trades</button>
            <button className="btn btn-lg btn-danger center modal-button btnFormat2" type="button">Notifications</button>
            <Link className ="btn btn-lg btn-danger center modal-button btnFormat2" to="/settings">Settings</Link> 
        </div>
        <div className="contentColumn">
        <section className="main_header">
              <div className="left_side">
                <h3>My Trade Item: {tradeItem.name}</h3>
                <p>Approximate market value: ${tradeItem.approximateMarketVal} </p>
              </div>
              <div className="right_side">
                <h5>Date Listed: {date} </h5>
              </div>
            </section>
            <section className="make_trade">
              <div className="make_trade_left">
                  {isTraded && <div className="traded_banner">
                    <h3>Traded</h3>  
                  </div>}
                  <br/>
                  <h4 className="center">Item Details: </h4>
                  <img src={imgUrl + tradeItem.image} alt={tradeItem.name} className="trade_img_large"/>
                  <h5>Brand: </h5>
                  <p>{tradeItem.brand}</p>
                  <h5>Description: </h5>
                  <p>{tradeItem.description}</p>
                  <h5>Condition: </h5>
                  <p>{tradeItem.condition}</p>
              </div>
              <div className="make_trade_right">
                <div className="make_trade_right_header">
                  <h5 className="center">Trade{isTraded ? 'd item' : ' Offers'}</h5>
                </div>
                {!isTraded && offers.map(item => {
                    return <div className="my_trade_item" key={item.name}>
                      <img src={imgUrl + item.image} alt={item.name + ' photo'} className="my_trade_offer_photo"/>
                      <div className="my_trade_item_text">
                        <p>{item.name}</p>
                      </div>
                      <div className="accept_or_reject">
                        <button onClick={() => acceptOffer(item._id)} className="make_offer_btn">Accept Offer</button>
                        <button onClick={() => rejectOffer(item._id)} className="make_offer_btn">Reject Offer</button>
                      </div>
                    </div>    
                }
                )}
                {isTraded && offers.map(item => {
                  return <div className="ship_to_container" key={item.name}>
                    <img src={imgUrl + item.image} alt={item.name + ' photo'} className="traded_to_photo"/>
                    <h5>Brand: </h5>
                    <p>{item.brand}</p>
                    <h5>Description: </h5>
                    <p>{item.description}</p>
                    <h5>Condition: </h5>
                    <p>{item.condition}</p>
                    <h5>Approximate Market Value: </h5>
                    <p>${item.approximateMarketVal}</p>
                    <div className="ship_to_btn_div">
                      <button className="ship_item_btn">Cancel Trade</button>
                      <button className="ship_item_btn">Ship Item</button>
                    </div>
                  </div>
                })
                }
              </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default ViewOffers;