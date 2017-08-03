import React from 'react';
import App from '../App.js';
import aboutpage from './aboutpage.js';
import contactform from './contactform.js';
import { Link } from 'react-router-dom';
import descriptions from './descriptions';
import prices from './prices'
import pictures from './pictures';

export default class baselayout extends React.Component {
  render () {
    return (
      <div>
        <p>Words!</p>
          <div><button className="btn"><Link to="/aboutpage">About Page</Link></button></div>
          <div><button className="btn"><Link to="/contactform">Contact Us</Link></button></div>
          <div><button className="btn"><Link to="/descriptions">Descriptions</Link></button></div>
          <div><button className="btn"><Link to="/prices">Prices</Link></button></div>
          <div><button className="btn"><Link to="/pictures">Pictures</Link></button></div>
      </div>
    );
  }
}
