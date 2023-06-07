// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameWarning: false,
    showLastNameWarning: false,
    showSuccessfulResponse: false,
  }

  onChangeFirstName = event => {
    if (event.target.value.length > 0) {
      this.setState({
        firstName: event.target.value,
        showFirstNameWarning: false,
      })
    } else {
      this.setState({showFirstNameWarning: true, firstName: event.target.value})
    }
  }

  onBlurFirstName = event => {
    if (event.target.value.length > 0) {
      this.setState({
        firstName: event.target.value,
        showFirstNameWarning: false,
      })
    } else {
      this.setState({showFirstNameWarning: true, firstName: event.target.value})
    }
  }

  onBlurLastName = event => {
    if (event.target.value.length > 0) {
      this.setState({
        lastName: event.target.value,
        showLastNameWarning: false,
      })
    } else {
      this.setState({showLastNameWarning: true, lastName: event.target.value})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName.length < 1 && lastName.length < 1) {
      console.log('both empty')
      this.setState({
        showFirstNameWarning: true,
        showLastNameWarning: true,
        showSuccessfulResponse: false,
      })
    } else if (firstName.length < 1) {
      console.log('fname empty')
      this.setState({
        showFirstNameWarning: true,
        showLastNameWarning: false,
        showSuccessfulResponse: false,
      })
    } else if (lastName.length < 1) {
      console.log('lname empty')
      this.setState({
        showLastNameWarning: true,
        showFirstNameWarning: false,
        showSuccessfulResponse: false,
      })
    } else {
      console.log('all ar full')
      this.setState({
        showSuccessfulResponse: true,
        showFirstNameWarning: false,
        showLastNameWarning: false,
      })
    }
  }

  onChangeLastName = event => {
    if (event.target.value.length > 0) {
      this.setState({
        lastName: event.target.value,
        showLastNameWarning: false,
      })
    } else {
      this.setState({showLastNameWarning: true, lastName: event.target.value})
    }
  }

  showAnotherResponse = () => {
    this.setState({
      showSuccessfulResponse: false,
      showFirstNameWarning: false,
      showLastNameWarning: false,
      firstName: '',
      lastName: '',
    })
  }

  renderSuccessfulResponse = () => (
    <div className="success-registration">
      <img
        className="success-icon"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        className="btn-submit"
        onClick={this.showAnotherResponse}
        type="submit"
      >
        Submit Another Response
      </button>
    </div>
  )

  renderRegistrationForm = () => {
    const {
      firstName,
      lastName,
      showFirstNameWarning,
      showLastNameWarning,
    } = this.state
    const firstNameWarning = showFirstNameWarning ? 'warning' : ''
    const lastNameWarning = showLastNameWarning ? 'warning' : ''

    return (
      <div className="registration" onSubmit={this.onSubmitForm}>
        <form className="form">
          <label className="input-label" htmlFor="firstname">
            FIRST NAME
          </label>
          <br />
          <input
            className={`input-box ${firstNameWarning}`}
            id="firstname"
            type="text"
            value={firstName}
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
          />
          <br />
          {showFirstNameWarning && <p className="warning-text">Required</p>}

          <label className="input-label" htmlFor="lastname">
            LAST NAME
          </label>
          <br />
          <input
            className={`input-box ${lastNameWarning}`}
            id="lastname"
            type="text"
            value={lastName}
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
          />
          <br />
          {showLastNameWarning && <p className="warning-text">Required</p>}

          <button className="btn-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }

  render() {
    const {showSuccessfulResponse} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {showSuccessfulResponse
          ? this.renderSuccessfulResponse()
          : this.renderRegistrationForm()}
      </div>
    )
  }
}
export default RegistrationForm
