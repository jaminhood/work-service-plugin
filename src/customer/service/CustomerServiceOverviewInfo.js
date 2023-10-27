const CustomerServiceOverviewInfo = ({ service }) => {
 return (
  <div className="col-span-2 px-4">
   <h4 className="text-lg capitalize font-sansation-bold">{service.service_name}</h4>
   <h6 className="mt-2 font-sansation-regular pt-1 lowercase text-[.6rem] inline-block border-t-2 border-main-secondary">{service.sub_category}</h6>
   <p className="pt-2 text-sm">{service.service_desc}</p>
  </div>
 )
}

export default CustomerServiceOverviewInfo
