import axios from "axios"
import { SITE_URL } from "../../../constants"

const SubCategories = ({ subCategories, setServices }) => {
 const handleClick = async (id) => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/services/get?sub_category_id=${id}`).then((res) => {
   setServices(res.data)
  })
 }

 return (
  <div className="grid grid-cols-8 gap-4">
   {subCategories !== 0 &&
    subCategories?.map((subCat) => (
     <div
      className="relative z-0 flex flex-col items-center justify-center p-4 overflow-hidden text-center rounded-lg shadow-md cursor-pointer text-main-primary"
      key={subCat.sub_category_id}
      onClick={() => handleClick(subCat.sub_category_id)}>
      <div className="relative flex items-center justify-center h-16 overflow-hidden">
       <img src={subCat.sub_category_icon} className="object-cover w-full" />
      </div>
      <h4 className="pb-0 mb-0 text-[.6rem]">{subCat.sub_category_name}</h4>
     </div>
    ))}
  </div>
 )
}

export default SubCategories
