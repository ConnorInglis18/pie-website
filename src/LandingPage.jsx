import { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="LandingPage">
        <p>Welcome To Partners In Excellence, but you can call us PIE. PIE is a collaborative effort between disabled and non-disabled stakeholders from the Adaptive Sports & Fitness Program and the Office of Services for Students with Disabilities at the University of Michigan. Through the use of our growing number of Partners, we strive to help Accessability for everyone</p>
        <button className="viewPartners" onClick={event => {
          this.props.showPageFxn(event, "PartnersPage")
        }}>
        VIEW OUR PARTNERS
        </button>
    </div>
    );
  }
}

export default LandingPage;
