import React from "react"
import {Container} from "./Container";

import "../style.css";

export default function Main() {

    const triggerText = 'Open Form';
    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }

    return (
        <main>
            <h1 className="main--landing">HotSwap.it is the place to trade items with others online... for free!</h1>
            <Container triggerText={triggerText} onSubmit={onSubmit}/>
        </main>
    )
}