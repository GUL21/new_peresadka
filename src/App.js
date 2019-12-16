import React from 'react';
import logo from './img/Logo.png';
import Form from './components/Form.js';
import Choose from './components/Choose.js';
import List from './components/List.js';
import './components/Form.css';

function App() {
    
  return (
    <>
    <img src={logo} alt="Logo" />
    <Form />
    <Choose /><br />
    <List key="1" />
    <List key="2" />
    <List key="3" />
    <List key="4" />
    <List key="5" />
    
    </>
  );
}

export default App;
