import { Component } from 'react';
import './ContactPage.css';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }

  render() {
    return (
    <div className="ContactPage">
        <p id="questionsText">Questions? We would love to hear them.</p>
        <div className="contactForm">
          <label htmlFor="name">Name</label>
          <textarea name="name" placeholder="Jane Doe" onChange={event => {
            this.setState({name: event.target.value});
          }} ref="name"></textarea>
        </div>
        <div className="contactForm">
          <label htmlFor="email">Email</label>
          <textarea name="email" placeholder="johndoe@email.com" ref="email"></textarea>
        </div>
        <div className="contactForm">
          <label htmlFor="question">Question</label>
          <textarea name="question" placeholder="Question" rows="4" ref="question"></textarea>
        </div>
        <button id="submitQuestion" onClick={event => {
          window.alert(`Thank you for submitting a question, ${this.state.name}`);
          this.refs.name.value = '';
          this.refs.email.value = '';
          this.refs.question.value = '';
        }}>Submit Question</button>
    </div>
    );
  }
}

export default ContactPage;
