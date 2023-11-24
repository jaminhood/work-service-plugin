import { useState } from "react"
import useImageUploader from "../../../../../hooks/useImageUploader"
import Modal from "../../../../shared/Modal"
import useServiceContext from "../../../context/useServiceContext"
import SubCategoryFormImg from "./SubCategoryFormImg"

const SubCategoryForm = ({ toggleOpen }) => {
	const { imgID, imgURL, handleImg } = useImageUploader(`Choose Category Icon`, `Use This Icon`)
	const [subCategoryTitle, setSubCategoryTitle] = useState(``)
	const [formCategory, setFormCategory] = useState(`select`)
	const { categories, handleSubCategoryForm } = useServiceContext()

	const handleSubmission = () => {
		if (formCategory !== `select` && subCategoryTitle.trim() !== `` && imgID !== 0) {
			const params = { subCategoryTitle, imgID, formCategory }
			handleSubCategoryForm(params)
		} else {
			throw new Error(`Empty Field(s)`)
		}
	}

	return (
		<Modal
			toggleOpen={toggleOpen}
			modalTitle="Add Sub Category"
			submit={handleSubmission}>
			<div className="grid grid-cols-1 gap-4">
				{imgURL !== `` && <SubCategoryFormImg imgURL={imgURL} />}
				<div className="col-span-1">
					<input
						type="text"
						placeholder="Title"
						name="title"
						value={subCategoryTitle}
						onInput={e => setSubCategoryTitle(e.target.value)}
						className="block w-full px-[1rem!important] py-[.5rem!important] text-sm border-[0!important] bg-zinc-50 focus:outline-[0] font-jost-regular placeholder:font-jost-regular"
					/>
				</div>
				<div className="col-span-1">
					<select
						name="category"
						value={formCategory}
						onChange={e => setFormCategory(e.target.value)}
						className="block w-full px-[1rem!important] py-[.5rem!important] text-sm border-[0!important] bg-zinc-50 focus:outline-[0] font-jost-regular placeholder:font-jost-regular">
						<option
							value="select"
							className="w-full">
							Select Category
						</option>
						{categories.map(category => (
							<option
								value={category.categoryID}
								selected={category.categoryID === formCategory}
								key={category.categoryID}
								className="w-full">
								{category.categoryName}
							</option>
						))}
					</select>
				</div>
				<div className="grid h-12 grid-cols-1 col-span-1 gap-4">
					<div className="self-stretch col-span-1">
						<input
							type="file"
							name="icon"
							className="hidden"
						/>
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

export default SubCategoryForm
