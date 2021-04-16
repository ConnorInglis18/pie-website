import { Component } from 'react';
import './App.css';
import JoinPage from './JoinPage';
import LandingPage from './LandingPage';
import PartnersPage from './PartnersPage';
import ContactPage from './ContactPage';
import Header from './Header';
import SubmittedJoinPage from './SubmittedJoinPage';
import SubmittedContactUsPage from './SubmittedContactUsPage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      curPage: "LandingPage",
      showAccessMenu: false,
      minimizedAccessMenu: false,
      isDyslexicFont: false,
      fontMultiplier: 1,
      fontLevel: 1
    }
  }

  applyStyles = (defaultFontSize, defaultFont) => {
    return {
        "font-family": this.state.isDyslexicFont ? "OpenDyslexic2" : defaultFont,
        "font-size": this.state.fontMultiplier * defaultFontSize + "px"
    }
  }

  minimizeAccessibility = (e) => {
    e.preventDefault();
    console.log("minimizing access menu");
    this.setState({
      minimizedAccessMenu: true
    })
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
      showAccessMenu: true,
      minimizedAccessMenu: false,
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
    console.log("+font");
    if (this.state.fontLevel >= 4) {
      this.setState({
        fontMultiplier: 1,
        fontLevel: 1
      });
    } else {
      this.setState({
        fontMultiplier: 0.15 + this.state.fontMultiplier,
        fontLevel: 1 + this.state.fontLevel
      });
    }
  }

  toggleDyslexic = (e) => {
    e.preventDefault();
    console.log("toggle dyslexic");
    this.setState({
      isDyslexicFont: !this.state.isDyslexicFont
    });
  }

  render() {
    return (
      <div className={this.state.isDyslexicFont ? "App dyslexic" : "App notDyslexic"}>
        <Header showPageFxn={this.showPage} applyStylesFxn={this.applyStyles}/>
        <div id="pageContent">
          {(() => {
          switch (this.state.curPage) {
            case "LandingPage":
              return <LandingPage showPageFxn={this.showPage} applyStylesFxn={this.applyStyles}/>;
            case "PartnersPage":
              return <PartnersPage applyStylesFxn={this.applyStyles}/>;
            case "JoinPage":
              return <JoinPage showPageFxn={this.showPage} applyStylesFxn={this.applyStyles}/>;
            case "ContactPage":
              return <ContactPage showPageFxn={this.showPage} applyStylesFxn={this.applyStyles}/>;
            case "SubmittedJoinPage":
              return <SubmittedJoinPage showPageFxn={this.showPage} applyStylesFxn={this.applyStyles}/>;
            case "SubmittedContactUsPage":
              return <SubmittedContactUsPage showPageFxn={this.showPage} applyStylesFxn={this.applyStyles}/>;
            default:
              return <LandingPage showPageFxn={this.showPage} applyStylesFxn={this.applyStyles}/>;
          }
        })()}
        </div>
        {this.state.showAccessMenu ?
          <div id="accessibilityContent">
            <div id="accessibilityText" style={{"font-family": this.state.isDyslexicFont ? "OpenDyslexic2" : "Nunito Sans"}}>Accessibility Menu</div>
            <div id="accessibilityBtnSection">
              <button 
                className="accessibilityBtn"
                id="increaseFontBtn" 
                style={{
                  "font-family": this.state.isDyslexicFont ? "OpenDyslexic2" : "Nunito Sans"
                }}
                onClick={this.increaseFont}>
                Increase Font
                <div className="toggleContainer">
                  <div className="toggleIndicator" style={{"background-color": this.state.fontLevel === 1 ? "#131516" : "#c4c4c4"}}></div>
                  <div className="toggleIndicator" style={{"background-color": this.state.fontLevel === 2 ? "#131516" : "#c4c4c4"}}></div>
                  <div className="toggleIndicator" style={{"background-color": this.state.fontLevel === 3 ? "#131516" : "#c4c4c4"}}></div>
                  <div className="toggleIndicator" style={{"background-color": this.state.fontLevel === 4 ? "#131516" : "#c4c4c4"}}></div>
                </div>
              </button>
              <button 
                className="accessibilityBtn" 
                id="dyslexiaFont" 
                onClick={this.toggleDyslexic}>
                Dyslexic Font
                <div className="toggleContainer">
                  <div className="toggleIndicator" style={{"background-color": this.state.isDyslexicFont ? "#c4c4c4" : "#131516"}}></div>
                  <div className="toggleIndicator" style={{"background-color": this.state.isDyslexicFont ? "#131516" : "#c4c4c4"}}></div>
                </div>
              </button>
            </div>
            <div>
              <button id="hideAccessBtn" style={{"font-family": this.state.isDyslexicFont ? "OpenDyslexic2" : "Nunito Sans"}} onClick={this.hideAccessibilityMenu}>Close</button>
              {/* <button id="hideAccessBtn" style={{"font-family": this.state.isDyslexicFont ? "OpenDyslexic2" : "Nunito Sans"}} onClick={this.hideAccessibilityMenu}>Close and Minimize</button> */}
            </div>
          </div>
          : <div id="closedAccessibilityContent">
            {this.state.minimizedAccessMenu ?
              <div>
                <button id="showAccessBtnSmall" style={{"font-family": this.state.isDyslexicFont ? "OpenDyslexic2" : "Nunito Sans"}} onClick={this.showAccessibilityMenu}>Accessibility Menu</button>
              </div>
              : <div>
                <button id="showAccessBtnLarge" style={{"font-family": this.state.isDyslexicFont ? "OpenDyslexic2" : "Nunito Sans"}} onClick={this.showAccessibilityMenu}>Accessibility Menu</button>
                <button id="minimizeAccessButton" onClick={this.minimizeAccessibility}>-</button>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

export default App;
