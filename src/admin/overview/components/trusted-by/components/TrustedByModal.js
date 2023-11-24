import useImageUploader from "../../../../../hooks/useImageUploader"
import useAdminContext from "../../../../context/useAdminContext"
import Modal from "../../../../shared/Modal"
import TrustedByModalImg from "./TrustedByModalImg"

const TrustedByModal = ({ toggleOpen }) => {
	const { imgID, imgURL, handleImg } = useImageUploader(`Choose Trust Logo`, `Use This Logo`)
	const { handleTrustSubmit } = useAdminContext()

	const handleSubmission = async () => {
		const param = { trusted_img: imgID }
		if (imgID > 0) {
			await handleTrustSubmit(param)
		}
	}

	return (
		<Modal
			toggleOpen={toggleOpen}
			modalTitle="Add Trust"
			submit={handleSubmission}>
			{imgURL !== `` && <TrustedByModalImg imgURL={imgURL} />}
			<div className="grid grid-cols-1 gap-8">
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
						Trust Image
					</button>
				</div>
			</div>
		</Modal>
	)
}

export default TrustedByModal
