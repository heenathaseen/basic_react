import React from 'react';
import './app.css';

const Red = () => (
  <div className="red">
    <p>RED</p>
  </div>
);

const Green = () => (
  <div className="green">
    <p>green</p>
  </div>
);

const Blue = () => (
  <div className="blue">
    <p>blue</p>
  </div>
);


const App = () => (
  <div className="app">
    <p>hello</p>
    <Red />
    <Green />
    <Blue />

  </div>

);
export default App;
