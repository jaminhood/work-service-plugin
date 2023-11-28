import { BsTrashFill } from "react-icons/bs"
import { ImPencil2 } from "react-icons/im"
import useAdminContext from "../../../../context/useAdminContext"
import EditManagementModal from "./EditManagementModal"

const ManagementCard = ({ person }) => {
	const { modalIsOpen, setModalIsOpen, resetModalIsOpen, handleDelete } = useAdminContext()

	const deleteClicked = async () => await handleDelete(`team?team_id=${person.teamID}`)

	const handleEdit = () => setModalIsOpen("edit-management")

	return (
		<>
			{modalIsOpen === "edit-management" && (
				<EditManagementModal
					toggleOpen={resetModalIsOpen}
					id={person.teamID}
				/>
			)}
			<div className="flex gap-4 py-2 my-1 border-y border-y-main-primary">
				<div className="relative w-20 h-20 overflow-hidden rounded-md">
					<img
						src={person.team_img}
						className="object-cover w-full h-full"
						alt=""
					/>
				</div>
				<div className="relative w-[calc(100%-12rem)]">
					<h4 className="text-base font-sansation-bold">{person.teamName}</h4>
					<h6 className="text-sm font-sansation-bold">~ {person.teamRole}</h6>
				</div>
				<div className="relative self-center overflow-hidden rounded-md w-28">
					<div className="flex gap-2">
						<button
							type="button"
							onClick={handleEdit}
							className="p-2 transition-all duration-300 ease-in-out bg-green-100 border rounded-lg cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
							<ImPencil2 size={20} />
						</button>
						<button
							type="button"
							onClick={deleteClicked}
							className="p-2 transition-all duration-300 ease-in-out bg-green-100 border rounded-lg cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
							<BsTrashFill size={20} />
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default ManagementCard
