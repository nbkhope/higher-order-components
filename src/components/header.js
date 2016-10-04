import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  authButton() {
    return <button className="nav-link">Sign In</button>;
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Higher Order Components</Link>

        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="nav-link">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
