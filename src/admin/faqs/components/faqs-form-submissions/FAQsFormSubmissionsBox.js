import { AiOutlineEye } from "react-icons/ai"
import useAdminContext from "../../../context/useAdminContext"
import { FAQsFormSubmissionsBoxModal } from "./FAQsFormSubmissionsBoxModal"

const FAQsFormSubmissionsBox = ({ data }) => {
	const { modalIsOpen, setModalIsOpen, resetModalIsOpen } = useAdminContext()

	const handleEdit = () => setModalIsOpen("faq-form")

	return (
		<>
			{modalIsOpen === "faq-form" && (
				<FAQsFormSubmissionsBoxModal
					data={data}
					toggleOpen={resetModalIsOpen}
				/>
			)}
			<div className="flex justify-between py-2 my-1 border-y border-y-main-primary">
				<div className="relative self-center">
					<h4 className="text-base font-sansation-bold">John Doe</h4>
				</div>
				<div className="relative self-center">
					<h4 className="text-base font-sansation-bold">johndoe@office.im</h4>
				</div>
				<div className="relative self-center overflow-hidden">
					<button
						type="button"
						onClick={handleEdit}
						className="p-2 transition-all duration-300 ease-in-out bg-green-100 border rounded-lg cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
						<AiOutlineEye size={20} />
					</button>
				</div>
			</div>
		</>
	)
}

export { FAQsFormSubmissionsBox }
