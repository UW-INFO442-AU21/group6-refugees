import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Group from './group';
import Orgs from './orgs';
import Group_MyGroup from './group_mygroup';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Group/>
    <Orgs />
    <Group_MyGroup/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
