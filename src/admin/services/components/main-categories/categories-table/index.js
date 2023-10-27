import Box from "../../../../../shared/box"
import useServiceContext from "../../../context/useServiceContext"
import TableData from "./TableData"

const CategoriesTable = () => {
 const { categories } = useServiceContext()

 return (
  <Box cls="col-span-6">
   <table className="w-full">
    <thead className="text-left border-b border-gray-200">
     <tr>
      <th className="w-[50%] py-2">Category</th>
      <th className="w-[25%] py-2">Icon</th>
      <th className="w-[25%] py-2">Action</th>
     </tr>
    </thead>
    <tbody>
     {categories.map((category) => (
      <TableData key={category.category_id} category={category} />
     ))}
    </tbody>
   </table>
  </Box>
 )
}

export default CategoriesTable
