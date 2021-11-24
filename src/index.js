import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter} from  "react-router-dom"
import './index.css';
import App from './App';
import "./assets/css/reset.css"
import "antd/dist/antd.css";
import {Provider} from 'react-redux'
import store from "./store"

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
