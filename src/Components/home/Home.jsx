import Navbar from "../Navbar/navbar"
import Hero from "../Hero/Hero"
import Destinations from "../Destinations/Destinations"
import BestHotels from "../Hotel/BestHotels"
import Services from "../Services/Services"
import Newsletter from "../Newsletter/Newsletter"
import Footer from "../Footer/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="home-container">
      <Destinations />
      <BestHotels />
      <Services />
      <Newsletter />
      <Footer />
      </div>
   
     


    </div>
  )
}

export default Home
