import React from 'react';
import axios from 'axios';
import styles from './styles/MobileSubscribe.css';


class MobileSubscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: null,
    }
    this.mobileInputChange = this.mobileInputChange.bind(this);
    this.mobileSubmitHandler = this.mobileSubmitHandler.bind(this);
  }

  mobileInputChange(event) {
    this.setState({
      phoneNumber: event.target.value
    })
  }

  mobileSubmitHandler() {
    //Error Handling
    let phoneNumber = this.state.phoneNumber;
    let isValid = true;

    if (phoneNumber === null || phoneNumber.length < 10 || phoneNumber.length > 10) {
      isValid = false;
      alert('Invalid phone number');
    }

    let phoneNumberArr = phoneNumber.split('');

    phoneNumberArr.forEach((number) => {
      if (number.charCodeAt() < 48 || number.charCodeAt() > 57) {
        isValid = false;
        alert('Invalid number');
      }
    });

    //Post request made to server
    if (isValid) {
      axios.post('/new-subscriber', {
        phoneNumber: `+1${phoneNumber}`,
      })
        .then(() => {
          alert('Phone number successfull added!')
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div className="mobile-container">
        <span className="mobile-content-container">
          <input placeholder="Enter phone number..." className="number-input" onChange={this.mobileInputChange}/>
          <span className="submit-button-container">
            <button className="submit-button" onClick={this.mobileSubmitHandler}>Sign Up!</button>
          </span>
        </span>
      </div>
    )
  }


}

export default MobileSubscribe;
