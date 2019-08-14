import React from 'react';
import './app.css';

const Red = ({ title }) => (
  <div
    className="red"
    style={{ background: title }}
  >
    <p>{title}</p>
  </div>
);

const Green = ({ title }) => (
  <div
    className="green"
    style={{ background: title }}
  >
    <p>{title}</p>
  </div>
);

const Blue = ({ title }) => (
  <div
    className="blue"
    style={{ background: title }}
  >
    <p>{title}</p>
  </div>
);


const App = () => (
  <div className="app">
    <p>hello</p>
    <Red title="red" />
    <Green title="green" />
    <Blue title="blue" />

  </div>

);
export default App;
