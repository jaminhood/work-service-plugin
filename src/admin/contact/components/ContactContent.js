import { ContactFormSubmissions } from "./contact-form-submissions"
import { ContactInfo } from "./contact-info"

const ContactContent = () => {
	//  const { editBooking } = useAdminContext()

	return (
		<div className="relative grid items-stretch w-full grid-cols-3 h-[80dvh] text-zinc-900">
			<ContactFormSubmissions />
			<ContactInfo />
		</div>
	)
}

export { ContactContent }
