import { AiOutlineStar } from "react-icons/ai"
import useDeviceType from "../../../../hooks/useDeviceType"

const ZeroStar = () => {
 const { isMobile } = useDeviceType()

 if (isMobile) {
  return (
   <div className="flex items-center justify-between pt-1">
    <AiOutlineStar size={13} className="text-main-primary" />
    <AiOutlineStar size={13} className="text-main-primary" />
    <AiOutlineStar size={13} className="text-main-primary" />
    <AiOutlineStar size={13} className="text-main-primary" />
    <AiOutlineStar size={13} className="text-main-primary" />
   </div>
  )
 }

 return (
  <div className="flex items-center justify-between pt-1">
   <AiOutlineStar size={20} className="text-main-primary" />
   <AiOutlineStar size={20} className="text-main-primary" />
   <AiOutlineStar size={20} className="text-main-primary" />
   <AiOutlineStar size={20} className="text-main-primary" />
   <AiOutlineStar size={20} className="text-main-primary" />
  </div>
 )
}

export default ZeroStar
