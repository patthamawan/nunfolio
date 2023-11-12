import React from 'react';
import { useLocation, NavLink, Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';


const Menu = () =>{
    const { pathname } = useLocation();
    return(

        <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="#">Personal Work</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
        </ul>
      </nav>


    )
}

export default Menu