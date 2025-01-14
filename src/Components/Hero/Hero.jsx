import './Hero.css'
import Date from './Date'
import Guests from './Guests'
import Location from './Location'
import {Link} from 'react-router-dom'


const Hero = () => {
  return (
    <div className='hero' >
        <div className="hero-container">
            <h1>Start your Journey with us</h1>
            <p>Find Where do want visit ? </p>
            <div className="hero-search-container">
                <div className="hero-search">
                    <div className="hero-wrapper">
                        <Location />
                        <Date />
                        <Guests />
                            <Link to="/hotels">
                            <div className="search-button">
                        <button>Search</button>
                        </div>
                            </Link>
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
