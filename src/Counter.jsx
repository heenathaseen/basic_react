import React from 'react';

class Counter extends React.Component{
  state ={
    count:0
  }
  increment =() => {
    this.setState(({count})=>({count:count+1}))
  };
  minus =()=> {
    this.setState(({count})=> ({count:count -1}))
  };
  render(){
    const {title}=this.props;
    const{count}=this.state;
    return(
     <div className="counter">
       <h3>{title}</h3>
        <button type="button" onClick={this.increment}>+</button>
        <p>{count}</p>
        <button type="button" onClick={this.minus}>-</button>
     </div>

    );
  }

}

export default Counter;