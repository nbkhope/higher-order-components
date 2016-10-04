import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authButton() {
    const { authenticated, authenticate } = this.props;

    if (authenticated) {
      return <button className="nav-link" onClick={() => authenticate(false)}>Sign Out</button>;
    }
    else {
      return <button className="nav-link" onClick={() => authenticate(true)}>Sign In</button>;
    }
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

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
