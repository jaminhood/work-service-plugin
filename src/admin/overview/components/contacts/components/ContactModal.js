import { AiOutlineWhatsApp } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { AiTwotoneHome } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import Modal from "../../../../shared/Modal"
import useAdminContext from "../../../../context/useAdminContext"
import { useEffect, useState } from "react"

const ContactModal = ({ toggleOpen }) => {
 const { contact, handleContactSubmit } = useAdminContext()

 const [phoneNumber, setPhoneNumber] = useState(``)
 const [email, setEmail] = useState(``)
 const [address, setAddress] = useState(``)
 const [linkedIn, setLinkedIn] = useState(``)
 const [instagram, setInstagram] = useState(``)
 const [whatsApp, setWhatsApp] = useState(``)

 useEffect(() => {
  setPhoneNumber(contact.contact_phone)
  setEmail(contact.contact_email)
  setAddress(contact.contact_address)
  setLinkedIn(contact.contact_facebook)
  setInstagram(contact.contact_whatsapp)
  setWhatsApp(contact.contact_instagram)
 }, [contact])

 const handleSubmission = async () => {
  const params = {
   contact_phone: phoneNumber,
   contact_email: email,
   contact_address: address,
   contact_facebook: linkedIn,
   contact_instagram: instagram,
   contact_whatsapp: whatsApp,
  }
  await handleContactSubmit(params)
 }

 return (
  <Modal toggleOpen={toggleOpen} modalTitle="Add Reason" submit={handleSubmission}>
   <div className="grid gap-4">
    <div className="flex flex-col gap-2">
     <h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">
      <BsFillTelephoneFill size={15} /> Phone Number:
     </h4>
     <input
      type="text"
      placeholder="+234 123 456 7890"
      className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
      value={phoneNumber}
      onInput={(e) => setPhoneNumber(e.target.value)}
     />
    </div>
    <div className="flex flex-col gap-2">
     <h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">
      <MdEmail size={15} /> E-mail:
     </h4>
     <input
      type="text"
      placeholder="admin@myworkservice.com"
      className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
      value={email}
      onInput={(e) => setEmail(e.target.value)}
     />
    </div>
    <div className="flex flex-col gap-2">
     <h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">
      <AiTwotoneHome size={15} /> Appartment:
     </h4>
     <input
      type="text"
      placeholder="flat 5, Road 12."
      className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
      value={address}
      onInput={(e) => setAddress(e.target.value)}
     />
    </div>
    <div className="flex flex-col gap-2">
     <h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">
      <AiFillLinkedin size={15} /> LinkedIn:
     </h4>
     <input
      type="text"
      placeholder="Work Service"
      className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
      value={linkedIn}
      onInput={(e) => setLinkedIn(e.target.value)}
     />
    </div>
    <div className="flex flex-col gap-2">
     <h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">
      <BsInstagram size={15} /> Instagram:
     </h4>
     <input
      type="text"
      placeholder="Work Service"
      className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
      value={instagram}
      onInput={(e) => setInstagram(e.target.value)}
     />
    </div>
    <div className="flex flex-col gap-2">
     <h4 className="flex items-center gap-2 text-base font-sansation-bold text-main-primary">
      <AiOutlineWhatsApp size={15} /> WhatsApp:
     </h4>
     <input
      type="text"
      placeholder="+234 123 456 7890"
      className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
      value={whatsApp}
      onInput={(e) => setWhatsApp(e.target.value)}
     />
    </div>
   </div>
  </Modal>
 )
}

export default ContactModal
