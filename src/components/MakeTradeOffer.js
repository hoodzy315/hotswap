import NavBar from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useContext, useRef } from 'react';
import {AuthContext} from '../App';
import axios from 'axios';

import ToastContext from '../context/ToastContext';
import { Toast } from 'primereact/toast';

const MakeTradeOffer = () => {
  const location = useLocation();
  const [tradeItem, setTradeItem] = useState({});
  const [date, setDate] = useState('');
  const [userStore, setUserStore] = useState('');
  const [token, setToken] = useState('');
  const { state } = useContext(AuthContext);
  const [myTradeItems, setMyTradeItems] = useState([]);

  const imgUrl = 'https://damp-fjord-26738.herokuapp.com/api/userstore/images/';

  const config = {
    headers: {
        "Authorization": "Bearer " + token
    }
}
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

useEffect(() => {
    if(toast.current) {
      // From PrimeReact library, displays toast message for 7 seconds
      toast.current.show(
        {
          severity: toastSeverity,
          summary: toastSummary,
          detail: toastDetail,
          life: 7000
        }
      );
    }
    setTimeout(() => {
      setIsToastDisplayed(false);
    }, 7000);
}, [isToastDisplayed])

  useEffect(() => { 
    let isMounted = true;
    if(isMounted) {
      const data = location.state;
      setTradeItem(data);
      const datePosted = new Date(tradeItem.datePosted);
      const localeDate = datePosted.toLocaleDateString();
      setDate(localeDate);
      setUserStore(state.userStore);
      setToken(state.token);
      getMyItemsForTrade();
    }
    
    return () => { isMounted = false };
  }, [tradeItem]);

  const getMyItemsForTrade = () => {
    axios.get("https://damp-fjord-26738.herokuapp.com/api/userstore/trades/" + userStore, config)
            .then (res => {
                setMyTradeItems(res.data.itemsForTrade.filter(item => item.status === 'NoOffers'))
            }).catch(e => console.log(e.message))
  }

  const makeOffer = async (offeredItemId) => {
    const tradedItemId = tradeItem._id;
    try {
        const res = await axios.post("https://damp-fjord-26738.herokuapp.com/api/tradeitems/make-offer",
          {
            tradedItemId: tradedItemId,
            offeredItemId: offeredItemId
          }
        );
      setToastSeverity('success');
      setToastSummary('Success!');
      setToastDetail('Trade offer made successfully!');
      setIsToastDisplayed(true);
    } catch(e) {
      setToastSeverity('error');
      setToastSummary('Error!');
      setToastDetail('There was an error making the trade offer!');
      setIsToastDisplayed(true);
    }
   
  }

  return (
    <>
      <NavBar/>
      {isToastDisplayed && <Toast ref={toast}/>}
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
                <h3>Trade Item: {tradeItem.name}</h3>
                <p>Approximate market value: ${tradeItem.approximateMarketVal} </p>
              </div>
              <div className="right_side">
                <h5>Date Listed: {date} </h5>
              </div>
            </section>
            <section className="make_trade">
              <div className="make_trade_left">
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
                  <h5 className="center">My Items Available for Trade</h5>
                </div>
                {myTradeItems.map(item => {
                    if(item.status === 'NoOffers') {
                        return <div className="my_trade_item" key={item.name}>
                          <img src={imgUrl + item.image} alt={item.name + ' photo'} className="my_trade_offer_photo"/>
                          <div className="my_trade_item_text">
                            <p>{item.name}</p>
                          </div>
                          <div className="my_trade_item_btn">
                            <button className="make_offer_btn" onClick={() => makeOffer(item._id)}>Offer As Trade</button>
                          </div>
                        </div>
                    }
                    
                }
                )}
              </div>
            </section>
        </div>
      </div>
    </>
  );
}

export default MakeTradeOffer;