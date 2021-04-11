import { Component } from 'react';
import './PartnersPage.css';
import background from "./images/ssd_photo.jpg"

class PartnersPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="PartnersPage">
        <div className="PartnerComponent">
          <img className="PartnerImage" src="./images/ssd_photo.jpg"></img>
          <p className="PartnerName">Services for Students with Disabilities</p>
          <p className="PartnerDescription">Description will go here</p>
        </div>
        <div className="PartnerComponent">
          <img className="PartnerImage" src="./images/ssd_photo.jpg"></img>
          <p className="PartnerName">Services for Students with Disabilities</p>
          <p className="PartnerDescription">Description will go here</p>
        </div>
        <div className="PartnerComponent">
          <img className="PartnerImage" src="./images/ssd_photo.jpg"></img>
          <p className="PartnerName">Services for Students with Disabilities</p>
          <p className="PartnerDescription">Description will go here</p>
        </div>
    </div>
    );
  }
}

export default PartnersPage;
