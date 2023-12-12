import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../../../constants"
import Box from "../../../../shared/box"
import useAdminContext from "../../../context/useAdminContext"
import { ContactInfoContent } from "./ContactInfoContent"

const ContactInfo = () => {
	const { handleContactSubmit } = useAdminContext()
	const [location, setLocation] = useState(``)
	const [locationLink, setLocationLink] = useState(``)
	const [email, setEmail] = useState(``)
	const [facebook, setFacebook] = useState(``)
	const [facebookLink, setFacebookLink] = useState(``)
	const [whatsApp, setWhatsApp] = useState(``)
	const [whatsAppLink, setWhatsAppLink] = useState(``)
	const [phoneNumber, setPhoneNumber] = useState(``)
	const [linkedIn, setLinkedIn] = useState(``)
	const [linkedInLink, setLinkedInLink] = useState(``)
	const [instagram, setInstagram] = useState(``)
	const [instagramLink, setInstagramLink] = useState(``)

	const ContactInfoContentProps = {
		location,
		locationLink,
		email,
		facebook,
		facebookLink,
		whatsApp,
		whatsAppLink,
		phoneNumber,
		linkedIn,
		linkedInLink,
		instagram,
		instagramLink,
		setLocation,
		setLocationLink,
		setEmail,
		setFacebook,
		setFacebookLink,
		setWhatsApp,
		setWhatsAppLink,
		setPhoneNumber,
		setLinkedIn,
		setLinkedInLink,
		setInstagram,
		setInstagramLink,
	}

	const getAboutData = async () =>
		await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/contacts`).then(({ data }) => {
			if (data.length > 0) {
				setLocation(data[data.length - 1].contactLocation)
				setLocationLink(data[data.length - 1].contactLocationLink)
				setEmail(data[data.length - 1].contactMail)
				setFacebook(data[data.length - 1].contactFacebook)
				setFacebookLink(data[data.length - 1].contactFacebookLink)
				setWhatsApp(data[data.length - 1].contactWhatsApp)
				setWhatsAppLink(data[data.length - 1].contactWhatsAppLink)
				setPhoneNumber(data[data.length - 1].contactPhone)
				setLinkedIn(data[data.length - 1].contactLinkedIn)
				setLinkedInLink(data[data.length - 1].contactLinkedInLink)
				setInstagram(data[data.length - 1].contactInstagram)
				setInstagramLink(data[data.length - 1].contactInstagramLink)
			}
		})

	useEffect(() => {
		getAboutData()
	}, [])

	const handleSubmission = async () => {
		const params = { location, locationLink, email, facebook, facebookLink, whatsApp, whatsAppLink, phoneNumber, linkedIn, linkedInLink, instagram, instagramLink }
		await handleContactSubmit(params)
	}

	return (
		<div className="col-span-1 h-[80dvh] overflow-y-auto border-l-2 border-l-main-primary border-double">
			<Box
				cls="bg-gray-50 h-full overflow-y-auto"
				mainBoxHeading="Contact Info"
				buttonTxt="Submit"
				handleFormOpen={handleSubmission}>
				<ContactInfoContent {...ContactInfoContentProps} />
			</Box>
		</div>
	)
}

export { ContactInfo }
