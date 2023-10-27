import { useEffect, useState } from "react"
import useImageUploader from "../../../../../hooks/useImageUploader"
import useServiceContext from "../../../context/useServiceContext"
import Box from "../../../../../shared/box"
import ServiceFormImg from "./ServiceFormImg"

const ServiceEditForm = () => {
 const { editService, categories, handleServiceForm } = useServiceContext()
 const { imgID, imgURL, handleImg } = useImageUploader(`Choose Service Icon`, `Use This Icon`)
 const [serviceTitle, setServiceTitle] = useState(editService.service_name)
 const [serviceDesc, setServiceDesc] = useState(editService.service_desc)
 const [serviceCategory, setServiceCategory] = useState(``)
 const [serviceIcon, setServiceIcon] = useState(``)
 const [serviceIconID, setServiceIconID] = useState(``)

 useEffect(() => {
  if (editService.service_icon !== undefined) {
   setServiceIcon(editService.service_icon)
  }
  if (editService.service_icon_id !== undefined) {
   setServiceIconID(editService.service_icon_id)
  }
  if (editService.service_category_id !== undefined) {
   setServiceCategory(editService.service_category_id)
  }
 }, [editService])

 useEffect(() => {
  if (imgURL !== ``) {
   setServiceIcon(imgURL)
  }
  if (imgID !== 0) {
   setServiceIconID(imgID)
  }
 }, [imgID])

 const handleFormSubmit = () => {
  const params = { serviceID: editService.service_id, serviceTitle, serviceDesc, serviceIconID: imgID !== 0 ? imgID : serviceIconID, serviceCategoryID: serviceCategory }
  handleServiceForm(params, 2)
 }

 return (
  <Box cls="col-span-6">
   <div className="grid grid-cols-2 gap-4">
    <div className="col-span-2">
     <h3 className="text-lg font-sansation-bold">Service Form</h3>
    </div>
    {serviceIcon !== `` && <ServiceFormImg imgURL={imgURL == `` ? serviceIcon : imgURL} />}
    <div className="col-span-1">
     <input
      type="text"
      placeholder="Title"
      name="title"
      value={serviceTitle}
      onInput={(e) => setServiceTitle(e.target.value)}
      className="block w-full px-[1rem!important] py-[.5rem!important] text-sm border-[0!important] bg-zinc-50 focus:outline-[0] font-jost-regular placeholder:font-jost-regular"
     />
    </div>
    <div className="col-span-1">
     <input
      type="text"
      placeholder="Description"
      name="desc"
      value={serviceDesc}
      onInput={(e) => setServiceDesc(e.target.value)}
      className="block w-full px-[1rem!important] py-[.5rem!important] text-sm border-[0!important] bg-zinc-50 focus:outline-[0] font-jost-regular placeholder:font-jost-regular"
     />
    </div>
    <div className="col-span-1">
     <select
      name="category"
      value={serviceCategory}
      onChange={(e) => setServiceCategory(e.target.value)}
      className="block w-full px-[1rem!important] py-[.5rem!important] text-sm border-[0!important] bg-zinc-50 focus:outline-[0] font-jost-regular placeholder:font-jost-regular">
      <option value="select">Select Category</option>
      {categories.map((category) => (
       <option value={category.category_id} selected={category.category_id === serviceCategory} key={category.category_id}>
        {category.category_name}
       </option>
      ))}
     </select>
    </div>
    <div className="grid grid-cols-2 col-span-1 gap-4">
     <div className="self-stretch col-span-1">
      <input type="file" name="icon" className="hidden" />
      <button
       type="button"
       onClick={handleImg}
       className="w-full h-full transition-all duration-300 ease-in-out bg-green-100 border rounded-md cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
       Icon
      </button>
     </div>
     <div className="self-stretch col-span-1">
      <button
       type="button"
       onClick={handleFormSubmit}
       className="w-full h-full transition-all duration-300 ease-in-out bg-green-100 border rounded-md cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
       Upload
      </button>
     </div>
    </div>
   </div>
  </Box>
 )
}

export default ServiceEditForm
