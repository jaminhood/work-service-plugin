import { ImPencil2 } from "react-icons/im"
import { TbCurrencyNaira } from "react-icons/tb"
import { getDate, getStatus } from "../../../../utils"
import useAdminContext from "../../../context/useAdminContext"

const TableData = ({ booking }) => {
 const { handleBooking } = useAdminContext()
 const { booking_id, user_name, service_name, booking_price, booking_status, booking_location, booking_date } = booking

 const handleEdit = () => {
  handleBooking(booking_id)
 }

 return (
  <tr className="border-b border-gray-200">
   <td className="py-2 capitalize">{user_name}</td>
   <td className="py-2">{service_name}</td>
   <td className="py-2">
    <p className="inline-flex items-center h-full font-bold">
     <TbCurrencyNaira size={20} />
     <span>{booking_price}</span>
    </p>
   </td>
   <td className="py-2">
    {booking_status < 2 ? (
     <span className="px-2 py-1 text-[.7rem] font-medium bg-orange-500 rounded-lg text-gray-950">{getStatus(booking_status)}</span>
    ) : (
     <span className="px-2 py-1 text-[.7rem] font-medium bg-main-primary rounded-lg text-gray-50">{getStatus(booking_status)}</span>
    )}
   </td>
   <td className="p-2">{booking_location}</td>
   <td className="p-2">{getDate(booking_date)}</td>
   <td className="py-2">
    <button
     type="button"
     onClick={handleEdit}
     className="p-2 transition-all duration-300 ease-in-out bg-green-100 border rounded-lg cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
     <ImPencil2 size={20} />
    </button>
   </td>
  </tr>
 )
}

export default TableData
