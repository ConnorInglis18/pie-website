import { Component } from 'react';
import './ContactPage.css';

class ContactPage extends Component {
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
  submitQuestion = (e, name, email, phoneNumber, description) => {
    e.preventDefault()
    if (!this.isValidEmail(email.value)) {
      window.alert("You must enter a valid email");
      email.focus();
    } else {
      name.value = "";
      email.value = "";
      phoneNumber.value = "";
      description.value = "";
      window.alert("Your form has been submitted! We will get back to you as soon as we can")
      this.props.showPageFxn(e, "LandingPage")
    }
  }

  render() {
    return (
      <div className="ContactPage">
        <p id="QuestionsText">Questions? We would love to hear them.</p>
        <form id="ContactForm" type="submit" onSubmit={(event) => this.submitQuestion(
          event,
          document.getElementById("ContactName"),
          document.getElementById("ContactEmail"),
          document.getElementById("ContactPhoneNumber"),
          document.getElementById("ContactDescription"),
        )}>
          <label>Name:</label>
          <input
            id="ContactName"
            name="ContactName"
            type="text"
            placeholder="John Doe"
            required
          />
          <label>Email:</label>
          <input
            id="ContactEmail"
            name="ContactEmail"
            type="text"
            placeholder="johndoe@email.com"
            required
          />
          <label>Phone Number (optional):</label>
          <input
            id="ContactPhoneNumber"
            name="ContactPhoneNumber"
            type="tel"
            placeholder="555-555-5555"
            pattern="^[0-9(). \-]+$"
            title="Invalid Phone Number"
          />
          <label>Comment or Question:</label>
          <textarea
            id="ContactDescription"
            name="ContactDescription"
            type="text"
            placeholder="Comment or question..."
            cols="4"
            required
          />
          <input type="submit" id="submitQuestion"></input>


                  {/* <label>Name</label>
                  <textarea name="name" placeholder="Jane Doe" onChange={event => {
                    this.setState({name: event.target.value});
                  }} ref="name"></textarea>
                <div className="contactForm">
                  <label htmlFor="email">Email</label>
                  <textarea name="email" placeholder="johndoe@email.com" ref="email"></textarea>
                </div>
                <div className="contactForm">
                  <label htmlFor="question">Question</label>
                  <textarea name="question" placeholder="Question" rows="4" ref="question"></textarea>
                </div>
                <button id="submitQuestion" onClick={() => {
                  window.alert(`Thank you for submitting a question, ${this.state.name}`);
                  this.refs.name.value = '';
                  this.refs.email.value = '';
                  this.refs.question.value = '';
                }}>
                  Submit Question
                </button> */}
        </form>
      </div>
    );
  }
}

export default ContactPage;
