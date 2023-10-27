import axios from "axios"
import { useEffect, useState } from "react"
import { CustomerContext } from "./CustomerContext"
import { SITE_URL } from "../../constants"
import LeftBar from "../../components/left-bar"
import TopBar from "../../components/top-bar"
import CustomerMainContent from "../components/customer-main-content"

const CustomerProvider = ({ title, showTitle, children }) => {
 document.title = `${title} | Work Service`

 const [user, setUser] = useState([])
 const [categories, setCategories] = useState([])
 const [services, setServices] = useState([])
 const [bookings, setBookings] = useState([])
 const [activeChat, setActiveChat] = useState([])
 const [messages, setMessages] = useState([])

 const getUserData = async () => {
  setUser(JSON.parse(localStorage.getItem(`ws-user`)))
 }

 const loadBookings = async () => {
  const { ID } = JSON.parse(localStorage.getItem(`ws-user`))
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/bookings/web/get?user_id=${ID}`).then((res) => {
   setBookings(res.data)
  })
 }

 const getAllCategories = async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/categories/get`).then((res) => {
   setCategories(res.data)
  })
 }

 const getAllServices = async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/services/get-all`).then((res) => {
   setServices(res.data)
  })
 }

 useEffect(async () => {
  await getUserData()
   .then(async () => await getAllCategories())
   .then(async () => await getAllServices())
   .then(async () => await loadBookings())
 }, [])

 useEffect(() => {
  let msgs
  if (activeChat.user_id !== undefined) {
   msgs = setInterval(async () => {
    await axios.get(`${SITE_URL}wp-json/ws-api/v1/chats/web/get-user?user_id=${activeChat?.user_id}&booking_id=${activeChat?.booking_id}`).then((res) => {
     setMessages(res.data)
    })
   }, 500)
  }

  return () => clearInterval(msgs)
 }, [activeChat])

 const handleActiveChat = async (booking) => {
  setActiveChat(booking)
 }

 const handleMessage = async (msg) => {
  const { ID } = JSON.parse(localStorage.getItem(`ws-user`))

  const params = {
   user_id: ID,
   chat_type: activeChat.booking_id ? 1 : 0,
   chat_booking_id: activeChat.booking_id ? activeChat.booking_id : 0,
   chat_sender: `user`,
   chat_message: msg,
  }

  await axios.post(`${SITE_URL}wp-json/ws-api/v1/chats/web/set`, params).then((res) => {
   if (res.data === `Sent Successful`) {
    setMessages((prev) => [...prev, params])
   }
  })
 }

 const providerValues = {
  user,
  bookings,
  categories,
  services,
  activeChat,
  messages,
  handleActiveChat,
  handleMessage,
 }

 return (
  <CustomerContext.Provider value={providerValues}>
   <div className="flex w-full min-h-screen text-zinc-50 bg-main-primary font-jost-regular">
    <LeftBar />
    <main className="w-[calc(100vw-25rem)]">
     <TopBar />
     <CustomerMainContent title={title} showTitle={showTitle}>
      {children}
     </CustomerMainContent>
    </main>
   </div>
  </CustomerContext.Provider>
 )
}

export default CustomerProvider
