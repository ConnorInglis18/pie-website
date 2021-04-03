import { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      curPage: "LandingPage"
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
        <LandingPage/>
      </div>
    );
  }
}

export default App;
