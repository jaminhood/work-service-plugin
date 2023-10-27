import useAuthContext from "../../context/useAuthContext"

const ActionSectionNavbar = () => {
 const { loginStyle, registerStyle, toggleLoginScreen, toggleRegisterScreen } =
  useAuthContext()

 return (
  <div className="flex items-center bg-gray-200">
   <button className={loginStyle} onClick={toggleLoginScreen}>
    Sign In
   </button>
   <button className={registerStyle} onClick={toggleRegisterScreen}>
    Sign Up
   </button>
  </div>
 )
}

export default ActionSectionNavbar
