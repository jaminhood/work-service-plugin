import { priceFormat } from "../../../utils"
import CustomerBookingsCardRates from "./CustomerBookingsCardRates"

const CustomerBookingsCardRHS = ({ booking }) => {
 return (
  <div className="">
   <h2 className="pb-0 mb-0 text-base md:text-xl text-main-primary font-jost-regular">{priceFormat(parseInt(booking.booking_price))}</h2>
   <CustomerBookingsCardRates booking={booking} />
  </div>
 )
}

export default CustomerBookingsCardRHS
