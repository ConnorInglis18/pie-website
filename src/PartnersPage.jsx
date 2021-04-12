import { Component } from 'react';
import './PartnersPage.css';
import {partnersJSON} from "./backend/partnerInfoJSON";
// import michiganmarchingband from "./UM-Marching-Band.png"

class PartnersPage extends Component {
  shortenedDescription = (name, description) => {
    if (description.length < 120) {
      return description + "..."
    }
    if (description.length < 220) {
      return description.substring(0, description.length) + "..."
    }
    if (name.length < 25) {
      return description.substring(0, 220) + "..."
    } else {
      return description.substring(0, 120) + "..."
    }
    
  }

  render() {
    return (
      <div className="PartnersPage">
        {partnersJSON.map((partner, index) => {
          if (index % 2 === 0) {
            return (
              <button className="PartnerComponent Left">
                <img className="PartnerImage" src={partner.imgSrc} alt="PIE Partner" />
                <div className="PartnerInfo">
                  <p className="PartnerName">{partner.name}</p>
                  <p className="PartnerDescription">{this.shortenedDescription(partner.name, partner.description)}</p>
                </div>
              </button>
            )
          } else {
            return (
              <button className="PartnerComponent Right">
                <div className="PartnerInfo">
                  <p className="PartnerName">{partner.name}</p>
                  <p className="PartnerDescription">{this.shortenedDescription(partner.name, partner.description)}</p>
                </div>
                <img className="PartnerImage" src={partner.imgSrc} alt="PIE Partner" />
              </button>
            )
          }
        })}
      </div>
    );
  }
}

export default PartnersPage;
