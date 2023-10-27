import { BsTrashFill } from "react-icons/bs"
import useServiceContext from "../../../context/useServiceContext"

const TableData = ({ sub_category }) => {
 const { handleSubCategoryDelete } = useServiceContext()

 const handleDelete = () => {
  handleSubCategoryDelete(sub_category.sub_category_id)
 }

 return (
  <>
   <tr className="border-b border-gray-200">
    <td className="py-2">{sub_category?.sub_category_name}</td>
    <td className="p-2">
     <div className="w-12 h-12 overflow-hidden rounded-lg">
      <img src={sub_category?.sub_category_icon} alt="" className="object-cover w-full h-full" />
     </div>
    </td>
    <td className="p-2">
     <td className="py-2">{sub_category?.category_name}</td>
    </td>
    <td className="py-2">
     <div className="flex gap-2">
      <button
       type="button"
       onClick={handleDelete}
       className="p-2 transition-all duration-300 ease-in-out bg-green-100 border rounded-lg cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
       <BsTrashFill size={20} />
      </button>
     </div>
    </td>
   </tr>
  </>
 )
}

export default TableData
