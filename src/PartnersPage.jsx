import { Component } from 'react';
import './PartnersPage.css';
import {partnersJSON} from "./backend/partnerInfoJSON";
// import michiganmarchingband from "./UM-Marching-Band.png"

class PartnersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidePanel: false,
      selectedIdx: 0
    }
  }
  
  shortenedDescription = (name, description) => {
    if (description.length < 120) {
      return description + "..."
    }
    if (description.length < 220) {
      return description.substring(0, description.length) + "..."
    }
    if (name.length < 25) {
      return description.substring(0, 210) + "..."
    } else {
      return description.substring(0, 110) + "..."
    }
  }

  showSidePanel = (e, index) => {
    console.log("CLICKED " + index)
    e.preventDefault();
    this.setState({
      showSidePanel: true,
      selectedIdx: index
    })
  }

  closePanel = (e) => {
    e.preventDefault();
    this.setState({
      showSidePanel: false,
    })
  }

  render() {
    return (
      <div className="PartnersPage">
        <div className="PartnersPageList">
          {partnersJSON.map((partner, index) => {
            if (index % 2 === 0) {
              return (
                <button key={index} className="PartnerComponent Left" onClick={(e) => this.showSidePanel(e, index)}>
                  <img className="PartnerImage" src={partner.imgSrc} alt="PIE Partner" />
                  <div className="PartnerInfo">
                    <p className="PartnerName">{partner.name}</p>
                    <p className="PartnerDescription">{this.shortenedDescription(partner.name, partner.description)}</p>
                  </div>
                </button>
              )
            } else {
              return (
                <button key={index} className="PartnerComponent Right" onClick={(e) => this.showSidePanel(e, index)}>
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
        {this.state.showSidePanel ?
          <div id="PartnerSidePanel">
            <button id="PartnerSideClose" onClick={this.closePanel}>X</button>
            <img id="PartnerSideImage" src={partnersJSON[this.state.selectedIdx].imgSrc} alt="PIE Partner" />
            <div id="PartnerSideInfo">
              <p id="PartnerSideName">{partnersJSON[this.state.selectedIdx].name}</p>
              <p id="PartnerSideDescription">{partnersJSON[this.state.selectedIdx].description}</p>
              <a id="PartnerSideViewWebsite" href={partnersJSON[this.state.selectedIdx].websiteUrl} target="_blank">View Website</a>
            </div>
          </div> : <div></div>
        }
      </div>
      
    );
  }
}

export default PartnersPage;
