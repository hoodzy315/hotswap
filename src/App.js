import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Container from "./components/Container";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";


const App = () => {
    const triggerText = 'Sign Up';
    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    };

    return (
        <div>
            <Routes>
                <Route path='/' element={<><Navbar/><Main/><div className="loginform"><Container triggerText={triggerText} onSubmit={onSubmit} /></div><Login/></>}/>
                <Route path='/about' element={<><Navbar/><About/></>}/>
                <Route path='/contactus' element={<><Navbar/><ContactUs/></>}/>    
            </Routes>
        </div>
    );
};

export default App;