import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to ="#" className="navbar-brand">Places</Link>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="form">Form</Link></li>
              <li><Link to="historical">Previous Searches</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
