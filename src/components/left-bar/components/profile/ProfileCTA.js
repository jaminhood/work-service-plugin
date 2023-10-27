import axios from "axios"
import { SITE_URL } from "../../../../constants"
import NavBtn from "../../../button/NavBtn"

const ProfileCTA = () => {
 const handleSupport = async () => {
  const { ID } = JSON.parse(localStorage.getItem(`ws-user`))
  const chatURL = `${SITE_URL}ws-customer/chat`

  const params = {
   user_id: ID,
   service_id: 0,
   booking_name: "Customer Support",
   booking_desc: "Customer Support",
  }

  await axios.post(`${SITE_URL}wp-json/ws-api/v1/bookings/set`, params).then(() => {
   window.location.replace(chatURL)
  })
 }

 return (
  <div className="flex items-center justify-center gap-2 pt-8">
   <span>
    <NavBtn outline={true} content="Customer Service" handleClick={handleSupport} />
   </span>
   <a href="#">
    <NavBtn outline={false} content="Download App" />
   </a>
  </div>
 )
}

export default ProfileCTA
