import { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="Header">
            <button className="homePage" onClick={event => {
                this.props.showPageFxn(event, "LandingPage");
            }}>
                <img className="michiganLogo" src={"https://brand.umich.edu/assets/brand/style-guide/logo-guidelines/Block_M-Hex.png"} alt="University of Michigan Logo"/>
                <h1 className="title">|</h1>
                <h1 className="title">PIE</h1>
            </button>
            <div>
                <button className="partnersButton" onClick={event => {
                    this.props.showPageFxn(event, "PartnersPage");
                }}>
                    Our Partners
                </button>
                <button className="contactButton" onClick={event => {
                    this.props.showPageFxn(event, "ContactPage");
                }}>
                    Contact Us
                </button>
            </div>
            <div className="joinWrapper">
                <button className="joinButton" onClick={event => {
                    this.props.showPageFxn(event, "JoinPage");
                }}>
                    Join PIE
                </button>
            </div>
        </div>
    );
  }
}

export default Header;
