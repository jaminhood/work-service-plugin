import Box from "../../../../shared/box"
import useAdminContext from "../../../context/useAdminContext"
import TrustedByBox from "./components/TrustedByBox"
import TrustedByModal from "./components/TrustedByModal"

const TrustedBy = () => {
 const { modalIsOpen, setModalIsOpen, resetModalIsOpen, trustedBy } = useAdminContext()

 return (
  <>
   {modalIsOpen === "trust" && <TrustedByModal toggleOpen={resetModalIsOpen} />}
   <Box cls="" mainBoxHeading="Trusted By" buttonTxt="Add Trust" handleFormOpen={() => setModalIsOpen("trust")}>
    {trustedBy.map((trusted) => (
     <TrustedByBox key={trusted.trusted_id} trusted={trusted} />
    ))}
   </Box>
  </>
 )
}

export default TrustedBy
