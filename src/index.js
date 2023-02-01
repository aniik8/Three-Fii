import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'
import Main from './Main'
import {BrowserRouter} from "react-router-dom";
import ItemComponent from "./ItemComponent";
import App from './App';
import Component from './Component';

ReactDOM.render(<BrowserRouter><Component/></BrowserRouter>,document.getElementById('root'));
//reportWebVitals();
//<BrowserRouter>
//     <UsedEffect/>
//     <App/>
// </BrowserRouter>