import React from "react";
import reactDom from "react-dom";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import "./index.css";
reactDom.render(<CounterApp value={12} />, document.getElementById("root"));
