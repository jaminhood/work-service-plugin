import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../../../constants"
import Box from "../../../../shared/box"
import useAdminContext from "../../../context/useAdminContext"
import { Accordion } from "./Accordion"
import { FAQsAccordionModal } from "./FAQsAccordionModal"

const FAQsAccordion = () => {
	const { modalIsOpen, setModalIsOpen, resetModalIsOpen } = useAdminContext()
	const [faqs, setFaqs] = useState([])

	const getFAQData = async () => await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/faqs`).then(({ data }) => setFaqs(data))

	useEffect(() => {
		getFAQData()
	}, [])

	const handleAdd = () => setModalIsOpen("addfaq")

	return (
		<>
			{modalIsOpen === "addfaq" && <FAQsAccordionModal toggleOpen={resetModalIsOpen} />}
			<div className="col-span-1 h-[80dvh] overflow-y-auto border-l-2 border-l-main-primary border-double">
				<Box
					cls="bg-gray-50 h-full overflow-y-auto"
					mainBoxHeading="Frequently Asked Questions"
					buttonTxt="Add"
					handleFormOpen={handleAdd}>
					{faqs.map((data, idx) => (
						<Accordion
							data={data}
							key={idx}
						/>
					))}
				</Box>
			</div>
		</>
	)
}

export { FAQsAccordion }
