import { Component } from 'react';
import './App.css';
import JoinPage from './JoinPage';
import LandingPage from './LandingPage';
import PartnersPage from './PartnersPage';
import ContactPage from './ContactPage';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      curPage: "LandingPage"
    }
  }

  showPage = (e, pageType) => {
    e.preventDefault();
    console.log("switching to " + pageType);
    this.setState({
      curPage: pageType
    })
  }

  render() {
    return (
      <div className="App">
        <Header showPageFxn={this.showPage}/>
        {(() => {
          switch (this.state.curPage) {
            case "LandingPage":
              return <LandingPage showPageFxn={this.showPage}/>;
            case "PartnersPage":
              return <PartnersPage/>;
            case "JoinPage":
              return <JoinPage/>;
            case "ContactPage":
              return <ContactPage/>;
            default:
              return <LandingPage showPageFxn={this.showPage}/>;
          }
        })()}
      </div>
    );
  }
}

export default App;
