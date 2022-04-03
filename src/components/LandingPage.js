
import Navbar from "./Navbar";
import Main from "./Main";
import Container from "./Container";
import Login from "./Login";

import { useContext, useEffect, useRef } from 'react';
import ToastContext from '../context/ToastContext';
import { Toast } from 'primereact/toast';
 

/**
 * Author: Joe Woods
 * This component handles the landing page layout
 */
//setup trigger button text
const triggerText = "Sign Up";

//All this component does is export a component with the nav, main, the trigger button and the login message
const LandingPage = () => {
        const { 
          isToastDisplayed, 
          toastSummary, 
          toastDetail, 
          toastSeverity,
          setIsToastDisplayed
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

        return (
            <div>
                <Navbar/>
                {isToastDisplayed && <Toast ref={toast}/>}
                <Main />
                <div className="loginform">
                  <Container triggerText={triggerText}/>
                </div>
                <Login />
            </div>
        );
    
}

export default LandingPage;