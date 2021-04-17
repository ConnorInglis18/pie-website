import { Component } from 'react';
import './JoinPage.css';

class JoinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  isValidEmail = (email) => {
    return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  }

  // name, email, phoneNumber, and description are all forms,
  // to get the id
  submitRequest = (e, name, email, phoneNumber, description, websiteUrl, mentorContact) => {
    e.preventDefault()
    if (!this.isValidEmail(email.value)) {
      window.alert("You must enter a valid email");
      email.focus();
    } else {
      name.value = "";
      email.value = "";
      phoneNumber.value = "";
      description.value = "";
      websiteUrl.value = "";
      mentorContact.value = "";
      this.props.showPageFxn(e, "SubmittedJoinPage")
    }
  }

  render() {
    return (
      <div className="JoinPage">
        <p style={this.props.applyStylesFxn(24, "Nunito Sans")} id="JoinPageTopText">Join Partners In Excellence</p>
        <form style={this.props.applyStylesFxn(24, "Nunito Sans")} id="JoinForm" type="submit" onSubmit={(event) => this.submitRequest(
          event,
          document.getElementById("JoinName"),
          document.getElementById("JoinEmail"),
          document.getElementById("JoinPhoneNumber"),
          document.getElementById("JoinDescription"),
          document.getElementById("JoinWebsiteUrl"),
          document.getElementById("JoinMentorContact"),
        )}>
          <label>Name:</label>
          <input
            id="JoinName"
            name="JoinName"
            type="text"
            placeholder="John Doe"
            style={this.props.applyStylesFxn(24, "Nunito Sans")}
            required
          />
          <label>Email:</label>
          <input
            id="JoinEmail"
            name="JoinEmail"
            type="text"
            placeholder="johndoe@email.com"
            style={this.props.applyStylesFxn(24, "Nunito Sans")}
            required
          />
          <label>Phone Number (optional):</label>
          <input
            id="JoinPhoneNumber"
            name="JoinPhoneNumber"
            type="tel"
            placeholder="555-555-5555"
            pattern="^[0-9(). \-]+$"
            title="Invalid Phone Number"
            style={this.props.applyStylesFxn(24, "Nunito Sans")}
          />
          <label>Description:</label>
          <textarea
            id="JoinDescription"
            name="JoinDescription"
            type="text"
            placeholder="Please provide a description of you or your company and how you would contribute to the PIE. Users will be able to see this description..."
            cols="4"
            style={this.props.applyStylesFxn(24, "Nunito Sans")}
            required
          />
          <label>Website URL:</label>
          <input
            id="JoinWebsiteUrl"
            name="JoinWebsiteUrl"
            type="text"
            placeholder="www.mysite.com"
            style={this.props.applyStylesFxn(24, "Nunito Sans")}
            required
          />
          <label>Mentor Contact (Optional):</label>
          <input
            id="JoinMentorContact"
            name="JoinMentorContact"
            type="text"
            placeholder="johndoe@email.com, 555-555-5555, etc"
            style={this.props.applyStylesFxn(24, "Nunito Sans")}
          />
          <label>Image:</label>
          <input
            id="ImageUpload"
            name="ImageUpload"
            type="file"
            required
          />
          <label>Image Description:</label>
          <input
            id="ImageDescription"
            name="ImageDescription"
            type="text"
            placeholder="Please provide a short description of your image"
            style={this.props.applyStylesFxn(24, "Nunito Sans")}
            required
          />
          <input style={this.props.applyStylesFxn(24, "Nunito Sans")} type="submit" id="submitRequest"></input>
        </form>
      </div>
    );
  }
}

export default JoinPage;
