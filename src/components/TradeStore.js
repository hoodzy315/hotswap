import NavBar from "./Navbar";
import SearchStore from "./SearchStore";
import { Link } from "react-router-dom";
import ShowSearchItems from "./ShowSearchItems";

/**
 * Author: Joe Woods
 * This component is the layout for adding an item
 */

export default function TradeStore() {
    const sr = null;
    const searched = false;
    
    return (
        <>
            {/*Navbar component*/}
            <NavBar />
            {/*Wrapper and buttons for account nav*/}
            <div className="wrapper">
                <div className="buttonColumn">
                    <Link className ="btn btn-lg btn-danger center modal-button btnFormat2" to="/tradestore">Trade Store</Link> 
                    <button className="btn btn-lg btn-danger center modal-button btnFormat2" type="button">Prior Trades</button>
                    <button className="btn btn-lg btn-danger center modal-button btnFormat2" type="button">Notifications</button>
                    <Link className ="btn btn-lg btn-danger center modal-button btnFormat2" to="/settings">Settings</Link> 
                </div>
                <div className="contentColumn">
                    <SearchStore sr={sr} searched={searched}/>
                    <ShowSearchItems sr={sr} searched={searched}/>
                </div>
            </div>
        </>
    );
}