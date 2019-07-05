import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    foobar: '123'
  }

  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    console.log("didMount");
    console.log(this.state);
  }

  onButtonClicked = () => {
    console.log('foobar');
  }

  render = () => {
    return (
      <div className="App">
        <button onClick={ this.onButtonClicked }>Click Me!</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
