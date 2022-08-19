import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter,HashRouter } from 'react-router-dom';

// BrowserRouter 路徑間"不會"有#字號，當部屬到GitHub pages後，會導致檔案路徑找不到問題
// HashRouter 路徑會"有"個#字號，解決檔案部屬後檔案路徑問題。

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
