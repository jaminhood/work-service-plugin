import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../constants"
import { AuthContext } from "./AuthContext"

const AuthProvider = (props) => {
 const btnStyle = `w-1/2 py-4 text-xl font-bold cursor-pointer`
 const activeStyle = `bg-main-primary text-zinc-50`

 const [mainScreen, setMainScreen] = useState(`login`)
 const [actionScreen, setActionScreen] = useState(`login`)
 const [loginStyle, setLoginStyle] = useState(`${btnStyle} ${activeStyle}`)
 const [registerStyle, setRegisterStyle] = useState(btnStyle)
 const [noticeMsg, setNoticeMsg] = useState(``)

 useEffect(() => {
  setTimeout(() => setNoticeMsg(``), 2000)
 }, [noticeMsg])

 const setScreen = (screen) => {
  setActionScreen(screen)
  setMainScreen(screen)
  screen === `login` ? setRegisterStyle(btnStyle) : setLoginStyle(btnStyle)
  screen === `login` ? setLoginStyle((prev) => `${prev} ${activeStyle}`) : setRegisterStyle((prev) => `${prev} ${activeStyle}`)
 }

 const toggleLoginScreen = () => setScreen(`login`)

 const toggleRegisterScreen = () => setScreen(`register`)

 const handleSignIn = async (params) => {
  setNoticeMsg(`Loading...`)
  const { username, password } = params

  const cannotLogin = username.trim() === `` && password.trim() === ``

  try {
   if (cannotLogin) {
    throw new Error(`Empty Field(s)`)
   }

   const { data } = await axios.post(`${SITE_URL}wp-json/ws-auth/v1/sign-in`, params)

   if (typeof data === `string` && data.includes(`not registered on this site`)) {
    throw new Error(`User Not Found`)
   }

   if (typeof data === `string` && data.includes(`is incorrect`)) {
    throw new Error(`Incorrect Password`)
   }

   localStorage.setItem(`ws-user`, JSON.stringify(data.data))

   setNoticeMsg(`Login Successful`)
   location.reload()
  } catch (e) {
   setNoticeMsg(e.message)
  }
 }

 const handleSignUp = async (params) => {
  setNoticeMsg(`Loading...`)
  const { firstname, lastname, email, phone, username, password, role } = params

  const cannotLogin =
   firstname.trim() === `` &&
   lastname.trim() === `` &&
   email.trim() === `` &&
   phone.trim() === `` &&
   username.trim() === `` &&
   password.trim() === `` &&
   retypePassword.trim() === `` &&
   role.trim() === ``

  try {
   if (cannotLogin) {
    throw new Error(`Empty Field(s)`)
   }

   const { data } = await axios.post(`${SITE_URL}wp-json/ws-auth/v1/register`, params)

   if (data.includes(`this email address have been used`)) {
    throw new Error(`E-mail Detected, Please Login`)
   }

   if (data.includes(`this username address have been used`)) {
    throw new Error(`Username Detected, Please Login`)
   }

   setNoticeMsg(data)
   location.reload()
  } catch (e) {
   setNoticeMsg(e.message)
  }
 }

 const providerValues = { noticeMsg, mainScreen, loginStyle, actionScreen, registerStyle, handleSignIn, handleSignUp, toggleLoginScreen, toggleRegisterScreen }

 return (
  <AuthContext.Provider value={providerValues}>
   <div className="grid items-center w-full h-screen grid-cols-1 md:grid-cols-2 bg-main-primary text-gray-50 font-jost-regular">{props.children}</div>
  </AuthContext.Provider>
 )
}

export default AuthProvider
