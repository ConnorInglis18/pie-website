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

  componentDidMount = () => {
    window.scrollTo(0,0);
  }

  showPage = (e, pageType) => {
    e.preventDefault();
    console.log("switching to " + pageType);
    this.setState({
      curPage: pageType
    })
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div className="App">
        <Header showPageFxn={this.showPage}/>
        <div id="pageContent">
          {(() => {
          switch (this.state.curPage) {
            case "LandingPage":
              return <LandingPage showPageFxn={this.showPage}/>;
            case "PartnersPage":
              return <PartnersPage/>;
            case "JoinPage":
              return <JoinPage showPageFxn={this.showPage}/>;
            case "ContactPage":
              return <ContactPage showPageFxn={this.showPage}/>;
            default:
              return <LandingPage showPageFxn={this.showPage}/>;
          }
        })()}
        </div>
      </div>
    );
  }
}

export default App;
