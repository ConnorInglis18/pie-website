import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  buttonClick = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button name="testButton" onClick={(e) => this.buttonClick(e)}>
            Click Me and Check the Console
          </button>
          <button name="testButton2" onClick={(e) => this.buttonClick(e)}>
            Click Me and Check the Console
          </button>
          <p>Counter: {this.state.counter}</p>
        </header>
      </div>
    );
  }
}

export default App;
