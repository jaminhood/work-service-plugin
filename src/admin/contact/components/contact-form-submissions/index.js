import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../../../constants"
import Box from "../../../../shared/box"
import { ContactFormSubmissionsBox } from "./ContactFormSubmissionsBox"

const ContactFormSubmissions = () => {
	const [submissions, setSubmissions] = useState([])

	const getData = async () => await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/contact-form`).then(({ data }) => console.log(data))

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="col-span-2 h-[80dvh] overflow-y-auto">
			<Box
				cls="bg-gray-50 h-full overflow-y-auto"
				mainBoxHeading="Form Submissions">
				{submissions.map((data, idx) => (
					<ContactFormSubmissionsBox
						key={idx}
						data={data}
					/>
				))}
			</Box>
		</div>
	)
}

export { ContactFormSubmissions }
