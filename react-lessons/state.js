class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);

    // initialize state here
    this.state = {
      name: 'emerson'
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

// these is the best way to add new thnings to your components
