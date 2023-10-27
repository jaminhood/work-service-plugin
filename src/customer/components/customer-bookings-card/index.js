import CustomerBookingsCardLHS from "./CustomerBookingsCardLHS"
import CustomerBookingsCardRHS from "./CustomerBookingsCardRHS"

const CustomerBookingsCard = ({ booking }) => {
 return (
  <div className="flex items-center justify-between py-1">
   <CustomerBookingsCardLHS booking={booking} />
   <CustomerBookingsCardRHS booking={booking} />
  </div>
 )
}

export default CustomerBookingsCard
