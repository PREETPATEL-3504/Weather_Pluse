import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div>
        <ul className="nav justify-content-start  navbar">
          <li>
            <h2>WatherPulse</h2>
          </li>
          <li className="nav-item">
            <h4><Link className="nav-link" to="/">Home</Link></h4>
          </li>
          {/* <li className="nav-item">
            <h4><Link className="nav-link" aria-current="page" to="/Map">Map</Link></h4>
          </li> */}
        </ul>
      </div>
    </>
  )
}
