import CustomerServiceOverviewInfo from "./CustomerServiceOverviewInfo"

const CustomerServiceOverview = ({ service }) => {
 console.log(service)
 return (
  <div className="grid grid-cols-3 gap-4">
   <div className="relative z-0 flex flex-col items-end justify-end h-40 p-4 overflow-hidden text-center rounded-lg shadow-md text-zinc-50">
    <div className="absolute inset-0 before:absolute before:content-[''] before:inset-0 before:bg-main-primary before:opacity-70 -z-10">
     <img src={service.service_icon} className="object-cover w-full h-full" />
    </div>
   </div>
   <CustomerServiceOverviewInfo service={service} />
  </div>
 )
}

export default CustomerServiceOverview
