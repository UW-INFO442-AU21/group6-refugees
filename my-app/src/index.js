import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Group from './group';
import Orgs from './orgs';
import GroupMygroup from './group_mygroup';
import GForm from './form';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Group/>
    <Orgs />
    <GroupMygroup/>
    <GForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
