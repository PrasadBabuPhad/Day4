import React from "react";
import ReactDOM from "react-dom/client";


const element= <h1>Hello coder Army</h1>


function greet(name){
    return <h2>Ram Ram Bhaiya ji {name}</h2>
};


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(element);
root.render(greet("Rohit"));