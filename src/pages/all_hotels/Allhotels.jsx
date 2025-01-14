import './allhotels.css'
import Navbar from "../../Components/Navbar/navbar"
import Hero from "../../Components/Hero/Hero"
import FilterBar from "./filterBar"
import { allHotels } from "../../data"
import { HiOutlineSquares2X2 } from "react-icons/hi2"
import { BsGrid3X2Gap } from "react-icons/bs"
import Hotels from "../../Components/Hotel/Hotels"
import Footer from "../../Components/Footer/Footer"

const Allhotels = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <FilterBar />
        <div className="allhotels-items">
            <h2 className="allhotels-heading" > {allHotels.length} Hotel Found </h2>
            <div className="allhotels-icons">
                <HiOutlineSquares2X2 />
                <BsGrid3X2Gap />
            </div>
        </div>

            <Hotels hotels={allHotels} />
            <Footer />

      
    </div>
  )
}

export default Allhotels
