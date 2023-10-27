import { AiOutlineLogout } from "react-icons/ai"
import { SITE_URL } from "../../constants"
import useDeviceType from "../../hooks/useDeviceType"

const TopBarRHS = () => {
 const { isMobile } = useDeviceType()

 const clearUserData = () => {
  localStorage.setItem(`ws-user`, JSON.stringify([]))
 }

 return (
  <div className="flex flex-col items-center justify-center">
   <a href={`${SITE_URL}ws-customer/logout`} className="no-underline cursor-pointer focus:no-underline text-gray-50" onClick={clearUserData}>
    <AiOutlineLogout size={25} />
   </a>
   {!isMobile && <p className="text-[.5rem]">Logout</p>}
  </div>
 )
}

export default TopBarRHS
