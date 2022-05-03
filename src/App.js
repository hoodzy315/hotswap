import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import LoggedIn from "./components/LoggedIn";
import LandingPage from "./components/LandingPage";
import AddItem from "./components/AddItem";
import Settings from "./components/Settings";
import TradeStore from "./components/TradeStore";
import MakeTradeOffer from "./components/MakeTradeOffer";
import ViewOffers from './components/ViewOffers';

import { Routes, Route } from "react-router-dom";

//Provider for displaying Toast messages
import { ToastProvider } from './context/ToastContext';

//Allows us to change head HTML tag, such as the document title
import { Helmet } from 'react-helmet';

//PrimeReact css
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 


export const AuthContext = React.createContext();
const initialState = {
    isAuthenticated: false,
    user: null,
    userId: null,
    userStore: null,
    token: null,
    searched: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("userId", JSON.stringify(action.payload.userId));
            localStorage.setItem("userStore", JSON.stringify(action.payload.userStore));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                userId: action.payload.userId,
                userStore: action.payload.userStore,
                token: action.payload.token
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
}


const App = () => {
    
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <AuthContext.Provider
        value={{
            state,
            dispatch
        }}>
        <Helmet>
          <title>HotSwap.it</title>
        </Helmet>
        <div>
            <ToastProvider>
              <Routes>
                  <Route path='/' element={!state.isAuthenticated ? <LandingPage/> : <LoggedIn/>}/>
                  <Route path='/about' element={<><Navbar /><About /></>} />
                  <Route path='/contactus' element={<><Navbar /><ContactUs /></>} />
                  <Route path='/additem' element={!state.isAuthenticated ? <LandingPage/> : <AddItem/>}/>
                  <Route path='/settings' element={!state.isAuthenticated ? <LandingPage/> : <Settings/>}/>
                  <Route path='/tradestore' element={!state.isAuthenticated ? <LandingPage/> : <TradeStore/>}/>
                  <Route path='/make-trade-offer' element={!state.isAuthenticated ? <LandingPage/> : <MakeTradeOffer/>}/>
                  <Route path='/view-offers' element={!state.isAuthenticated ? <LandingPage/> : <ViewOffers/>}/>
              </Routes>
            </ToastProvider>
        </div>
        </AuthContext.Provider>
    );
};

export default App;