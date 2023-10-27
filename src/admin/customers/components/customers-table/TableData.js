import { BsTrashFill } from "react-icons/bs"
import { ImPencil2 } from "react-icons/im"
import { TbCurrencyNaira } from "react-icons/tb"

const TableData = () => {
 return (
  <tr className="border-b border-gray-200">
   <td className="py-2">6752</td>
   <td className="p-2">Caria Houston</td>
   <td className="py-2">caria.houston@gmail.com</td>
   <td className="p-2">Appartment 123, Broklen Drive, Ionspa</td>
   <td className="py-2">
    <div className="flex gap-2">
     <button
      type="button"
      className="p-2 transition-all duration-300 ease-in-out bg-green-100 border rounded-lg cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
      <ImPencil2 size={20} />
     </button>
     <button
      type="button"
      className="p-2 transition-all duration-300 ease-in-out bg-green-100 border rounded-lg cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
      <BsTrashFill size={20} />
     </button>
    </div>
   </td>
  </tr>
 )
}

export default TableData
