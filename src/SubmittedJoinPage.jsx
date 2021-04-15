import { Component } from 'react';
import './SubmittedJoinPage.css';

class SubmittedJoinPage extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
          <div className="SubmittedJoinPage">
              <h1 style={this.props.applyStylesFxn(40, "Nunito Sans")}>Thank you for your interest in becoming a piece of the PIE!</h1>
              <p style={this.props.applyStylesFxn(24, "Nunito Sans")}>Your form has been submitted. We will be in touch with you as soon as we can!</p>
              <button className="OKButton" style={this.props.applyStylesFxn(24, "Nunito Sans")} onClick={event => {
                  this.props.showPageFxn(event, "LandingPage");
              }}>OK</button>
          </div>
      );
    }
  }
  
  export default SubmittedJoinPage;
  