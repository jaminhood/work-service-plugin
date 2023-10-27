import { useContext } from "react"
import { AuthContext } from "./AuthContext"

const useAuthContext = () => {
 const AllAuthContext = useContext(AuthContext)
 if (AllAuthContext === undefined) {
  throw new Error("useAuthContext must be used within a AuthStepProvider")
 }

 return AllAuthContext
}
export default useAuthContext
