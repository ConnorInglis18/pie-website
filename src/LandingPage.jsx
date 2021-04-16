import { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LandingPage">
          <p style={this.props.applyStylesFxn(48, "Nunito Sans")}>Welcome To Partners In Excellence, but you can call us PIE. PIE is a collaborative effort between people who have any disability and supportive partners who strive to make their community inclusive for all. PIE was created by the Adaptive Sports & Fitness Program and the Office of Services for Students with Disabilities at the University of Michigan. Through the use of our growing number of Partners, we strive to improve Accessibility for everyone.</p>
          <button
            className="viewPartners"
            style={this.props.applyStylesFxn(24, "Nunito Sans")}
            onClick={event => {
              this.props.showPageFxn(event, "PartnersPage")
            }}
          >
            VIEW OUR PARTNERS
          </button>
      </div>
    );
  }
}

export default LandingPage;
