import { SITE_URL } from "../../../constants"

const CustomerCategoryCard = ({ category }) => {
 return (
  <a href={`${SITE_URL}ws-customer/category/${category?.category_id}`} className="no-underline text-inherit hover:no-underline focus:no-underline active:no-underline visited:no-underline">
   <div className="relative z-0 flex flex-col items-center justify-center p-2 mx-1 overflow-hidden text-center rounded-lg shadow-md text-main-primary">
    <div className="relative flex items-center justify-center h-16 overflow-hidden">
     <img src={category?.category_icon} className="object-cover w-full" />
    </div>
    <h4 className="pb-0 mb-0 text-[.6rem]">{category?.category_name}</h4>
   </div>
  </a>
 )
}

export default CustomerCategoryCard
