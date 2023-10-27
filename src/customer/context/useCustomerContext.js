import { useContext } from "react"
import { CustomerContext } from "./CustomerContext"

const useCustomerContext = () => {
 const AllCustomerContext = useContext(CustomerContext)
 if (AllCustomerContext === undefined) {
  throw new Error("useCustomerContext must be used within a CustomerProvider")
 }

 return AllCustomerContext
}
export default useCustomerContext
