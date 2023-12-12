import Modal from "../../../shared/Modal"

const ContactFormSubmissionsBoxModal = ({ toggleOpen, data }) => {
	return (
		<Modal
			toggleOpen={toggleOpen}
			modalTitle="">
			<div className="grid gap-4">
				<div className="col-span-1">
					<h4 className="text-lg font-sansation-bold">John Doe</h4>
				</div>
				<div className="flex flex-col gap-2">
					<h4 className="text-sm font-jost-regular">johndoe@office.im</h4>
				</div>
				<div className="flex flex-col gap-2">
					<h4 className="text-sm font-jost-regular">07040354706</h4>
				</div>
				<div className="flex flex-col gap-2">
					<h4 className="text-base font-jost-regular">I'm A Mess</h4>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-sm font-jost-regular">🔶lorem ipsum </p>
				</div>
			</div>
		</Modal>
	)
}

export default ContactFormSubmissionsBoxModal
