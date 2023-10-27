import { useEffect, useState } from "react"
import Input from "../components/Input"
import useAuthContext from "../context/useAuthContext"

const WSLogin = () => {
 const { noticeMsg, handleSignIn } = useAuthContext()
 const [isDisabled, setIsDisabled] = useState(true)
 const [formVal, setFormVal] = useState({
  username: ``,
  password: ``,
 })

 useEffect(() => {
  if (formVal.username !== `` && formVal.password !== ``) {
   setIsDisabled(false)
  } else {
   setIsDisabled(true)
  }
 }, [formVal.username, formVal.password])

 const handleInput = (e) => {
  const { name, value } = e.target
  setFormVal((prev) => ({ ...prev, [name]: value }))
 }

 const handleLogin = async () => {
  await handleSignIn(formVal)
  setFormVal((prev) => ({ ...prev, username: ``, password: `` }))
 }

 return (
  <div className="flex flex-col gap-4">
   {noticeMsg !== `` && <p className="w-full px-4 py-2 text-sm font-bold text-center bg-main-primary text-gray-50">{noticeMsg}</p>}
   <Input type="text" label="Username" id="username" placeholder="John Doe" value={formVal.username} handleInput={handleInput} />
   <Input type="password" label="Password" id="password" placeholder="*****" value={formVal.password} handleInput={handleInput} />
   <button
    className="block w-full px-4 py-2 text-sm font-bold transition-all duration-500 ease-in-out border border-main-primary bg-main-primary hover:bg-transparent hover:text-main-primary text-gray-50 disabled:opacity-50"
    onClick={handleLogin}
    disabled={isDisabled}>
    Login
   </button>
  </div>
 )
}

export default WSLogin
