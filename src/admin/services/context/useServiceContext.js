import { useContext } from "react"
import { ServiceContext } from "./ServiceContext"

const useServiceContext = () => {
 const AllServiceContext = useContext(ServiceContext)
 if (AllServiceContext === undefined) {
  throw new Error("useServiceContext must be used within a AuthStepProvider")
 }

 return AllServiceContext
}
export default useServiceContext
