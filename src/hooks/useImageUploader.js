import { useState } from "react"

const useImageUploader = (title, btnText) => {
 const [imgID, setImgID] = useState(0)
 const [imgURL, setImgURL] = useState(``)

 const handleImg = () => {
  const { wp } = window

  if (wp && wp.media) {
   const imgUploader = wp.media({
    title: title,
    button: {
     text: btnText,
    },
    multiple: false,
   })

   imgUploader.on("select", () => {
    const attachment = imgUploader.state().get(`selection`).first().toJSON()
    setImgID(attachment.id)
    setImgURL(attachment.url)
   })

   imgUploader.open()
  }
 }

 return { imgID, imgURL, handleImg }
}

export default useImageUploader
