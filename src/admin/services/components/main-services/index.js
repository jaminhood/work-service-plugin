import Box from "../../../../shared/box"
import useAdminContext from "../../../context/useAdminContext"
import ServiceForm from "./service-form"
import ServicesTable from "./services-table"

const MainServices = () => {
 const { modalIsOpen, setModalIsOpen, resetModalIsOpen } = useAdminContext()

 return (
  <>
   {modalIsOpen === "services" && <ServiceForm toggleOpen={resetModalIsOpen} />}
   <Box cls="col-span-2" mainBoxHeading="Services" buttonTxt="Add Service" handleFormOpen={() => setModalIsOpen("services")}>
    <ServicesTable />
   </Box>
  </>
 )
}

export default MainServices
