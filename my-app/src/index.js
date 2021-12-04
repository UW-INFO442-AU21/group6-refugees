import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { NavBar } from './navbar';
import Home from './home';
import Learn from './learn';
import Group from './group';
import Orgs from './orgs';
import GroupMygroup from './group_mygroup';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route path="/group" element={<Group />}></Route>
        <Route path ="/orgs" element={<Orgs />}></Route>
      </Routes>
      <GroupMygroup/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
