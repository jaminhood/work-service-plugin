import Box from "../../../../shared/box"
import ManagementCard from "./components/ManagementCard"
import useAdminContext from "../../../context/useAdminContext"
import ManagementModal from "./components/ManagementModal"

const Management = () => {
 const { modalIsOpen, setModalIsOpen, resetModalIsOpen, team } = useAdminContext()

 return (
  <>
   {modalIsOpen === "management" && <ManagementModal toggleOpen={resetModalIsOpen} />}
   <Box cls="" mainBoxHeading="Management" buttonTxt="Add New" handleFormOpen={() => setModalIsOpen("management")}>
    {team.map((person) => (
     <ManagementCard key={person.team_id} person={person} />
    ))}
   </Box>
  </>
 )
}

export default Management
