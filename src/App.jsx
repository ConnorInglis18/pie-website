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
      curPage: "LandingPage",
      showAccessMenu: false
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

  showAccessibilityMenu = (e) => {
    console.log("open accessibility menu");
    e.preventDefault();
    this.setState({
      showAccessMenu: true
    });
  }

  hideAccessibilityMenu = (e) => {
    console.log("hide accessibility menu");
    e.preventDefault();
    this.setState({
      showAccessMenu: false
    });
  }

  increaseFont = (e) => {
    e.preventDefault();
    alert("+font");
  }

  decreaseFont = (e) => {
    e.preventDefault();
    alert("-font");
  }

  toDyslexic = (e) => {
    e.preventDefault();
    alert("to dyslexic");
  }

  fromDyslexic = (e) => {
    e.preventDefault();
    alert("from dyslexic");
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
        {this.state.showAccessMenu ?
          <div id="accessibilityContent">
            <div id="accessibilityText">Accessibility Menu</div>
            <div id="accessibilityBtnSection">
              <button class="accessibilityBtn" id="increaseFontBtn" onClick={this.increaseFont}>+Font</button>
              <button class="accessibilityBtn" id="decreaseFontBtn" onClick={this.decreaseFont}>-Font</button>
              <button class="accessibilityBtn" id="dyslexiaFont" onClick={this.toDyslexic}>To Dyslexic</button>
              <button class="accessibilityBtn" id="standardFont" onClick={this.fromDyslexic}>From Dyslexic</button>
            </div>
            <button id="hideAccessBtn" onClick={this.hideAccessibilityMenu}>Close</button>
          </div>
          : <button id="showAccessBtn" onClick={this.showAccessibilityMenu}>Accessibility Menu</button>
        }
      </div>
    );
  }
}

export default App;
