import { useState } from "react"
import useImageUploader from "../../../../../hooks/useImageUploader"
import Modal from "../../../../shared/Modal"
import useServiceContext from "../../../context/useServiceContext"
import ServiceFormImg from "./ServiceFormImg"

const ServiceForm = ({ toggleOpen }) => {
	const { subCategories, handleServiceForm } = useServiceContext()
	const { imgID, imgURL, handleImg } = useImageUploader(`Choose Service Icon`, `Use This Icon`)
	const [serviceTitle, setServiceTitle] = useState(``)
	const [formSubCategory, setFormSubCategory] = useState(0)

	const handleSubmission = () => {
		if (formSubCategory !== `select` && serviceTitle.trim() !== `` && imgID !== 0) {
			const params = { serviceTitle, imgID, formSubCategory }
			handleServiceForm(params)
		} else {
			throw new Error(`Empty Field(s)`)
		}
	}

	return (
		<Modal
			toggleOpen={toggleOpen}
			modalTitle="Add Service"
			submit={handleSubmission}>
			<div className="grid grid-cols-1 gap-4">
				{imgURL !== `` && <ServiceFormImg imgURL={imgURL} />}
				<div className="col-span-1">
					<h3 className="text-lg font-sansation-bold">Service Form</h3>
				</div>
				<div className="col-span-1">
					<input
						type="text"
						placeholder="Title"
						name="title"
						value={serviceTitle}
						onInput={e => setServiceTitle(e.target.value)}
						className="block w-full px-[1rem!important] py-[.5rem!important] text-sm border-[0!important] bg-zinc-50 focus:outline-[0] font-jost-regular placeholder:font-jost-regular"
					/>
				</div>
				<div className="col-span-1">
					<select
						name="subcategory"
						value={formSubCategory}
						onChange={e => setFormSubCategory(e.target.value)}
						className="block w-full px-[1rem!important] py-[.5rem!important] text-sm border-[0!important] bg-zinc-50 focus:outline-[0] font-jost-regular placeholder:font-jost-regular">
						<option value="select">Select Sub Category</option>
						{subCategories.map(sub_category => (
							<option
								value={sub_category.subCategoryID}
								key={sub_category.subCategoryID}>
								{sub_category.subCategoryName}
							</option>
						))}
					</select>
				</div>
				<div className="grid grid-cols-1 col-span-1 gap-4 py-2">
					<div className="self-stretch col-span-1">
						<input
							type="file"
							name="icon"
							className="hidden"
						/>
						<button
							type="button"
							onClick={handleImg}
							className="w-full h-full py-3 transition-all duration-300 ease-in-out bg-green-100 border rounded-md cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
							Icon
						</button>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default ServiceForm
