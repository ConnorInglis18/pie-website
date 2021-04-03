import { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import PartnersPage from './PartnersPage';

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

  showPartners = (e) => {
    // e.preventDefault();
    // console.log(e.target.name);
    console.log("hey there");
    this.setState({
      curPage: "PartnersPage"
    })
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.curPage == "LandingPage" ? <LandingPage showPartnersFxn={this.showPartners}/> : <PartnersPage/>} */}
        {(() => {
          switch (this.state.curPage) {
            case "LandingPage":
              return <LandingPage showPartnersFxn={this.showPartners}/>;
            case "PartnersPage":
              return <PartnersPage/>;
            default:
              return <LandingPage showPartnersFxn={this.showPartners}/>;
          }
        })()}
      </div>
    );
  }
}

export default App;
