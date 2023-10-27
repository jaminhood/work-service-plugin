import Box from "../../../../../shared/box"
import useServiceContext from "../../../context/useServiceContext"
import TableData from "./TableData"

const ServicesTable = () => {
 const { services } = useServiceContext()

 return (
  <Box cls="col-span-6">
   <table className="w-full">
    <thead className="text-left border-b border-gray-200">
     <tr>
      <th className="w-[35%] py-2">Title</th>
      <th className="w-[15%] py-2">Icon</th>
      <th className="w-[25%] py-2">Sub-Category</th>
      <th className="w-[25%] py-2">Action</th>
     </tr>
    </thead>
    <tbody>
     {services.map((service) => (
      <TableData key={service.service_id} service={service} />
     ))}
    </tbody>
   </table>
  </Box>
 )
}

export default ServicesTable
