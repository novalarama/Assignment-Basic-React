import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bmi from './pages/Bmi';
import Cicilan from './pages/Cicilan';
import Belanja from './pages/Belanja';
import reportWebVitals from './reportWebVitals';

// load library bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle"

ReactDOM.render(
  <React.StrictMode>
    <Bmi />
    {/* <Cicilan />
    <Belanja /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
