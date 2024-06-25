import React from "react";
import ReactDOM from "react-dom";

const firstCode = React.createElement("h1",{},"Hello world");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(firstCode);