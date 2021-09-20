import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/Main/User/index'
import reportWebVitals from './reportWebVitals';
import Routes from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom';
// Renderizando o component APP (com seus sub componenets e etc) em <div id="root"></div> do index.html
// Obs: Colocamos o <BrowserRouter> envolta de <App /> para que as rotas fiquem disponíveis no nosso APP todo
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
