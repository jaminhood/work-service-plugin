import { getStatus } from "../../../utils"

const CustomerBookingsCardLHS = ({ booking }) => {
 const { service_icon, service_name, booking_status } = booking
 return (
  <div className="flex items-center gap-4">
   <span className="relative z-0 flex items-center justify-center w-12 h-12 overflow-hidden rounded-full">
    <div className="absolute inset-0 before:absolute before:content-[''] before:inset-0 before:bg-main-primary before:opacity-70 -z-10">
     <img src={service_icon} className="object-cover w-full h-full" />
    </div>
   </span>
   <div className="flex flex-col justify-between">
    <h4 className="pb-0 mb-0 text-base md:text-lg font-sansation-bold text-main-primary">{service_name}</h4>
    {booking_status < 2 ? (
     <p className="text-sm text-orange-500 md:text-base font-jost-regular">{getStatus(booking_status)}</p>
    ) : (
     <p className="text-sm text-main-primary md:text-base font-jost-regular">{getStatus(booking_status)}</p>
    )}
   </div>
  </div>
 )
}

export default CustomerBookingsCardLHS
