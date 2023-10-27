import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../constants"

const useService = (param) => {
 const [service, setService] = useState([])

 const getService = async (id) => {
  let cat = {}
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/service/get?service_id=${id}`).then((res) => {
   cat = res.data
  })

  return cat
 }

 useEffect(async () => {
  const url = window.location.href
  const isService = url.includes(param)

  if (isService) {
   const serviceFromURL = url.split(`/`)
   serviceFromURL.pop()
   console.log(serviceFromURL)
   const service = await getService(serviceFromURL.pop())
   setService(service)
  }
 }, [])

 return [service]
}

export default useService
