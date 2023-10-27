import Layout from "../Layout"
import CustomerChatsContainer from "./components/chat-container"
import CustomerChatList from "./components/chat-list"

const CustomerChatPage = () => {
 return (
  <Layout title="Chat">
   <div className="grid items-stretch w-full grid-cols-3 overflow-hidden border rounded-md text-main-primary border-zinc-50">
    <CustomerChatList />
    <CustomerChatsContainer />
   </div>
  </Layout>
 )
}

export default CustomerChatPage
