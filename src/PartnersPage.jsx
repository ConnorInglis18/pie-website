import { Component } from 'react';
import './PartnersPage.css';

class PartnersPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="PartnersPage">
        <p>Partners Page</p>
        <button name="viewPartners">
        VIEW OUR PARTNERS
        </button>
    </div>
    );
  }
}

export default PartnersPage;
