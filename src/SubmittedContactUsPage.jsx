import { Component } from 'react';
import './SubmittedContactUsPage.css';

class SubmittedContactUsPage extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
          <div className="SubmittedContactUsPage">
              <h1 style={this.props.applyStylesFxn(40, "Nunito Sans")}>Thank you for your interest in PIE!</h1>
              <p style={this.props.applyStylesFxn(24, "Nunito Sans")}>We have received your contact information. We will be in touch with you as soon as we can!</p>
              <button className="OKButton" style={this.props.applyStylesFxn(24, "Nunito Sans")} onClick={event => {
                  this.props.showPageFxn(event, "LandingPage");
              }}>OK</button>
          </div>
      );
    }
  }
  
  export default SubmittedContactUsPage;
  