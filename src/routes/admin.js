import React from "react"
import ReactDOM from "react-dom"
import ChatsPage from "../admin/chats"
import { Contact } from "../admin/contact"
import { FAQs } from "../admin/faqs"
import OrdersPage from "../admin/orders"
import OverviewPage from "../admin/overview"
import ServicesPage from "../admin/services"
import "../style/style.scss"

export const AdminRoutes = () => {
	let element = document.getElementById("ws-admin-general-app")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<OverviewPage />, document.getElementById("ws-admin-general-app"))
	}

	element = document.getElementById("ws-admin-services-app")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<ServicesPage />, document.getElementById("ws-admin-services-app"))
	}

	element = document.getElementById("ws-admin-orders-app")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<OrdersPage />, document.getElementById("ws-admin-orders-app"))
	}

	element = document.getElementById("ws-admin-chats-app")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<ChatsPage />, document.getElementById("ws-admin-chats-app"))
	}

	element = document.getElementById("ws-admin-faqs-app")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<FAQs />, document.getElementById("ws-admin-faqs-app"))
	}

	element = document.getElementById("ws-admin-contact-app")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<Contact />, document.getElementById("ws-admin-contact-app"))
	}
}
