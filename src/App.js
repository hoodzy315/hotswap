import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import LoggedIn from "./components/LoggedIn";
import LandingPage from "./components/LandingPage";
import AddItem from "./components/AddItem";

import { Routes, Route } from "react-router-dom";


export const AuthContext = React.createContext();
const initialState = {
    isAuthenticated: false,
    user: null,
    userId: null,
    userStore: null,
    token: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("userId", JSON.stringify(action.payload.user));
            localStorage.setItem("userStore", JSON.stringify(action.payload.token));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            console.log(action.payload.token)
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
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
    const triggerText = 'Sign Up';
    
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <AuthContext.Provider
        value={{
            state,
            dispatch
        }}>
        <div>
            <Routes>
                <Route path='/' element={!state.isAuthenticated ? <LandingPage/> : <LoggedIn/>}/>
                <Route path='/about' element={<><Navbar /><About /></>} />
                <Route path='/contactus' element={<><Navbar /><ContactUs /></>} />
                <Route path='/additem' element={!state.isAuthenticated ? <LandingPage/> : <AddItem/>}/>
            </Routes>
        </div>
        </AuthContext.Provider>
    );
};

export default App;