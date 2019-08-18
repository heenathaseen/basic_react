import React from 'react';
import './app.css';
import Color from './Color';
import Counter from './Counter';


const App = () => (
  <div className="app">
    <p>hello</p>
    <Counter count="0" />


    <Color title="red" />
    <Color title="green" />
    <Color title="blue" />

  </div>

);
export default App;
