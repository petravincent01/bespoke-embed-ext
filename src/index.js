import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import App from './SnakeApp';
import reportWebVitals from './reportWebVitals';
import './index.css';
//import './mckinsey.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  document.querySelector(".main-copy").classList.remove("text-longform")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
