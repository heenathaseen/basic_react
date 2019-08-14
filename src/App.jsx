import React from 'react';
import './app.css';

const Red = ({ title, bg }) => (
  <div
    className="red"
    style={{ background: bg }}
  >
    <p>{title}</p>
  </div>
);

const Green = ({ title, bg }) => (
  <div
    className="green"
    style={{ background: bg }}
  >
    <p>{title}</p>
  </div>
);

const Blue = ({ title, bg }) => (
  <div
    className="blue"
    style={{ background: bg }}
  >
    <p>{title}</p>
  </div>
);


const App = () => (
  <div className="app">
    <p>hello</p>
    <Red title="red" bg="red" />
    <Green title="green" bg="green" />
    <Blue title="blue" bg="blue" />

  </div>

);
export default App;
