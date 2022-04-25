import NavBar from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MakeTradeOffer = () => {
  const location = useLocation();
  const [item, setItem] = useState({});
  const [date, setDate] = useState('');

  useEffect(() => { 
    let isMounted = true;
    if(isMounted) {
      const data = location.state;
      setItem(data);
      const datePosted = new Date(item.datePosted);
      const localeDate = datePosted.toLocaleDateString();
      setDate(localeDate);
    }
    
    return () => { isMounted = false };
  }, [])

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
                <h2>Trade Item: {item.name}</h2>
                <p>Approximate market value: ${item.approximateMarketVal} </p>
              </div>
              <div className="right_side">
                <h5>Date Listed: {date} </h5>
              </div>
            </section>
        </div>
      </div>
    </>
  );
}

export default MakeTradeOffer;