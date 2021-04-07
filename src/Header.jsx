import { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="Header">
        <button name="homePage" onClick={event => {
            this.props.showPageFxn(event, "LandingPage");
        }}>
            home
        </button>
        <button name="partnersPage" onClick={event => {
            this.props.showPageFxn(event, "PartnersPage");
        }}>
            partners
        </button>
        <button name="joinPage" onClick={event => {
            this.props.showPageFxn(event, "JoinPage");
        }}>
            join
        </button>
        <button name="contactPage" onClick={event => {
            this.props.showPageFxn(event, "ContactPage");
        }}>
            contact
        </button>
    </div>
    );
  }
}

export default Header;
