import Modal from "../../../../shared/Modal"
import useAdminContext from "../../../../context/useAdminContext"
import { useState } from "react"

const WhyChooseUsModal = ({ toggleOpen }) => {
 const { handleReasonSubmit } = useAdminContext()
 const [heading, setHeading] = useState(``)
 const [paragraph, setParagraph] = useState(``)

 const handleSubmission = async () => {
  const params = { benefit_heading: heading, benefit_paragraph: paragraph }
  if (heading !== `` && paragraph !== ``) {
   await handleReasonSubmit(params)
  }
 }

 return (
  <Modal toggleOpen={toggleOpen} modalTitle="Add Reason" submit={handleSubmission}>
   <div className="grid gap-4">
    <div className="flex flex-col gap-2">
     <h4 className="text-base font-sansation-bold text-main-primary">Heading</h4>
     <input
      type="text"
      placeholder="lorem ipsum"
      className="w-full px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
      value={heading}
      onInput={(e) => setHeading(e.target.value)}
     />
    </div>
    <div className="flex flex-col gap-2">
     <h4 className="text-base font-sansation-bold text-main-primary">Paragraph</h4>
     <textarea
      className="w-full h-40 px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
      placeholder="lorem ipsum"
      value={paragraph}
      onInput={(e) => setParagraph(e.target.value)}></textarea>
    </div>
   </div>
  </Modal>
 )
}

export default WhyChooseUsModal
