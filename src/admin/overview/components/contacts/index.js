import { AiOutlineWhatsApp } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { AiTwotoneHome } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import Box from "../../../../shared/box"
import ContactBox from "./components/ContactBox"
import ContactModal from "./components/ContactModal"
import useAdminContext from "../../../context/useAdminContext"

const Contacts = () => {
 const { modalIsOpen, setModalIsOpen, resetModalIsOpen, contact } = useAdminContext()

 return (
  <>
   {modalIsOpen === "contact" && <ContactModal toggleOpen={resetModalIsOpen} />}
   <Box cls="" mainBoxHeading="Contacts" buttonTxt="Edit Contact" handleFormOpen={() => setModalIsOpen("contact")}>
    <ContactBox>
     <BsFillTelephoneFill size={20} />
     <h4 className="text-base font-sansation-bold">{contact.contact_phone}</h4>
    </ContactBox>
    <ContactBox>
     <MdEmail size={20} />
     <h4 className="text-base font-sansation-bold">{contact.contact_email}</h4>
    </ContactBox>
    <ContactBox>
     <AiTwotoneHome size={20} />
     <h4 className="text-base font-sansation-bold">{contact.contact_address}</h4>
    </ContactBox>
    <ContactBox>
     <AiFillLinkedin size={20} />
     <h4 className="text-base font-sansation-bold">{contact.contact_facebook}</h4>
    </ContactBox>
    <ContactBox>
     <BsInstagram size={20} />
     <h4 className="text-base font-sansation-bold">{contact.contact_instagram}</h4>
    </ContactBox>
    <ContactBox>
     <AiOutlineWhatsApp size={20} />
     <h4 className="text-base font-sansation-bold">{contact.contact_whatsapp}</h4>
    </ContactBox>
   </Box>
  </>
 )
}

export default Contacts
