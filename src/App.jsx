import React from 'react';
import './app.css';

const Color = ({ title }) => (
  <div
    className="color"
    style={{ background: title }}
  >
    <p>{title}</p>
  </div>
);


const App = () => (
  <div className="app">
    <p>hello</p>
    <Color title="red" />
    <Color title="green" />
    <Color title="blue" />

  </div>

);
export default App;
