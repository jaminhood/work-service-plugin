import { useEffect, useState } from "react"
import Input from "../components/Input"
import useAuthContext from "../context/useAuthContext"

const WSRegister = () => {
 const { noticeMsg, handleSignUp } = useAuthContext()
 const [isDisabled, setIsDisabled] = useState(true)
 const [formVal, setFormVal] = useState({
  firstname: ``,
  lastname: ``,
  email: ``,
  phone: ``,
  username: ``,
  password: ``,
  retypePassword: ``,
  role: ``,
 })

 const { firstname, lastname, email, phone, username, password, retypePassword, role } = formVal

 useEffect(() => {
  setIsDisabled(firstname === `` || lastname === `` || email === `` || phone === `` || username === `` || password === `` || retypePassword === `` || password !== retypePassword || role === ``)
 }, [firstname, lastname, email, phone, username, password, retypePassword, role])

 const handleInput = (e) => {
  const { name, value } = e.target
  setFormVal((prev) => ({ ...prev, [name]: value }))
 }

 const handleRegister = async () => {
  await handleSignUp(formVal)
  setFormVal((prev) => ({
   ...prev,
   firstname: ``,
   lastname: ``,
   email: ``,
   phone: ``,
   username: ``,
   password: ``,
   retypePassword: ``,
   role: ``,
  }))
 }

 return (
  <div className="flex flex-col gap-4">
   {noticeMsg !== `` && <p className="w-full px-4 py-2 text-sm font-bold text-center bg-main-primary text-gray-50">{noticeMsg}</p>}
   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <Input type="text" label="Firstname" id="firstname" placeholder="John" value={formVal.firstname} handleInput={handleInput} />
    <Input type="text" label="Lastname" id="lastname" placeholder="Doe" value={formVal.lastname} handleInput={handleInput} />
   </div>
   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <Input type="email" label="E-mail" id="email" placeholder="johndoe@mail.com" value={formVal.email} handleInput={handleInput} />
    <Input type="tel" label="Phone Number" id="phone" placeholder="1234567" value={formVal.phone} handleInput={handleInput} />
   </div>
   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <Input type="text" label="Username" id="username" placeholder="JohnDoe" value={formVal.username} handleInput={handleInput} />
    <Input type="password" label="Password" id="password" placeholder="*****" value={formVal.password} handleInput={handleInput} />
   </div>
   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <Input type="password" label="Retype Password" id="retypePassword" placeholder="*****" value={formVal.retypePassword} handleInput={handleInput} />
    <div className="">
     <label htmlFor="role" className="block mb-2 text-sm font-bold cursor-pointer">
      Role:
     </label>
     <select name="role" id="role" className="block w-full px-4 py-2 text-sm border border-gray-300 focus:outline-[0]" onChange={handleInput}>
      <option value="">Select Role</option>
      <option value="customer">Customer</option>
      <option value="expert">Expert</option>
     </select>
    </div>
   </div>
   <button
    className="block w-full px-4 py-2 text-sm font-bold transition-all duration-500 ease-in-out border border-main-primary bg-main-primary hover:bg-transparent hover:text-main-primary text-gray-50 disabled:opacity-50"
    onClick={handleRegister}
    disabled={isDisabled}>
    Register
   </button>
  </div>
 )
}

export default WSRegister
