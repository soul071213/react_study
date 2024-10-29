import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=>{
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
},1000);//1초 마다 새로 렌더링

reportWebVitals();
