import { AiFillStar } from "react-icons/ai"
import useDeviceType from "../../../../hooks/useDeviceType"

const FiveStar = () => {
 const { isMobile } = useDeviceType()

 if (isMobile) {
  return (
   <div className="flex items-center justify-between pt-1">
    <AiFillStar size={13} className="text-main-primary" />
    <AiFillStar size={13} className="text-main-primary" />
    <AiFillStar size={13} className="text-main-primary" />
    <AiFillStar size={13} className="text-main-primary" />
    <AiFillStar size={13} className="text-main-primary" />
   </div>
  )
 }

 return (
  <div className="flex items-center justify-between pt-1">
   {/* <AiOutlineStar /> */}
   <AiFillStar size={20} className="text-main-primary" />
   <AiFillStar size={20} className="text-main-primary" />
   <AiFillStar size={20} className="text-main-primary" />
   <AiFillStar size={20} className="text-main-primary" />
   <AiFillStar size={20} className="text-main-primary" />
  </div>
 )
}

export default FiveStar
