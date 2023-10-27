import { useEffect, useState } from "react"
import Layout from "../Layout"
import CustomerBookingsCard from "../components/customer-bookings-card"
import CustomerContentBox from "../components/customer-content-box"
import axios from "axios"
import { SITE_URL } from "../../constants"

const CustomerBookings = () => {
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
  <Layout title="Bookings" showTitle={true}>
   <CustomerContentBox>
    {bookings.map((booking, i) => {
     if (booking.service_name !== "Customer Service") {
      if (bookings.length - 1 !== i) {
       return (
        <React.Fragment key={booking.booking_id}>
         <CustomerBookingsCard booking={booking} />
         <hr className="my-2 border-b border-zinc-300" />
        </React.Fragment>
       )
      } else {
       return <CustomerBookingsCard key={booking.booking_id} booking={booking} />
      }
     }
    })}
   </CustomerContentBox>
  </Layout>
 )
}

export default CustomerBookings
