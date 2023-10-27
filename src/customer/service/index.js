import axios from "axios"
import { useState } from "react"
import { SITE_URL } from "../../constants"
import Layout from "../Layout"
import CustomerContentBox from "../components/customer-content-box"
import useService from "../hooks/useService"
import CustomerServiceOverview from "./CustomerServiceOverview"
import Button from "../../components/button"

const CustomerServicePage = () => {
 const user = JSON.parse(localStorage.getItem(`ws-user`))
 const [service] = useService(`/services/`)
 const [description, setDescription] = useState(``)
 const [name, setName] = useState(``)

 const handleSubmit = async () => {
  const chatURL = `${SITE_URL}ws-customer/chat`

  const params = {
   user_id: user.ID,
   service_id: service.service_id,
   booking_name: name,
   booking_desc: description,
  }

  await axios.post(`${SITE_URL}wp-json/ws-api/v1/bookings/set`, params).then(() => {
   window.location.replace(chatURL)
  })
 }

 return (
  <Layout title={service.service_name} showTitle={false}>
   <>
    <CustomerContentBox title="Overview">
     <CustomerServiceOverview service={service} />
    </CustomerContentBox>
    <CustomerContentBox title="Booking Name">
     <div className="overflow-hidden rounded-md shadow-md bg-zinc-200">
      <input type="text" className="w-full h-full px-4 py-2 bg-transparent focus:outline-0" placeholder="Please input Booking Name.." value={name} onInput={(e) => setName(e.target.value)} />
     </div>
    </CustomerContentBox>
    <CustomerContentBox title="Describe The Service">
     <div className="overflow-hidden rounded-md shadow-md bg-zinc-200">
      <textarea
       className="w-full px-4 py-2 bg-transparent resize-none h-28 focus:outline-0"
       placeholder="Please describe service.."
       value={description}
       onInput={(e) => setDescription(e.target.value)}></textarea>
     </div>
    </CustomerContentBox>
    <CustomerContentBox>
     <Button content="Proceed To Chat" handleClick={handleSubmit} />
    </CustomerContentBox>
   </>
  </Layout>
 )
}

export default CustomerServicePage
