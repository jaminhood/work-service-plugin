import { BsTrashFill } from "react-icons/bs"
import useAdminContext from "../../../../context/useAdminContext"

const TrustedByBox = ({ trusted }) => {
	const { handleDelete } = useAdminContext()

	const deleteClicked = async () => await handleDelete(`trust?trust_id=${trusted.trustedId}`)

	return (
		<div className="flex items-center justify-between gap-4 py-2 my-1 border-y border-y-main-primary">
			<div className="relative overflow-hidden rounded-md">
				<img
					src={trusted.trusted_img}
					className="object-cover w-20"
					alt=""
				/>
			</div>
			<div className="relative">
				<div className="flex gap-2">
					<button
						type="button"
						onClick={deleteClicked}
						className="p-2 transition-all duration-300 ease-in-out bg-green-100 border rounded-lg cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
						<BsTrashFill size={20} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default TrustedByBox
