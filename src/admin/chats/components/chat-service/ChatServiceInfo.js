import img from "../../../../assets/logo-light.png"
import { TbCurrencyNaira } from "react-icons/tb"
import useAdminContext from "../../../context/useAdminContext"

const ChatServiceInfo = () => {
 const { activeChat } = useAdminContext()

 return (
  <div>
   <div className="w-full overflow-hidden h-60">
    <img src={activeChat.service_icon != 0 ? activeChat.service_icon : img} alt="" className="object-cover w-full h-full transition-all duration-300 ease-in-out hover:scale-110" />
   </div>
   <div className="w-full mt-4">
    <p className="flex items-center justify-center h-full font-bold">
     <span>Agreed Price: </span>
     <TbCurrencyNaira size={20} />
     <span>0</span>
    </p>
   </div>
  </div>
 )
}

export default ChatServiceInfo
