import { useState } from "react"
import useAdminContext from "../../../context/useAdminContext"
import Modal from "../../../shared/Modal"

const FAQsAccordionModal = ({ toggleOpen }) => {
	const { handleFAQSubmit } = useAdminContext()
	const [question, setQuestion] = useState(``)
	const [answer, setAnswer] = useState(``)

	const handleSubmission = async () => {
		const params = { faqQuestion: question, faqAnswer: answer }
		await handleFAQSubmit(params)
	}

	return (
		<Modal
			toggleOpen={toggleOpen}
			modalTitle="Add Modal"
			submit={handleSubmission}>
			<div className="grid grid-cols-1 gap-4">
				<div className="flex flex-col gap-2">
					<h4 className="text-base font-sansation-bold text-main-primary">Question</h4>
					<input
						type="text"
						className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
						value={question}
						onInput={e => setQuestion(e.target.value)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<h4 className="text-base font-sansation-bold text-main-primary">Answer</h4>
					<input
						type="text"
						className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
						value={answer}
						onInput={e => setAnswer(e.target.value)}
					/>
				</div>
			</div>
		</Modal>
	)
}

export { FAQsAccordionModal }
