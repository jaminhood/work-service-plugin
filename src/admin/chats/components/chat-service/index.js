import ChatServiceBlock from "./ChatServiceBlock"
import ChatServiceHeader from "./ChatServiceHeader"

const ChatService = () => {
 return (
  <div className="h-full col-span-1 bg-main-primary text-zinc-50">
   <ChatServiceHeader />
   <ChatServiceBlock />
  </div>
 )
}

export default ChatService
