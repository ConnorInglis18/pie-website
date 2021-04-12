import { Component } from 'react';
import './PartnersPage.css';
import {partnersJSON} from "./backend/partnerInfoJSON";

class PartnersPage extends Component {
  render() {
    return (
      <div className="PartnersPage">
        {partnersJSON.map(partner => {
          return (
            <div className="PartnerComponent">
              <img className="PartnerImage" src={partner.imgSrc} alt="PIE Partner" />
              <p className="PartnerName">{partner.name}</p>
              <p className="PartnerDescription">{partner.description}</p>
              <a href={partner.websiteUrl}>View Website</a>
            </div>
          )
        })}
      </div>
    );
  }
}

export default PartnersPage;
