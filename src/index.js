import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css"
import App from "./App"

function Page (){
    return (
        <div>
            <App />
            <h1>Hey !am running </h1>
        </div>

    );
}
ReactDOM.render(<Page /> , document.getElementById("root"))