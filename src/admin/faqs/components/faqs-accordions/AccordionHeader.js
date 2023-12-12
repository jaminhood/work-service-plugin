import { BsTrashFill } from "react-icons/bs"
import useAdminContext from "../../../context/useAdminContext"

const AccordionHeader = ({ data, id, handleClick }) => {
	const { handleDelete } = useAdminContext()

	const deleteClicked = async () => await handleDelete(`faqs?id=${id}`)

	return (
		<div
			className="flex items-center justify-between w-full cursor-pointer"
			onClick={handleClick}>
			<h4 className="text-base font-bold font-sansation-bold text-main-primary">{data}</h4>
			<span
				className="cursor-pointer text-main-primary"
				onClick={deleteClicked}>
				<BsTrashFill size={20} />
			</span>
		</div>
	)
}

export { AccordionHeader }
