import useImageUploader from "../../../../../hooks/useImageUploader"
import useAdminContext from "../../../../context/useAdminContext"
import Modal from "../../../../shared/Modal"
import NewsModalImg from "./NewsModalImg"

const NewsModal = ({ toggleOpen }) => {
	const { imgID, imgURL, handleImg } = useImageUploader(`Choose News Banner`, `Use This Banner`)
	const { handleNewsSubmit } = useAdminContext()

	const handleSubmission = async () => {
		const param = { newsImg: imgID }
		if (imgID > 0) {
			await handleNewsSubmit(param)
		}
	}

	return (
		<Modal
			toggleOpen={toggleOpen}
			modalTitle="Add News"
			submit={handleSubmission}>
			{imgURL !== `` && <NewsModalImg imgURL={imgURL} />}
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
						News Image
					</button>
				</div>
			</div>
		</Modal>
	)
}

export default NewsModal
