import React from "react"
import ReactDOM from "react-dom"
import CustomerBookings from "../customer/bookings"
import CustomerChatPage from "../customer/chat"
import CustomerOverviewPage from "../customer/overview"
import CustomerProfileSettings from "../customer/profile-settings"
import CustomerServicePage from "../customer/service"
import CustomerServicesPage from "../customer/services"
import CustomerSettingsPage from "../customer/settings"
import Logout from "../shared/logout"

export const CustomerRoutes = () => {
 let element = document.getElementById("ws-customer-dashboard")
 if (typeof element !== "undefined" && element !== null) {
  ReactDOM.render(<CustomerOverviewPage />, document.getElementById("ws-customer-dashboard"))
 }

 element = document.getElementById("ws-customer-services")
 if (typeof element !== "undefined" && element !== null) {
  ReactDOM.render(<CustomerServicesPage />, document.getElementById("ws-customer-services"))
 }

 element = document.getElementById("ws-customer-single-service")
 if (typeof element !== "undefined" && element !== null) {
  ReactDOM.render(<CustomerServicePage />, document.getElementById("ws-customer-single-service"))
 }

 element = document.getElementById("ws-customer-bookings")
 if (typeof element !== "undefined" && element !== null) {
  ReactDOM.render(<CustomerBookings />, document.getElementById("ws-customer-bookings"))
 }

 element = document.getElementById("ws-customer-chat")
 if (typeof element !== "undefined" && element !== null) {
  ReactDOM.render(<CustomerChatPage />, document.getElementById("ws-customer-chat"))
 }

 element = document.getElementById("ws-customer-settings")
 if (typeof element !== "undefined" && element !== null) {
  ReactDOM.render(<CustomerSettingsPage />, document.getElementById("ws-customer-settings"))
 }

 element = document.getElementById("ws-customer-profile-settings")
 if (typeof element !== "undefined" && element !== null) {
  ReactDOM.render(<CustomerProfileSettings />, document.getElementById("ws-customer-profile-settings"))
 }

 element = document.getElementById("ws-customer-logout")
 if (typeof element !== "undefined" && element !== null) {
  ReactDOM.render(<Logout />, document.getElementById("ws-customer-logout"))
 }
}
