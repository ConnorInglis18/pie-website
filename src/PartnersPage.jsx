import { Component } from 'react';
import './PartnersPage.css';
import {partnersJSON} from "./backend/partnerInfoJSON";
// import michiganmarchingband from "./UM-Marching-Band.png"

class PartnersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidePanel: false,
      selectedIdx: 0,
      searchTerm: "",
      sidePanelPartner: {}
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

  showSidePanel = (e, partner) => {
    e.preventDefault();
    this.setState({
      showSidePanel: true,
      sidePanelPartner: partner
    })
  }

  closePanel = (e) => {
    e.preventDefault();
    this.setState({
      showSidePanel: false,
    })
  }

  removeSearchItem = (e, searchForm) => {
    e.preventDefault();
    searchForm.value = "";
    this.setState({
      searchTerm: ""
    });
  }

  submitQuestion = (e, searchTerm) => {
    e.preventDefault();
    console.log(searchTerm.value)
    this.setState({
      searchTerm: searchTerm.value
    });
  }

  render() {
    return (
      <div className="PartnersPage">
        <div className="PartnersPageContent">
          <div className="SearchContainer">
            <button className="SearchButton" style={this.props.applyStylesFxn(24, "Nunito Sans")}  onClick={(event) => this.submitQuestion(event, document.getElementById("SearchPartner"))}>Search</button>
            <div className="SearchBarContainer">
              <form type="submit" onSubmit={(event) => this.submitQuestion(event, document.getElementById("SearchPartner"))}>
                <input
                  id="SearchPartner"
                  name="SearchPartner"
                  type="text"
                  placeholder="Search..."
                  style={this.props.applyStylesFxn(24, "Nunito Sans")}
                />
              </form>
              <button className="SearchClose" onClick={event => this.removeSearchItem(event, document.getElementById("SearchPartner"))}>X</button>
            </div>
          </div>
          <div className="PartnersPageList">
            {/* If the search term is empty, we always want to return everything, if it is not, then we want to return only partners whos name include the search term */}
            {partnersJSON.filter(partner => !this.state.searchTerm.length || partner.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map((partner, index) => {
              if (index % 2 === 0) {
                return (
                  <button key={index} className="PartnerComponent Left" onClick={(e) => this.showSidePanel(e, partner)}>
                    <img className="PartnerImage" src={partner.imgSrc} alt="PIE Partner" />
                    <div className="PartnerInfo">
                      <p style={this.props.applyStylesFxn(48, "IBM Plex Sans Condensed")} className="PartnerName">{partner.name}</p>
                      <p style={this.props.applyStylesFxn(24, "Nunito Sans")} className="PartnerDescription">{this.shortenedDescription(partner.name, partner.description)}</p>
                    </div>
                  </button>
                )
              } else {
                return (
                  <button style={this.props.applyStylesFxn(24, "Nunito Sans")} key={index} className="PartnerComponent Right" onClick={(e) => this.showSidePanel(e, partner)}>
                    <div className="PartnerInfo">
                      <p style={this.props.applyStylesFxn(48, "IBM Plex Sans Condensed")} className="PartnerName">{partner.name}</p>
                      <p style={this.props.applyStylesFxn(24, "Nunito Sans")} className="PartnerDescription">{this.shortenedDescription(partner.name, partner.description)}</p>
                    </div>
                    <img className="PartnerImage" src={partner.imgSrc} alt="PIE Partner" />
                  </button>
                )
              }
            })}
          </div>
        </div>
        {this.state.showSidePanel ?
          <div id="PartnerSidePanel">
            <button id="PartnerSideClose" onClick={this.closePanel}>X</button>
            <img id="PartnerSideImage" src={this.state.sidePanelPartner.imgSrc} alt="PIE Partner" />
            <div id="PartnerSideInfo">
              <p style={this.props.applyStylesFxn(48, "IBM Plex Sans Condensed")} id="PartnerSideName">{this.state.sidePanelPartner.name}</p>
              <p style={this.props.applyStylesFxn(24, "Nunito Sans")} id="PartnerSideDescription">{this.state.sidePanelPartner.description}</p>
              <a style={this.props.applyStylesFxn(24, "Nunito Sans")} id="PartnerSideViewWebsite" href={this.state.sidePanelPartner.websiteUrl} target="_blank">View Website</a>
            </div>
          </div> : <div></div>
        }
      </div>
      
    );
  }
}

export default PartnersPage;
