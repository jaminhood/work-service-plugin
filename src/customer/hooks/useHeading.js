import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../constants"

const useHeading = (currentHeading, param) => {
 const [heading, setHeading] = useState(currentHeading)
 const [subCategories, setSubCategories] = useState(0)

 const getCategory = async (id) => {
  let cat = {}
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/sub-categories/get?category_id=${id}`).then((res) => {
   cat = res.data
  })

  return cat
 }

 useEffect(async () => {
  const url = window.location.href
  const isCategory = url.includes(param)

  if (isCategory) {
   const categoryFromURL = url.split(`/`)
   categoryFromURL.pop()
   const categoryID = categoryFromURL.pop()
   const category = await getCategory(categoryID)
   setHeading(category[0].category_name)
   setSubCategories(category)
  }
 }, [currentHeading])

 return [heading, subCategories]
}

export default useHeading
