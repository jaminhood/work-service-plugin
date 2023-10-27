import { SITE_URL } from "../../../constants"

const CustomerServiceCard = ({ service }) => {
 return (
  <a href={`${SITE_URL}ws-customer/services/${service.service_id}`} className="no-underline text-inherit hover:no-underline focus:no-underline active:no-underline visited:no-underline">
   <div className="relative z-0 flex flex-col items-end justify-end h-40 p-4 overflow-hidden text-center rounded-lg shadow-md text-zinc-50">
    <div className="absolute inset-0 before:absolute before:content-[''] before:inset-0 before:bg-main-primary before:opacity-70 -z-10">
     <img src={service.service_icon} className="object-cover w-full h-full" />
    </div>
    <h4 className="pb-0 mb-0 text-base">{service.service_name}</h4>
   </div>
  </a>
 )
}

export default CustomerServiceCard
