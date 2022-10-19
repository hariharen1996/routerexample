// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            className="logo"
            alt="wave"
          />
          <h1 className="logo-text">Wave</h1>
        </div>
        <ul className="nav-lists">
          <li className="nav-items">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
