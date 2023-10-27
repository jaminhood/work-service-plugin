import Box from "../../../../shared/box"
import WhyChooseUsCard from "./components/WhyChooseUsCard"
import useAdminContext from "../../../context/useAdminContext"
import WhyChooseUsModal from "./components/WhyChooseUsModal"

const WhyChooseUs = () => {
 const { modalIsOpen, setModalIsOpen, resetModalIsOpen, reason } = useAdminContext()

 return (
  <>
   {modalIsOpen === "reason" && <WhyChooseUsModal toggleOpen={resetModalIsOpen} />}
   <Box cls="" mainBoxHeading="Why Choose Us" buttonTxt="Add New" handleFormOpen={() => setModalIsOpen("reason")}>
    {reason.map((benefit) => (
     <WhyChooseUsCard key={benefit.benefit_id} benefit={benefit} />
    ))}
   </Box>
  </>
 )
}

export default WhyChooseUs
