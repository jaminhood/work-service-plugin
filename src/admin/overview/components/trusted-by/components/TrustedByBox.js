import axios from "axios"
import { BsTrashFill } from "react-icons/bs"
import { SITE_URL } from "../../../../../constants"

const TrustedByBox = ({ trusted }) => {
	const handleDelete = async () => {
		await axios.delete(`${SITE_URL}wp-json/ws-api/v1/admin/trust?trust_id=${trusted.trustedID}`).then(res => {
			if (res.status === 200) {
				location.reload()
			}
		})
	}

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
						onClick={handleDelete}
						className="p-2 transition-all duration-300 ease-in-out bg-green-100 border rounded-lg cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
						<BsTrashFill size={20} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default TrustedByBox
