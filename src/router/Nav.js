import React from "react";
import { Link } from "react-router-dom"
import "./nav.css"

function Nav() {
  return (
    <div>
      <nav>
        <Link className="logo" to="/">Navbar</Link>

        <ul>
          <li>
            <Link className="link" to='./swipper' >Swipper</Link>
          </li>
          <li>
            <Link className="link" to='./blog' >Blog </Link>
          </li>
          <li>
            <Link className="link" to='./chart' >Chart </Link>
          </li>
          <li>
            <Link className="link" to='./count' >Count </Link>
          </li>
        </ul>
      </nav>
      <hr />
   
    </div>
  );
}

export default Nav;
