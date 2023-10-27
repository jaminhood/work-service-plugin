import React from "react"
import ReactDOM from "react-dom"
import WSAuthLayout from "../auth/Layout"
import WSRegister from "../auth/register"

export const AuthRoutes = () => {
 let element = document.getElementById("ws-auth-sign-in")
 if (typeof element !== "undefined" && element !== null) {
  ReactDOM.render(<WSAuthLayout />, document.getElementById("ws-auth-sign-in"))
 }

 element = document.getElementById("ws-auth-sign-up")
 if (typeof element !== "undefined" && element !== null) {
  ReactDOM.render(<WSRegister />, document.getElementById("ws-auth-sign-up"))
 }

 element = document.getElementById("ws-auth-forgot-password")
 if (typeof element !== "undefined" && element !== null) {
  ReactDOM.render(
   <WSAuthLayout />,
   document.getElementById("ws-auth-forgot-password"),
  )
 }
}
