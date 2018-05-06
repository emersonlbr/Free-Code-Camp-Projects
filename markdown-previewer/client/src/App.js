import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text: 'write your text here'
  }

  onChange() {
    
  }
 
  render() {
   
    return (
      <div className="App">
        <textarea  className='TextArea' type="text" />
        <Result text={this.state.text}/>
      </div>
    );
  }
}

const Result = props => {
  return (
    <div>
      <textarea className='TextArea' value={props.text}/>
    </div>
  )
}

export default App;
