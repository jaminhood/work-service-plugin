import { useEffect, useState } from "react"
import axios from "axios"
import CustomerContentBox from "../../customer/components/customer-content-box"
import { SITE_URL } from "../../constants"
import { priceFormat } from "../../utils"

const RightBar = () => {
 const user = JSON.parse(localStorage.getItem(`ws-user`))
 const [bookings, setBookings] = useState([])

 const loadBookings = async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/bookings/web/get?user_id=${user.ID}`).then((res) => {
   setBookings(res.data)
  })
 }

 useEffect(async () => {
  await loadBookings()
 }, [])

 return (
  <div className="col-span-3 md:col-span-1">
   <div className="sticky px-4 rounded-md top-20">
    <CustomerContentBox title="Services In Progress">
     {bookings.map((booking) => {
      if (booking.booking_status == 2) {
       return (
        <React.Fragment key={booking.booking_id}>
         <div className="flex items-center justify-between py-2 border-b border-zinc-300">
          <h4 className="pb-0 mb-0 text-base md:text-xl font-sansation-bold text-main-primary">{booking.service_name}</h4>
          <p className="text-lg text-main-primary md:text-base font-jost-regular">{priceFormat(parseInt(booking.booking_price))}</p>
         </div>
        </React.Fragment>
       )
      }
     })}
    </CustomerContentBox>
   </div>
  </div>
 )
}

export default RightBar
