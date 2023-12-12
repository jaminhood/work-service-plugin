import { useState } from "react"
import { AccordionBody } from "./AccordionBody"
import { AccordionHeader } from "./AccordionHeader"

const Accordion = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => setIsOpen(prev => !prev)

	return (
		<div className="w-full py-2">
			<AccordionHeader
				data={data.faqQuestion}
				id={data.faqID}
				handleClick={handleClick}
			/>
			{isOpen && <AccordionBody data={data.faqAnswer} />}
		</div>
	)
}

export { Accordion }
