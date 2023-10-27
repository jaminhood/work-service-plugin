import Box from "../../../../shared/box"
import TableData from "./TableData"

const CustomersTable = () => {
 return (
  <Box cls="col-span-6">
   <>
    <table className="w-full">
     <thead className="text-left border-b border-gray-200">
      <tr>
       <th className="w-[20%] py-2">Profile</th>
       <th className="w-[30%] py-2">Customer Name</th>
       <th className="w-[30%] p-2">Address</th>
       <th className="w-[20%] py-2">Action</th>
      </tr>
     </thead>
     <tbody>
      <TableData />
      <TableData />
      <TableData />
      <TableData />
      <TableData />
     </tbody>
    </table>
   </>
  </Box>
 )
}

export default CustomersTable
