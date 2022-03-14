import React from "react";
import ReactDOM from "react-dom";

// code doesnt work as JSX reads everything between tags as text
const calculate=<p>2+3</p>

// solution is wrap code in {} curly braces
const calculate=<p>{2+3}</p>

