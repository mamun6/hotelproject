import "./Hotels.css"
import { CiLocationOn } from "react-icons/ci"

const Hotels = ({ hotels, heading }) => {
    return (
        <div className="hotels-container" >
            <div><h1 className="hotels-header" >Our Best hotel</h1>
                <div className="hotels">
                    {hotels.map((hotel) => (
                        <div key={hotel.id} className="hotel-item">
                            <img src={hotel.image} alt="" className="hotel-image" />
                            <div className="hotel-content">
                                <span className="hotel-content">
                                    <CiLocationOn className="icon" />
                                    {hotel.location}
                                </span>
                                <span className="hotel-name" > {hotel.name} </span>
                                    <div className="hotel-rate">
                                        <button> {hotel.rate} </button>
                                        <span> {hotel.review} </span>
                                    </div>
                                    <span className="hotel-price">
                                        <span>From</span> $ {hotel.price}
                                        <span>/night</span>
                                    </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Hotels
