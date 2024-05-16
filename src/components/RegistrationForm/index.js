import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    isBlurFirstname: false,
    isBlurLastname: false,
    isFormSubmit: false,
  }

  onBlurFirstname = event => {
    if (event.target.value === '') {
      this.setState({isBlurFirstname: true})
    } else {
      this.setState({firstname: event.target.value, isBlurFirstname: false})
    }
  }

  onBlurLastname = event => {
    if (event.target.value === '') {
      this.setState({isBlurLastname: true})
    } else {
      this.setState({lastname: event.target.value, isBlurLastname: false})
    }
  }

  onSubmitRegistrationForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state

    if (firstname !== '' && lastname !== '') {
      this.setState({
        isFormSubmit: true,
        firstname: '',
        lastname: '',
        isBlurFirstname: false,
        isBlurLastname: false,
      })
    } else if (firstname === '' && lastname === '') {
      this.setState({isBlurFirstname: true, isBlurLastname: true})
    } else if (firstname === '') {
      this.setState({isBlurFirstname: true})
    } else if (lastname === '') {
      this.setState({isBlurLastname: true})
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({isFormSubmit: false})
  }

  renderFirstName = () => {
    const {isBlurFirstname} = this.state
    const inputClassname = isBlurFirstname ? 'blur-input-text' : 'input-text'
    return (
      <div className="name-card">
        <label className="label" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          id="firstname"
          type="text"
          className={inputClassname}
          placeholder="First name"
          onBlur={this.onBlurFirstname}
        />
        {isBlurFirstname && <p className="blur-text">Required</p>}
      </div>
    )
  }

  renderLastName = () => {
    const {isBlurLastname} = this.state
    const inputClassname = isBlurLastname ? 'blur-input-text' : 'input-text'
    return (
      <div className="name-card">
        <label className="label" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          id="lastname"
          type="text"
          className={inputClassname}
          placeholder="Last name"
          onBlur={this.onBlurLastname}
        />
        {isBlurLastname && <p className="blur-text">Required</p>}
      </div>
    )
  }

  render() {
    const {isFormSubmit} = this.state
    return (
      <div className="app-container">
        <div className="registrationform-container">
          <h1 className="registration-heading">Registration</h1>
          {isFormSubmit ? (
            <div className="form-submitted-successfully-card">
              <img
                className="success-image"
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p className="success-submitted">Submitted Successfully</p>
              <button
                type="button"
                className="submit-another-response-button"
                onClick={this.onClickSubmitAnotherResponse}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form
              onSubmit={this.onSubmitRegistrationForm}
              className="registrationform"
            >
              {this.renderFirstName()}
              {this.renderLastName()}
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm

//
