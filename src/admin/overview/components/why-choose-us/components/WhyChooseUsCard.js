import { BsTrashFill } from "react-icons/bs"
import useAdminContext from "../../../../context/useAdminContext"

const WhyChooseUsCard = ({ benefit }) => {
	const { handleDelete } = useAdminContext()

	const deleteClicked = async () => await handleDelete(`reason?benefit_id=${benefit.benefitID}`)

	return (
		<div className="flex gap-4 py-2 my-1 border-y border-y-main-primary">
			<div className="relative w-[calc(100%-5rem)]">
				<h4 className="text-base font-sansation-bold">{benefit.benefitHeading}</h4>
				<p className="text-sm font-jost-regular opacity-70">{benefit.benefitParagraph}</p>
			</div>
			<div className="relative self-center w-20 overflow-hidden rounded-md">
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

export default WhyChooseUsCard
