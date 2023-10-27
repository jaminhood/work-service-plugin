import Box from "../../../../../shared/box"
import useServiceContext from "../../../context/useServiceContext"
import TableData from "./TableData"

const SubCategoriesTable = () => {
 const { subCategories } = useServiceContext()

 return (
  <Box cls="col-span-6">
   <table className="w-full">
    <thead className="text-left border-b border-gray-200">
     <tr>
      <th className="w-[30%] py-2">Sub-Category</th>
      <th className="w-[20%] py-2">Icon</th>
      <th className="w-[25%] py-2">Category</th>
      <th className="w-[25%] py-2">Action</th>
     </tr>
    </thead>
    <tbody>
     {subCategories.map((subCategory) => (
      <TableData key={subCategory.sub_category_id} sub_category={subCategory} />
     ))}
    </tbody>
   </table>
  </Box>
 )
}

export default SubCategoriesTable
