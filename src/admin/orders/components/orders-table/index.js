import Box from "../../../../shared/box"
import useAdminContext from "../../../context/useAdminContext"
import TableData from "./TableData"

const OrdersTable = () => {
 const { bookings } = useAdminContext()

 return (
  <Box cls="col-span-6">
   <table className="w-full">
    <thead className="text-left border-b border-gray-200">
     <tr>
      <th className="w-[20%] py-2">Customer Name</th>
      <th className="w-[15%] py-2">Service</th>
      <th className="w-[10%] py-2">Charge</th>
      <th className="w-[10%] py-2">Status</th>
      <th className="w-[25%] p-2">Location</th>
      <th className="w-[10%] p-2">Date</th>
      <th className="w-[10%] py-2">Action</th>
     </tr>
    </thead>
    <tbody>
     {bookings.map((booking) => (
      <TableData key={booking.booking_id} booking={booking} />
     ))}
    </tbody>
   </table>
  </Box>
 )
}

export default OrdersTable
