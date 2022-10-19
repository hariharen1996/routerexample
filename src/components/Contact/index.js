// Write your JS code here
import {Component} from 'react'
import './index.css'

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png"
          className="contact-img"
          alt="contact"
        />
        <h1 className="contact-heading">Contact</h1>
      </div>
    )
  }
}

export default Contact
