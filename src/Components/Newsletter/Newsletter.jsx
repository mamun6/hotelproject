import './Newsletter.css'
import discover from '../../assets/discover.jpg'

const Newsletter = () => {
  return (
    <div className='newsletter-container'>
        <div className='newsletter-wrapper'>
            <div className='newsletter-iamge'>
                <img src={discover} alt="" />
            </div>
            <div className='newsletter-content'>
                <h1>Explore the world with us</h1>
                <p>
                    Subscribe to see secret deals price drop the moment you sing up!
                </p>
                <div className='input-container'>
                    <input type="text" placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Newsletter
