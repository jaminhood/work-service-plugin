import { useState } from "react"
import useImageUploader from "../../../../../hooks/useImageUploader"
import useAdminContext from "../../../../context/useAdminContext"
import Modal from "../../../../shared/Modal"
import ManagementModalImg from "./ManagementModalImg"

const ManagementModal = ({ toggleOpen }) => {
	const { imgID, imgURL, handleImg } = useImageUploader(`Choose Management Photo`, `Use This Photo`)
	const [name, setName] = useState(``)
	const [role, setRole] = useState(``)
	const { handleTeamSubmit } = useAdminContext()

	const handleSubmission = async () => {
		const params = { team_name: name, team_role: role, team_img: imgID }
		if (imgID > 0) {
			await handleTeamSubmit(params)
		}
	}

	return (
		<Modal
			toggleOpen={toggleOpen}
			modalTitle="Add Management"
			submit={handleSubmission}>
			{imgURL !== `` && <ManagementModalImg imgURL={imgURL} />}
			<div className="grid gap-4">
				<div className="col-span-1">
					<input
						type="file"
						name="icon"
						className="hidden"
					/>
					<button
						type="button"
						onClick={handleImg}
						className="w-full h-full py-3 transition-all duration-300 ease-in-out bg-green-100 border rounded-md cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
						Select Photo
					</button>
				</div>
				<div className="flex flex-col gap-2">
					<h4 className="text-base font-sansation-bold text-main-primary">Name</h4>
					<input
						type="text"
						placeholder="lorem ipsum"
						className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
						value={name}
						onInput={e => setName(e.target.value)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<h4 className="text-base font-sansation-bold text-main-primary">Role</h4>
					<input
						type="text"
						placeholder="lorem ipsum"
						className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
						value={role}
						onInput={e => setRole(e.target.value)}
					/>
				</div>
			</div>
		</Modal>
	)
}

export default ManagementModal
