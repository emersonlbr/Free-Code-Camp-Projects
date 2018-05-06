import React, { Component } from 'react';
import marked from 'marked';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '# some really interesting text on here'

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <textarea
          className="TextArea"
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />

        <Result text={this.state.text} />
      </div>
    );
  }
}

const Result = (props) => {
  // const { text } = props;
  const markedown = marked(props.text);
  return (
    <div
      className="Result"
      dangerouslySetInnerHTML={{__html: markedown }}
    />
  );
};

export default App;
