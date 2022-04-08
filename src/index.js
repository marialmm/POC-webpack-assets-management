import React from "react";
import ReactDOM from "react-dom";

import "./assets/style.css";
import webpackLogo from "./assets/webpack.jpg";

function App(){
    return(
        <>
            <h1>Eu sou uma POC sobre webpack!</h1>
            <img src={webpackLogo} />
        </>
    )
}

const root = document.querySelector(".root");

ReactDOM.render(<App />, root);