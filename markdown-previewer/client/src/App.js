import React, { Component } from 'react';
import marked from 'marked';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
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
