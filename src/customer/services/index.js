import { useState } from "react"
import Layout from "../Layout"
import CustomerContentBox from "../components/customer-content-box"
import useHeading from "../hooks/useHeading"
import ServicesComp from "./components/ServicesComp"
import SubCategories from "./components/SubCategories"

const CustomerServicesPage = () => {
 let serviceHead = `Category`
 const [services, setServices] = useState([])

 const [heading, subCategories] = useHeading(serviceHead, `/category/`)

 return (
  <Layout title={heading} showTitle={false}>
   <CustomerContentBox title={heading}>
    <SubCategories subCategories={subCategories} setServices={setServices} />
    <ServicesComp services={services} />
   </CustomerContentBox>
  </Layout>
 )
}

export default CustomerServicesPage
