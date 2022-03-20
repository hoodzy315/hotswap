import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Container from "./components/Container"




const App = () => {
    const triggerText = 'Open form';
    const onSubmit = (event) => {
      event.preventDefault(event);
      console.log(event.target.name.value);
      console.log(event.target.email.value);
    };
    return(
        <div>
            <Navbar/>
            <Main/>
            <Container triggerText={triggerText} onSubmit={onSubmit}/>
        </div>
    );
};

export default App;