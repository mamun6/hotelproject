import './navbar.css'
import { BiSolidPlaneAlt } from "react-icons/bi"
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <div className='navbar' >
      <div className="navbar-container">
       <Link to="/">
       <div className="navbar-logo">
          <BiSolidPlaneAlt />
          <span>Hotel Boking Website</span>
        </div>
       </Link>
        <Link to="/hotels" >
          <div>
            <button className='navbar-button' >Book Now</button>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default navbar
