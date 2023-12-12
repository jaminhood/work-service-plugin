import { FAQsAccordion } from "./faqs-accordions"
import { FAQsFormSubmissions } from "./faqs-form-submissions"

const FAQsContent = () => {
	//  const { editBooking } = useAdminContext()

	return (
		<div className="relative grid items-stretch w-full grid-cols-3 h-[80dvh] text-zinc-900">
			<FAQsFormSubmissions />
			<FAQsAccordion />
		</div>
	)
}

export { FAQsContent }
