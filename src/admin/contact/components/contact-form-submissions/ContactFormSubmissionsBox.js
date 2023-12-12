import { AiOutlineEye } from "react-icons/ai"
import useAdminContext from "../../../context/useAdminContext"
import ContactFormSubmissionsBoxModal from "./ContactFormSubmissionsBoxModal"

const ContactFormSubmissionsBox = ({ data }) => {
	const { modalIsOpen, setModalIsOpen, resetModalIsOpen } = useAdminContext()

	const handleEdit = () => setModalIsOpen("contact-form")

	return (
		<>
			{modalIsOpen === "contact-form" && (
				<ContactFormSubmissionsBoxModal
					data={data}
					toggleOpen={resetModalIsOpen}
				/>
			)}
			<div className="flex justify-between py-2 my-1 border-y border-y-main-primary">
				<div className="relative self-center">
					<h4 className="text-sm font-sansation-bold">John Doe</h4>
				</div>
				<div className="relative self-center">
					<h4 className="text-sm font-sansation-bold">johndoe@office.im</h4>
				</div>
				<div className="relative self-center">
					<h4 className="text-sm font-sansation-bold">07040354706</h4>
				</div>
				<div className="relative self-center">
					<h4 className="text-sm font-sansation-bold">I'm A Mess</h4>
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

export { ContactFormSubmissionsBox }
