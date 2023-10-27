import { BsTrashFill } from "react-icons/bs"
import { ImPencil2 } from "react-icons/im"

const ContactBox = ({ children }) => {
 return (
  <div className="flex gap-4 py-2 my-1 border-y border-y-main-primary">
   <div className="relative flex items-center w-full gap-2">{children}</div>
  </div>
 )
}

export default ContactBox
