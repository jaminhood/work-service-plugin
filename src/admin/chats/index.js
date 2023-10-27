import AdminProvider from "../context/AdminProvider"
import ChatsContainer from "./components/chat-container"
import ChatList from "./components/chat-list"
import ChatService from "./components/chat-service"

const ChatsPage = () => {
 return (
  <AdminProvider>
   <h1 className="mb-[1rem!important] text-2xl font-bold">Chats</h1>
   <div className="relative grid items-stretch w-full grid-cols-4 overflow-hidden border shadow-lg text-main-primary rounded-xl border-gray-50">
    <ChatList />
    <ChatsContainer />
    <ChatService />
   </div>
  </AdminProvider>
 )
}

export default ChatsPage
