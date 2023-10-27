import { useState } from "react"
import Button from "../../../../components/button"
import Box from "../../../../shared/box"
import StatusInput from "./StatusInput"
import useAdminContext from "../../../context/useAdminContext"

const OrdersForm = () => {
 const { editBooking, handleEditBookingForm } = useAdminContext()

 const [prevStatus, setPrevStatus] = useState(editBooking.booking_status)
 const [newStatus, setNewStatus] = useState(0)

 const handleClick = (e) => {
  const { value } = e.target
  setPrevStatus(parseInt(value))
  setNewStatus(parseInt(value))
 }

 const handleFormSubmit = async () => {
  const params = {
   booking_id: editBooking.booking_id,
   booking_status: newStatus,
  }
  await handleEditBookingForm(params)
 }

 return (
  <Box cls="col-span-6">
   <div className="grid items-center grid-cols-4 gap-4 text-center">
    <div className="col-span-1">
     <p className="capitalize font-sansation-bold">{editBooking.user_name}</p>
    </div>
    <div className="col-span-1">
     <p className="capitalize font-sansation-regular">{editBooking.service_name}</p>
    </div>
    <div className="flex items-center justify-between col-span-2">
     <StatusInput int="0" prevStatus={prevStatus} handleClick={handleClick} />
     <StatusInput int="1" prevStatus={prevStatus} handleClick={handleClick} />
     <StatusInput int="2" prevStatus={prevStatus} handleClick={handleClick} />
     <StatusInput int="3" prevStatus={prevStatus} handleClick={handleClick} />
     <span className="flex flex-col items-center justify-center">
      <Button content="Update." handleClick={handleFormSubmit} />
     </span>
    </div>
   </div>
  </Box>
 )
}

export default OrdersForm
