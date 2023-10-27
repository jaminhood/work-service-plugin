import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import useDeviceType from "../../../../hooks/useDeviceType"

const OneStar = () => {
 const { isMobile } = useDeviceType()

 if (isMobile) {
  return (
   <div className="flex items-center justify-between pt-1">
    <AiFillStar size={13} className="text-main-primary" />
    <AiOutlineStar size={13} className="text-main-primary" />
    <AiOutlineStar size={13} className="text-main-primary" />
    <AiOutlineStar size={13} className="text-main-primary" />
    <AiOutlineStar size={13} className="text-main-primary" />
   </div>
  )
 }

 return (
  <div className="flex items-center justify-between pt-1">
   <AiFillStar size={20} className="text-main-primary" />
   <AiOutlineStar size={20} className="text-main-primary" />
   <AiOutlineStar size={20} className="text-main-primary" />
   <AiOutlineStar size={20} className="text-main-primary" />
   <AiOutlineStar size={20} className="text-main-primary" />
  </div>
 )
}

export default OneStar
