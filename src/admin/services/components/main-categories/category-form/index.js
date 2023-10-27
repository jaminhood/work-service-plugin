import { useState } from "react"
import useImageUploader from "../../../../../hooks/useImageUploader"
import CategoryFormImg from "./CategoryFormImg"
import useServiceContext from "../../../context/useServiceContext"
import Modal from "../../../../shared/Modal"

const CategoryForm = ({ toggleOpen }) => {
 const { imgID, imgURL, handleImg } = useImageUploader(`Choose Category Icon`, `Use This Icon`)
 const [categoryTitle, setCategoryTitle] = useState(``)
 const { handleCategoryForm } = useServiceContext()

 const handleSubmission = () => {
  const params = { categoryTitle, categoryIconID: imgID }
  handleCategoryForm(params)
 }

 return (
  <Modal toggleOpen={toggleOpen} modalTitle="Add Category" submit={handleSubmission}>
   <div className="grid grid-cols-1 gap-4">
    {imgURL !== `` && <CategoryFormImg imgURL={imgURL} />}
    <div className="col-span-1">
     <input
      type="text"
      placeholder="Title"
      name="title"
      value={categoryTitle}
      onInput={(e) => setCategoryTitle(e.target.value)}
      className="block w-full px-[1rem!important] py-[.5rem!important] text-sm border-[0!important] bg-zinc-50 focus:outline-[0] font-jost-regular placeholder:font-jost-regular"
     />
    </div>
    <div className="grid h-12 grid-cols-1 col-span-1 gap-4">
     <div className="self-stretch col-span-1">
      <input type="file" name="icon" className="hidden" />
      <button
       type="button"
       onClick={handleImg}
       className="w-full h-full transition-all duration-300 ease-in-out bg-green-100 border rounded-md cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
       Icon
      </button>
     </div>
    </div>
   </div>
  </Modal>
 )
}

export default CategoryForm
