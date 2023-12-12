import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../../../../constants"
import useAdminContext from "../../../../context/useAdminContext"

const DownloadsForm = () => {
	const { handleDownloadSubmit } = useAdminContext()
	const [ios, setIos] = useState(``)
	const [android, setAndroid] = useState(``)

	const getAboutData = async () =>
		await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/downloads`).then(({ data }) => {
			if (data.length > 0) {
				setIos(data[0].linkIOS)
				setAndroid(data[0].linkAndroid)
			}
		})

	useEffect(() => {
		getAboutData()
	}, [])

	const handleSubmission = async () => {
		const params = { ios, android }
		await handleDownloadSubmit(params)
	}

	return (
		<div className="grid gap-4 py-4">
			<div className="flex flex-col gap-2">
				<h4 className="text-base font-sansation-bold text-main-primary">~ IOS</h4>
				<input
					type="text"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={ios}
					onInput={e => setIos(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<h4 className="text-base font-sansation-bold text-main-primary">~ Android</h4>
				<input
					type="text"
					className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
					value={android}
					onInput={e => setAndroid(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<button
					type="button"
					onClick={handleSubmission}
					className="px-[2rem!important] py-[.5rem!important] transition-all duration-300 ease-in-out bg-green-100 border rounded-md cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
					Submit Links.
				</button>
			</div>
		</div>
	)
}

export default DownloadsForm
