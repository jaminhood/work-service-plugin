import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../constants"
import { AdminContext } from "./AdminContext"

const AdminProvider = ({ children }) => {
	const [user, setUser] = useState([])
	// const [wpNonce, setWPNonce] = useState([])
	const [categories, setCategories] = useState([])
	const [services, setServices] = useState([])
	const [bookings, setBookings] = useState([])
	const [activeChat, setActiveChat] = useState([])
	const [messages, setMessages] = useState([])
	const [editBooking, setEditBooking] = useState([])
	const [newsBanner, setNewsBanner] = useState([])
	const [trustedBy, setTrustedBy] = useState([])
	const [about, setAbout] = useState([])
	const [reason, setReason] = useState([])
	const [team, setTeam] = useState([])
	const [contact, setContact] = useState([])
	const [modalIsOpen, setModalIsOpen] = useState("")

	// const postConfig = { headers: { "Content-Type": "application/json", "X-WP-Nonce": wpNonce } }
	// const getConfig = { headers: { "X-WP-Nonce": wpNonce } }

	const resetModalIsOpen = () => {
		setModalIsOpen("")
	}

	const toggleModalIsOpen = modal => setModalIsOpen(modal)

	const getUserData = async () => {
		setUser(JSON.parse(localStorage.getItem(`ws-user`)))
	}

	const loadNewsBanner = async () => await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/news`).then(res => setNewsBanner(res.data))

	const loadTrustedBy = async () => await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/trust`).then(res => setTrustedBy(res.data))

	const loadAbout = async () => await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/about`).then(res => setAbout(res.data))

	const loadReason = async () => await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/reason`).then(res => setReason(res.data))

	const loadTeam = async () => await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/team`).then(res => setTeam(res.data))

	const loadContact = async () => {
		await axios.get(`${SITE_URL}wp-json/ws-api/v1/contact/get`).then(res => {
			setContact(res.data)
		})
	}

	const loadBookings = async () => {
		await axios.get(`${SITE_URL}wp-json/ws-api/v1/bookings/web/get?user_id=0`).then(res => {
			setBookings(res.data)
		})
	}

	const getAllCategories = async () => {
		// await axios.get(`${SITE_URL}wp-json/ws-api/v1/categories/web/get`).then((res) => {
		//  setCategories(res.data)
		// })
	}

	const getAllServices = async () => {
		// await axios.get(`${SITE_URL}wp-json/ws-api/v1/services/web/get`).then((res) => {
		//  setServices(res.data)
		// })
	}

	useEffect(async () => {
		// const { nonce } = window.wpApiSettings

		// setWPNonce(nonce)

		await getUserData()
			.then(async () => await loadNewsBanner())
			.then(async () => await loadTrustedBy())
			.then(async () => await loadAbout())
			.then(async () => await loadReason())
			.then(async () => await loadTeam())
			.then(async () => await loadContact())
			.then(async () => await getAllCategories())
			.then(async () => await getAllServices())
			.then(async () => await loadBookings())
	}, [])

	useEffect(() => {
		let msgs
		if (activeChat.user_id !== undefined) {
			msgs = setInterval(async () => {
				await axios.get(`${SITE_URL}wp-json/ws-api/v1/chats/web/get-user?user_id=${activeChat?.user_id}&booking_id=${activeChat?.booking_id}`).then(res => {
					setMessages(res.data)
				})
			}, 500)
		}

		return () => clearInterval(msgs)
	}, [activeChat])

	const handleActiveChat = async booking => {
		setActiveChat(booking)
	}

	const handleBooking = async booking_id => {
		setEditBooking(bookings.find(book => book.booking_id === booking_id))
	}

	const handleEditBookingForm = async params => {
		try {
			await axios.post(`${SITE_URL}wp-json/ws-api/v1/bookings/web/update`, params)
			location.reload()
		} catch (e) {
			throw new Error(e.message)
		}
	}

	const handleMessage = async msg => {
		const params = {
			user_id: activeChat.user_id,
			chat_type: activeChat.booking_id ? 1 : 0,
			chat_booking_id: activeChat.booking_id ? activeChat.booking_id : 0,
			chat_sender: `admin`,
			chat_message: msg,
		}

		await axios.post(`${SITE_URL}wp-json/ws-api/v1/chats/web/set`, params).then(res => {
			if (res.data === `Sent Successful`) {
				setMessages(prev => [...prev, params])
			}
		})
	}

	const handleNewsSubmit = async params => {
		await axios.post(`${SITE_URL}wp-json/ws-api/v1/admin/news`, params).then(res => {
			if (res.data === `Upload Successful`) {
				location.reload()
			}
		})
	}

	const handleTrustSubmit = async params => {
		await axios.post(`${SITE_URL}wp-json/ws-api/v1/admin/trust`, params).then(res => {
			if (res.data === `Upload Successful`) {
				location.reload()
			}
		})
	}

	const handleAboutSubmit = async params => {
		await axios.post(`${SITE_URL}wp-json/ws-api/v1/admin/about`, params).then(res => {
			if (res.data === `Upload Successful`) {
				location.reload()
			}
		})
	}

	const handleReasonSubmit = async params => {
		await axios.post(`${SITE_URL}wp-json/ws-api/v1/admin/reason`, params).then(res => {
			if (res.data === `Upload Successful`) {
				location.reload()
			}
		})
	}

	const handleTeamSubmit = async params => {
		await axios.post(`${SITE_URL}wp-json/ws-api/v1/admin/team`, params).then(res => {
			if (res.data === `Upload Successful`) {
				location.reload()
			}
		})
	}

	const handleTeamEdit = async params => {
		await axios.post(`${SITE_URL}wp-json/ws-api/v1/admin/team/update`, params).then(res => res.data === `Upload Successful` && location.reload())
	}

	const handleContactSubmit = async params => {
		await axios.post(`${SITE_URL}wp-json/ws-api/v1/contact/post`, params).then(res => {
			if (res.data === `Upload Successful`) {
				location.reload()
			}
		})
	}

	const handleDelete = async stmt => {
		await axios.delete(`${SITE_URL}wp-json/ws-api/v1/admin/${stmt}`).then(res => {
			if (res.status === 200) {
				location.reload()
			}
		})
	}

	const providerValues = {
		modalIsOpen,
		setModalIsOpen,
		resetModalIsOpen,
		toggleModalIsOpen,
		newsBanner,
		trustedBy,
		contact,
		reason,
		team,
		about,
		user,
		bookings,
		categories,
		services,
		activeChat,
		messages,
		editBooking,
		handleActiveChat,
		handleBooking,
		handleMessage,
		handleEditBookingForm,
		handleNewsSubmit,
		handleTrustSubmit,
		handleAboutSubmit,
		handleReasonSubmit,
		handleTeamSubmit,
		handleTeamEdit,
		handleContactSubmit,
		handleDelete,
	}

	return (
		<AdminContext.Provider value={providerValues}>
			<div>{children}</div>
		</AdminContext.Provider>
	)
}

export default AdminProvider
