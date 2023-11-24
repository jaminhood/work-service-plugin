import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../../../../constants"
import useAdminContext from "../../../../context/useAdminContext"

const AboutUsForm = () => {
	const { handleAboutSubmit } = useAdminContext()
	const [aboutStory, setAboutStory] = useState(``)
	const [expertise, setExpertise] = useState(``)
	const [convenience, setConvenience] = useState(``)
	const [trust, setTrust] = useState(``)
	const [innovation, setInnovation] = useState(``)

	const getAboutData = async () =>
		await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/about`).then(({ data }) => {
			setAboutStory(data[0].aboutStory)
			setExpertise(data[0].expertise)
			setConvenience(data[0].convenience)
			setTrust(data[0].trust)
			setInnovation(data[0].innovation)
		})

	useEffect(() => {
		getAboutData()
	}, [])

	const handleSubmission = async () => {
		const params = { aboutStory, expertise, convenience, trust, innovation }
		await handleAboutSubmit(params)
	}

	return (
		<div className="grid gap-4 py-4">
			<div className="flex flex-col gap-2">
				<h4 className="text-base font-sansation-bold text-main-primary">Our Story</h4>
				<textarea
					className="w-full h-40 px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					placeholder="lorem ipsum"
					value={aboutStory}
					onInput={e => setAboutStory(e.target.value)}></textarea>
			</div>
			<div className="flex flex-col gap-2">
				<h4 className="text-base font-sansation-bold text-main-primary">~ Expertise</h4>
				<textarea
					className="w-full h-20 px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					placeholder="lorem ipsum"
					value={expertise}
					onInput={e => setExpertise(e.target.value)}></textarea>
			</div>
			<div className="flex flex-col gap-2">
				<h4 className="text-base font-sansation-bold text-main-primary">~ Convenience</h4>
				<textarea
					className="w-full h-20 px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					placeholder="lorem ipsum"
					value={convenience}
					onInput={e => setConvenience(e.target.value)}></textarea>
			</div>
			<div className="flex flex-col gap-2">
				<h4 className="text-base font-sansation-bold text-main-primary">~ Trust</h4>
				<textarea
					className="w-full h-20 px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					placeholder="lorem ipsum"
					value={trust}
					onInput={e => setTrust(e.target.value)}></textarea>
			</div>
			<div className="flex flex-col gap-2">
				<h4 className="text-base font-sansation-bold text-main-primary">~ Innovation</h4>
				<textarea
					className="w-full h-20 px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					placeholder="lorem ipsum"
					value={innovation}
					onInput={e => setInnovation(e.target.value)}></textarea>
			</div>
			<div className="flex flex-col gap-2">
				<button
					type="button"
					onClick={handleSubmission}
					className="px-[2rem!important] py-[.5rem!important] transition-all duration-300 ease-in-out bg-green-100 border rounded-md cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
					Submit About.
				</button>
			</div>
		</div>
	)
}

export default AboutUsForm
