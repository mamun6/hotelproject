import Hotels from "./Hotels"
import { hotels } from "../../data"

const BestHotels = () => {
  return (
    <div>
      <Hotels hotels={hotels} heading="Best Hotels" />
    </div>
  )
}

export default BestHotels
