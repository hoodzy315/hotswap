import NavBar from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useContext, useRef } from 'react';
import {AuthContext} from '../App';
import axios from 'axios';

const ViewOffers = () => {
  const location = useLocation();
  const [tradeItem, setTradeItem] = useState({});
  const [date, setDate] = useState('');
  const [offers, setOffers] = useState([]);
  
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
    }
    
    return () => { isMounted = false };
  }, [tradeItem]);

  const acceptOffer = async (offeredItemId) => {
    //post the offeredItemId to tradeitems/accept-offer
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
    //TODO: Change UI to reflect successful or unsuccessful trade
    } catch(e) {
      
    }
  }

  const rejectOffer = () => {
    
  }

  return (
    <>
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
                  <h5 className="center">Trade Offers</h5>
                </div>
                {offers.map(item => {
                    return <div className="my_trade_item" key={item.name}>
                      <img src={imgUrl + item.image} alt={item.name + ' photo'} className="my_trade_offer_photo"/>
                      <div className="my_trade_item_text">
                        <p>{item.name}</p>
                      </div>
                      <div className="accept_or_reject">
                        <button onClick={() => acceptOffer(item._id)} className="make_offer_btn">Accept Offer</button>
                        <button onClick={rejectOffer} className="make_offer_btn">Reject Offer</button>
                      </div>
                    </div>    
                }
                )}
              </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default ViewOffers;

