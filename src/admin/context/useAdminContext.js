import { useContext } from "react"
import { AdminContext } from "./AdminContext"

const useAdminContext = () => {
 const AllAdminContext = useContext(AdminContext)
 if (AllAdminContext === undefined) {
  throw new Error("useAdminContext must be used within a AdminProvider")
 }

 return AllAdminContext
}
export default useAdminContext
